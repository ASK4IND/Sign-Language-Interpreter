from flask import Flask, Response, jsonify, request
import cv2
import time
import numpy as np
from cvzone.HandTrackingModule import HandDetector
import tensorflow as tf
from flask_cors import CORS
import google.generativeai as genai

GEMINI_API_KEY = "key" 
genai.configure(api_key=GEMINI_API_KEY)  # Replace with your key
gemini_model = genai.GenerativeModel("gemini-1.5-pro")

app = Flask(__name__)
CORS(app)  # Allow cross-origin from React

IMG_SIZE = 224
MODEL_DIR = "Model/model.savedmodel"
LABELS_FILE = "Model/labels.txt"

model = tf.keras.layers.TFSMLayer(MODEL_DIR, call_endpoint="serving_default")
class_names = [line.strip() for line in open(LABELS_FILE).readlines()]

cap = cv2.VideoCapture(0)
detector = HandDetector(maxHands=2)

sentence = ""
final_text = ""
predicted_letter = ""
prediction_start_time = None
prediction_accuracy = 0.0 

finger_connections = [
    (0, 1), (1, 2), (2, 3), (3, 4),
    (0, 5), (5, 6), (6, 7), (7, 8),
    (0, 9), (9, 10), (10, 11), (11, 12),
    (0, 13), (13, 14), (14, 15), (15, 16),
    (0, 17), (17, 18), (18, 19), (19, 20)
]

def generate_frames():
    global sentence, predicted_letter, prediction_start_time,prediction_accuracy

    while True:
        success, img = cap.read()
        if not success:
            continue

        hands, _ = detector.findHands(img, draw=False)
        white_img = np.ones((IMG_SIZE, IMG_SIZE, 3), dtype=np.uint8) * 255
        all_points = []

        if hands:
            for hand in hands:
                lmList = hand['lmList']
                all_points += [lm[:2] for lm in lmList]

            if all_points:
                x_vals = [pt[0] for pt in all_points]
                y_vals = [pt[1] for pt in all_points]
                x_min, x_max = min(x_vals), max(x_vals)
                y_min, y_max = min(y_vals), max(y_vals)

                width, height = x_max - x_min, y_max - y_min
                box_size = max(width, height)
                scale = (IMG_SIZE - 40) / box_size
                offset = 20

                center_offset_x = (IMG_SIZE - int(width * scale)) // 2
                center_offset_y = (IMG_SIZE - int(height * scale)) // 2

                for hand in hands:
                    scaled_landmarks = [
                        (int((lm[0] - x_min) * scale) + center_offset_x,
                         int((lm[1] - y_min) * scale) + center_offset_y)
                        for lm in hand['lmList']
                    ]

                    for x, y in scaled_landmarks:
                        cv2.circle(white_img, (x, y), 4, (0, 0, 255), -1)
                    for conn in finger_connections:
                        x1, y1 = scaled_landmarks[conn[0]]
                        x2, y2 = scaled_landmarks[conn[1]]
                        cv2.line(white_img, (x1, y1), (x2, y2), (0, 255, 0), 2)

                img_input = white_img.astype(np.float32) / 127.5 - 1
                img_input = np.expand_dims(img_input, axis=0)

                predictions = model(img_input)
                output_key = list(predictions.keys())[0]
                predictions_array = predictions[output_key].numpy()
                new_prediction = class_names[np.argmax(predictions_array)]

                # Ensure it's a 1D array (take first sample if needed)
                if len(predictions_array.shape) == 2:
                    predictions_array = predictions_array[0]

                # Guard against index error
                if len(predictions_array) == len(class_names):
                    predicted_index = int(np.argmax(predictions_array))
                    new_prediction = class_names[predicted_index]
                    prediction_accuracy = float(predictions_array[predicted_index]) * 100  # convert to percentage
                else:
                    new_prediction = "Unknown"
                    prediction_accuracy = 0.0
  
                if new_prediction != predicted_letter:
                    predicted_letter = new_prediction
                    prediction_start_time = time.time()
                elif prediction_start_time and (time.time() - prediction_start_time) >= 2:
                    if predicted_letter == "space":
                        sentence += " "
                    elif predicted_letter.lower() != "nothing":
                        sentence += predicted_letter
                    prediction_start_time = None
                    
                    
        white_resized = cv2.resize(white_img, (img.shape[1], img.shape[0]))
        combined = np.hstack((img, white_resized))
        
        display_text = f"Prediction: {predicted_letter} ({prediction_accuracy:.2f}%)"
        cv2.putText(combined, display_text, (10, 30), cv2.FONT_HERSHEY_SIMPLEX,
                    1, (0, 255, 255), 2, cv2.LINE_AA)

        _, buffer = cv2.imencode('.jpg', combined)
        frame = buffer.tobytes()
        yield (b'--frame\r\nContent-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@app.route("/video_feed")
def video_feed():
    return Response(generate_frames(), mimetype="multipart/x-mixed-replace; boundary=frame")

@app.route("/get_text")
def get_text():
    return jsonify({
        "raw_text": sentence,
        "final_text": final_text,
        "live_prediction": predicted_letter
    })

@app.route("/finalize_text", methods=["POST"])
def finalize_text():
    global final_text, sentence

    raw_text = sentence.strip()
    sentence = ""

    if raw_text:
        prompt = (
            "You are a language correction assistant specialized in interpreting Sign Language into grammatically correct English sentences.\n"
            "The input may contain concatenated or joined words without spaces (e.g., 'IAMABHAY').\n"
            "Break them correctly into meaningful English and convert into a grammatically correct sentence.\n"
            "Only return the corrected sentence without any explanation.\n"
            f"Sign Language: {raw_text}\n"
            "English Sentence:"
        )
        try:
            gemini_response = gemini_model.generate_content(prompt)
            if hasattr(gemini_response, 'text') and gemini_response.text:
                final_text = gemini_response.text.strip()
            else:
                final_text = raw_text
        except Exception as e:
            print("❌ Gemini API error:", e)
            final_text = f"(Failed to enhance grammar: {e})"
    else:
        final_text = "(No input sentence provided.)"

    return jsonify({"success": True, "final_text": final_text})

    #         gemini_response = gemini_model.generate_content(prompt)
    #         final_text = gemini_response.text.strip() if hasattr(gemini_response, 'text') else raw_text
    #     except Exception as e:
    #         final_text = f"(Gemini error: {e})"
    # else:
    #     final_text = "(No input sentence provided.)"

    # return jsonify({"success": True, "final_text": final_text})

if __name__ == "__main__":
    app.run(debug=True)
