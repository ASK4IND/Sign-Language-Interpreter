from flask import Flask, request, Response, jsonify ,send_from_directory
from flask_cors import CORS
import cv2
from cvzone.HandTrackingModule import HandDetector
import numpy as np
import os
import time
import shutil
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.optimizers import Adam
import threading


app = Flask(__name__)
CORS(app)  # Enable CORS for React to access the backend

# Global variables
imgSize = 224
detector = HandDetector(maxHands=2)
finger_connections = [
    (0, 1), (1, 2), (2, 3), (3, 4),
    (0, 5), (5, 6), (6, 7), (7, 8),
    (0, 9), (9, 10), (10, 11), (11, 12),
    (0, 13), (13, 14), (14, 15), (15, 16),
    (0, 17), (17, 18), (18, 19), (19, 20)
]
capture = False
class_name = ""
image_count = 0
counter = 0

def generate_frames():
    global capture, class_name, image_count, counter
    cap = cv2.VideoCapture(0)
    while True:
        success, img = cap.read()
        if not success:
            break

        hands, _ = detector.findHands(img, draw=True)
        white_img = np.ones((imgSize, imgSize, 3), dtype=np.uint8) * 255
        all_points = []

        if hands:
            for hand in hands:
                lmList = hand['lmList']
                for lm in lmList:
                    all_points.append(lm[:2])

            if all_points:
                x_vals = [pt[0] for pt in all_points]
                y_vals = [pt[1] for pt in all_points]
                x_min, x_max = min(x_vals), max(x_vals)
                y_min, y_max = min(y_vals), max(y_vals)

                width, height = x_max - x_min, y_max - y_min
                box_size = max(width, height)
                scale = (imgSize - 40) / box_size
                center_offset_x = (imgSize - int(width * scale)) // 2
                center_offset_y = (imgSize - int(height * scale)) // 2

                for hand in hands:
                    lmList = hand['lmList']
                    scaled_landmarks = []
                    for lm in lmList:
                        x = int((lm[0] - x_min) * scale) + center_offset_x
                        y = int((lm[1] - y_min) * scale) + center_offset_y
                        scaled_landmarks.append((x, y))
                        cv2.circle(white_img, (x, y), 4, (0, 0, 255), -1)

                    for conn in finger_connections:
                        x1, y1 = scaled_landmarks[conn[0]]
                        x2, y2 = scaled_landmarks[conn[1]]
                        cv2.line(white_img, (x1, y1), (x2, y2), (0, 255, 0), 2)

                if capture and counter < image_count:
                    folder_path = os.path.join("maindata", class_name)
                    os.makedirs(folder_path, exist_ok=True)
                    filename = os.path.join(folder_path, f'Image_{time.time()}.jpg')
                    cv2.imwrite(filename, white_img)
                    counter += 1
                    print(f"Saved {filename} ({counter}/{image_count})")
                elif capture and counter >= image_count:
                    capture = False
                    counter = 0
                    print("Image capture completed.")

        ret, buffer = cv2.imencode('.jpg', img)
        frame = buffer.tobytes()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
    cap.release()

@app.route('/start', methods=['POST'])
def start():
    global capture, class_name, image_count, counter
    data = request.json
    class_name = data.get('class_name')
    image_count = int(data.get('image_count'))
    counter = 0
    capture = True
    return jsonify({"message": "Capture started", "class_name": class_name, "image_count": image_count})

@app.route('/signs')
def get_signs():
    signs_dir = "maindata"
    class_signs = []

    if os.path.exists(signs_dir):
        for class_folder in os.listdir(signs_dir):
            class_path = os.path.join(signs_dir, class_folder)
            if os.path.isdir(class_path):
                images = os.listdir(class_path)
                images = [img for img in images if img.lower().endswith(('.jpg', '.jpeg', '.png'))]
                if images:
                    sample_image = images[0]  # You can sort or select differently
                    image_url = f'/sign_image/{class_folder}/{sample_image}'
                    class_signs.append({'class_name': class_folder, 'image_url': image_url})
    return jsonify(class_signs)

@app.route('/sign_image/<class_name>/<filename>')
def sign_image(class_name, filename):
    return send_from_directory(os.path.join('maindata', class_name), filename)



@app.route('/delete_sign/<class_name>', methods=['DELETE'])
def delete_sign(class_name):
    folder_path = os.path.join('maindata', class_name)
    if os.path.exists(folder_path):
        try:
            shutil.rmtree(folder_path)
            return jsonify({'message': f'Successfully deleted {class_name}'}), 200
        except Exception as e:
            return jsonify({'error': str(e)}), 500
    else:
        return jsonify({'error': 'Folder not found'}), 404
    

@app.route('/get_signs')
def get_sign():
    base_dir = 'maindata'
    result = []
    if os.path.exists(base_dir):
        for class_name in os.listdir(base_dir):
            class_path = os.path.join(base_dir, class_name)
            if os.path.isdir(class_path):
                images = os.listdir(class_path)
                if images:
                    result.append({
                        'class': class_name,
                        'image': f'maindata/{class_name}/{images[0]}'
                    })
    return jsonify(result)

@app.route('/maindata/<path:filename>')
def serve_image(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)



@app.route('/train_model', methods=['POST'])
def train_model():
    thread = threading.Thread(target=run_training)
    thread.start()
    return jsonify({'message': 'Model training started!'}), 200

def run_training():
    data_dir = app.config['maindata']  # Typically 'maindata'

    datagen = ImageDataGenerator(rescale=1.0/255, validation_split=0.2)

    train_generator = datagen.flow_from_directory(
        data_dir,
        target_size=(64, 64),
        batch_size=32,
        class_mode='categorical',
        subset='training'
    )

    val_generator = datagen.flow_from_directory(
        data_dir,
        target_size=(64, 64),
        batch_size=32,
        class_mode='categorical',
        subset='validation'
    )

    model = Sequential([
        Conv2D(32, (3, 3), activation='relu', input_shape=(64, 64, 3)),
        MaxPooling2D(pool_size=(2, 2)),
        Conv2D(64, (3, 3), activation='relu'),
        MaxPooling2D(pool_size=(2, 2)),
        Flatten(),
        Dense(128, activation='relu'),
        Dense(train_generator.num_classes, activation='softmax')
    ])

    model.compile(optimizer=Adam(), loss='categorical_crossentropy', metrics=['accuracy'])

    model.fit(train_generator, validation_data=val_generator, epochs=5)

    # Save in SavedModel format
    model.save('saved_model/sign_language_model')
    print("Model saved to 'saved_model/sign_language_model'")


@app.route('/video_feed')
def video_feed():
    return Response(generate_frames(),
                    mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(debug=True)
