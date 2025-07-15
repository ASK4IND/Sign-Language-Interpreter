from flask import Flask, Response, jsonify, request
import cv2
import time
import numpy as np
from cvzone.HandTrackingModule import HandDetector
import tensorflow as tf
import math
from flask_cors import CORS  # <-- Added

app = Flask(__name__)
CORS(app)  # <-- Allow cross-origin access from React

# Constants
OFFSET = 20
IMG_SIZE = 300
LABELS_FILE = "Model/labels.txt"
MODEL_DIR = "Model/model.savedmodel"

# Load Model
model = tf.keras.layers.TFSMLayer(MODEL_DIR, call_endpoint="serving_default")
class_names = [line.strip() for line in open(LABELS_FILE, "r").readlines()]

# Webcam & Variables
cap = cv2.VideoCapture(0)
detector = HandDetector(maxHands=2)
sentence = ""
final_text = ""
predicted_letter = None
prediction_start_time = None

def generate_frames():
    global sentence, predicted_letter, prediction_start_time

    while True:
        success, img = cap.read()
        if not success:
            continue

        hands, img = detector.findHands(img, draw=True)

        if hands:
            x_min, y_min = float('inf'), float('inf')
            x_max, y_max = 0, 0

            for hand in hands:
                x, y, w, h = hand['bbox']
                x_min = min(x_min, x)
                y_min = min(y_min, y)
                x_max = max(x_max, x + w)
                y_max = max(y_max, y + h)

            x1, y1 = max(x_min - OFFSET, 0), max(y_min - OFFSET, 0)
            x2, y2 = min(x_max + OFFSET, img.shape[1]), min(y_max + OFFSET, img.shape[0])

            imgCrop = img[y1:y2, x1:x2]

            if imgCrop.size > 0:
                h_crop, w_crop, _ = imgCrop.shape
                imgWhite = np.ones((IMG_SIZE, IMG_SIZE, 3), np.uint8) * 255

                aspectRatio = h_crop / w_crop

                if aspectRatio > 1:
                    scale = IMG_SIZE / h_crop
                    new_w = math.ceil(scale * w_crop)
                    imgResize = cv2.resize(imgCrop, (new_w, IMG_SIZE))
                    x_offset = (IMG_SIZE - new_w) // 2
                    imgWhite[:, x_offset:x_offset + new_w] = imgResize
                else:
                    scale = IMG_SIZE / w_crop
                    new_h = math.ceil(scale * h_crop)
                    imgResize = cv2.resize(imgCrop, (IMG_SIZE, new_h))
                    y_offset = (IMG_SIZE - new_h) // 2
                    imgWhite[y_offset:y_offset + new_h, :] = imgResize

                imgBlob = np.expand_dims(imgWhite.astype(np.float32) / 127.5 - 1, axis=0)
                predictions = model(imgBlob)
                output_key = list(predictions.keys())[0]
                predictions_array = predictions[output_key].numpy()
                

                new_prediction = class_names[np.argmax(predictions_array)]
               
                if new_prediction != predicted_letter:
                    predicted_letter = new_prediction
                    prediction_start_time = time.time()
                      


                if prediction_start_time and (time.time() - prediction_start_time) >= 2:
                    if predicted_letter == "space":
                        sentence += " "
                    elif predicted_letter.lower() not in ["nothing"]:
                        sentence += predicted_letter
                    prediction_start_time = None

                cv2.putText(img, f"Prediction: {predicted_letter}", (50, 50), 
                            cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)

        _, buffer = cv2.imencode('.jpg', img)
        frame = buffer.tobytes()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

@app.route('/video_feed')
def video_feed():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

@app.route('/get_text')
def get_text():
    return jsonify({
        "raw_text": sentence,
        "final_text": final_text,
        "live_prediction": predicted_letter
    })

@app.route('/finalize_text', methods=['POST'])
def finalize_text():
    global final_text, sentence
    final_text = sentence.strip()
    sentence = ""
    return jsonify({"success": True, "final_text": final_text})

@app.route('/stop_camera', methods=['POST'])
def stop_camera():
    global camera_running, cap
    camera_running = False
    generate_frames()
    
    print("Camera Stopped Successfully!")
    return jsonify({'message': 'Camera stopped'})

@app.route('/start_camera', methods=['POST'])
def start_camera():
    global camera_running, cap
    camera_running = True
    cap.release()
    print("Camera starrted Successfully!")
    return jsonify({'message': 'Camera start'})

if __name__ == "__main__":
    app.run(debug=True)











