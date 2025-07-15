

import React, { useState } from "react";

function LearningWords() {
  const [selectedImage, setSelectedImage] = useState("Words/ANGRY.jpg");
  const [selectedWord, setSelectedWord] = useState("ANGRY");

  const sampleWords = [
   
    { title: "Word: Angry", image: "Words/ANGRY.jpg", word: "ANGRY" },
    { title: "Word: Bad", image: "Words/BAD.jpg", word: "BAD" },
    { title: "Word: Sleep", image: "Words/BED.jpg", word: "SLEEP" },
    { title: "Word: Bored", image: "Words/BORED.jpg", word: "BORED" },
    { title: "Word: Good", image: "Words/GOOD.jpg", word: "GOOD" },
    { title: "Word: Help", image: "Words/HELP.jpg", word: "HELP" },
    { title: "Word: Hungry", image: "Words/HUNGRY.jpg", word: "HUNGRY" },
    { title: "Word: Talk", image: "Words/TALK.jpg", word: "TALK" },
    { title: "Word: Water", image: "Words/WATER.jpg", word: "WATER" },
    { title: "Word: Where", image: "Words/WHERE.jpg", word: "WHERE" },
    { title: "Word: Who", image: "Words/WHO.jpg", word: "WHO" },
    { title: "Word: You", image: "Words/YOU.jpg", word: "YOU" },
    { title: "Word: Appreciate", image: "Words/APPRECIATE.jpg", word: "APPRECIATE" },
    { title: "Word: Cold", image: "Words/COLD.jpg", word: "COLD" },
    { title: "Word: Congratulation", image: "Words/CONGRATULATIONS.jpg", word: "CONGRATULATION" },
    { title: "Word: Fever", image: "Words/FEVER.jpg", word: "FEVER" },
    { title: "Word: Food", image: "Words/FOOD.jpg", word: "FOOD" },
    { title: "Word: Friend", image: "Words/FRIEND.jpg", word: "FRIEND" },
    { title: "Word: Heart", image: "Words/HEART.jpg", word: "HEART" },
    { title: "Word: Medicine", image: "Words/MEDICINE.jpg", word: "MEDICINE" },
    { title: "Word: Welcome", image: "Words/WELCOME.jpg", word: "WELCOME" },
    
  ];

  return (
    <div className="container-fluid py-5 learning-bg">
      <div className="row">
        {/* Left Screen - Selected Word */}
        <div className="col-md-5 d-flex justify-content-center align-items-center">
          <div className="card bg-dark text-light shadow-lg border-3 border-info rounded-4 fixed-preview w-75">
            <div className="card-header text-center fs-4 fw-bold py-3 bg-info text-dark rounded-top">
              LEVEL 1 - Learning Words
            </div>
            <div className="card-body text-center">
              <h3 className="card-title text-warning display-5 fw-bold mb-3">
                Word: {selectedWord}
              </h3>
              <div className="image-container border border-light p-3 rounded-3 shadow-lg mx-auto" style={{height:"auto"}}>
                <img
                  src={selectedImage}
                  alt={`Word ${selectedWord}`}
                  className="img-fluid rounded shadow-lg"
                  style={{ width: "100%", height: "auto", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Words */}
        <div className="col-md-7 pt-3">
          <div className="scrollable-content border border-info rounded-4 shadow-lg p-4 bg-white">
            <h4 className="text-center fw-bold text-uppercase mb-4 text-info">
              Choose a Word
            </h4>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
              {sampleWords.map((wordItem, index) => (
                <div key={index} className="col">
                  <div
                    className="card text-center shadow-sm border-info border-2 rounded-3 p-2 h-100 hover-effect"
                    onClick={() => {
                      setSelectedImage(wordItem.image);
                      setSelectedWord(wordItem.word);
                    }}
                    style={{ cursor: "pointer", backgroundColor: "#f1f9ff" }}
                  >
                    <div className="card-body">
                      <h6 className="card-title fw-bold">{wordItem.title}</h6>
                    </div>
                    <div className="card-footer bg-info text-white fw-bold">
                      {wordItem.word}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style>
        {`
          .learning-bg {
            background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
            min-height: 100vh;
          }
          .fixed-preview {
            position: sticky;
            top: 20px;
          }
          .image-container {
            width: 100%;
            max-width: 400px;
            height: 300px;
            background-color: #fff;
            border-radius: 10px;
          }
          .scrollable-content {
            max-height: 80vh;
            overflow-y: auto;
          }
          .hover-effect:hover {
            transform: scale(1.08);
            transition: 0.3s ease-in-out;
            box-shadow: 0 4px 20px rgba(0, 123, 255, 0.3);
          }
        `}
      </style>
    </div>
  );
}

export default LearningWords;
