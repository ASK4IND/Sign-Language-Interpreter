    // import React, { useEffect, useState } from 'react';

    // function SignLanguageTranslator() {
    // const [rawText, setRawText] = useState('');
    // const [finalText, setFinalText] = useState('');

    // useEffect(() => {
        
    //     const interval = setInterval(() => {
    //     fetch('http://localhost:5000/get_text')
    //         .then(res => res.json())
    //         .then(data => setRawText(data.raw_text));
    //     }, 500);

    //     return () => clearInterval(interval);
    // }, []);

    // const finalizeText = () => {
    //     fetch('http://localhost:5000/finalize_text', { method: 'POST' })
    //     .then(() => {
    //         fetch('http://localhost:5000/get_text')
    //         .then(res => res.json())
    //         .then(data => {
    //             setFinalText(data.final_text);
    //             setRawText('');
    //         });
    //     });
    // };
    // const vdfeed = () => {
    //    console.log("GEt Printed")
    //     fetch('http://localhost:5000/start_camera', { method: 'POST' })
    //       .then(() => console.log("Camera Start"))
    //       .catch(err => console.error("Error stopping camera:", err));
    //   };

    // const stopCamera = () => {
       
    //     fetch('http://localhost:5000/stop_camera', { method: 'POST' })
    //       .then(() => console.log("Camera Stopped"))
    //       .catch(err => console.error("Error stopping camera:", err));
    //   };

    // return (
    //     <div className="container">
    //     <h1>🖐️ AI Sign Language Translator</h1>
    //     <div className="content">
    //         <div className="video-section">
    //         <h2>Live Detection</h2>
    //         <img
    //             src="http://localhost:5000/video_feed"
    //             id="videoFeed"
    //             alt="Live Feed"
    //         />
    //         <h3>Predicted Text:</h3>
    //         <textarea
    //             id="rawText"
    //             placeholder="Detected sign language..."
    //             value={rawText}
    //             readOnly
    //         />
    //         </div>
    //         <div className="text-section">
    //         <h2>Final Output</h2>
    //         <button onClick={finalizeText}>Finalize</button>
    //         <textarea
    //             id="finalText"
    //             placeholder="Final translated text..."
    //             value={finalText}
    //             readOnly
    //         />
    //         </div>

    //        <button onClick={stopCamera} type="button" className="btn btn-warning">
    //     Stop Camera
    //   </button>
    //   <button onClick={vdfeed} type="button" className="btn btn-warning">
    //     Start Camera
    //   </button>
    //     </div>

    //     <style>{`
    //         body {
    //         font-family: 'Poppins', sans-serif;
    //         background: #f0f0f3;
    //         text-align: center;
    //         margin: 0;
    //         padding: 0;
    //         }

    //         .container {
    //         max-width: 900px;
    //         margin: 30px auto;
    //         padding: 20px;
    //         background: #ffffff;
    //         border-radius: 15px;
    //         box-shadow: 10px 10px 20px #d1d9e6, -10px -10px 20px #ffffff;
    //         }

    //         h1 {
    //         color: #333;
    //         font-size: 24px;
    //         margin-bottom: 20px;
    //         }

    //         .content {
    //         display: flex;
    //         justify-content: space-between;
    //         flex-wrap: wrap;
    //         }

    //         .video-section,
    //         .text-section {
    //         flex: 1;
    //         padding: 20px;
    //         margin: 10px;
    //         border-radius: 12px;
    //         box-shadow: 6px 6px 12px #d1d9e6, -6px -6px 12px #ffffff;
    //         background: #ffffff;
    //         }

    //         img {
    //         width: 100%;
    //         border-radius: 10px;
    //         }

    //         textarea {
    //         width: 100%;
    //         height: 100px;
    //         padding: 10px;
    //         border-radius: 10px;
    //         border: none;
    //         background: #f0f0f3;
    //         box-shadow: inset 5px 5px 10px #d1d9e6, inset -5px -5px 10px #ffffff;
    //         font-size: 16px;
    //         resize: none;
    //         }

    //         button {
    //         width: 100%;
    //         padding: 12px;
    //         margin-top: 10px;
    //         border: none;
    //         border-radius: 10px;
    //         background: #00aaff;
    //         color: white;
    //         font-size: 18px;
    //         cursor: pointer;
    //         transition: 0.3s;
    //         }

    //         button:hover {
    //         background: #0088cc;
    //         }

    //         @media (max-width: 768px) {
    //         .content {
    //             flex-direction: column;
    //         }
    //         }
    //     `}</style>
    //     </div>
    // );
    // }

    // export default SignLanguageTranslator;

    import React, { useEffect, useState } from "react";
    import "./sign.css";
    
    function App() {
      const [livePrediction, setLivePrediction] = useState("...");
      const [rawText, setRawText] = useState("...");
      const [finalText, setFinalText] = useState("...");
    
      const fetchText = async () => {
        try {
          const res = await fetch("http://localhost:5000/get_text");
          const data = await res.json();
          setLivePrediction(data.live_prediction);
          setRawText(data.raw_text);
          setFinalText(data.final_text);
        } catch (err) {
          console.error("Fetch error:", err);
        }
      };
    
      const finalizeText = async () => {
        await fetch("http://localhost:5000/finalize_text", {
          method: "POST",
        });
        fetchText();
      };
    
      useEffect(() => {
        const interval = setInterval(fetchText, 1000);
        return () => clearInterval(interval);
      }, []);
    
      return (
        <div className="App">
          <h1>🤟 AI Sign Language Translator</h1>
          <div className="video-container">
            <img
              src="http://localhost:5000/video_feed"
              alt="Sign Language Video Stream"
            />
          </div>
          <button onClick={finalizeText}>✅ Finalize Text</button>
          <div className="text-display">
            <h3>Live Prediction: {livePrediction}</h3>
            <h4>Constructed Sentence: {rawText}</h4>
            <h5>Final Text: {finalText}</h5>
          </div>
        </div>
      );
    }
    
    export default App;
    