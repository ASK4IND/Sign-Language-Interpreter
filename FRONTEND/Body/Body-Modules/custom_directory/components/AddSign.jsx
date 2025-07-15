// import React, { useState, useContext, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import UserContext from '../contexts/UserContext';
// import ApiService from '../services/ApiService';

// function AddSign() {
//   const { currentUser } = useContext(UserContext);
//   const navigate = useNavigate();
//   const videoRef = useRef(null);
  
//   const [formData, setFormData] = useState({
//     name: '',
//     meaning: '',
//     language: 'en'
//   });
//   const [isRecording, setIsRecording] = useState(false);
//   const [recordingComplete, setRecordingComplete] = useState(false);
//   const [countdown, setCountdown] = useState(null);
//   const [error, setError] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
  
//   const streamRef = useRef(null);
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };
  
//   const startRecording = async () => {
//     try {
//       setError('');
//       const { stream, success } = await ApiService.startVideoCapture();
      
//       if (!success) {
//         setError('Could not access camera');
//         return;
//       }
      
//       // In a real app, we would set the stream to the video element
//       // For demo purposes, we'll simulate this
//       streamRef.current = stream;
//       setIsRecording(true);
      
//       // Start countdown
//       let count = 3;
//       setCountdown(count);
      
//       const timer = setInterval(() => {
//         count -= 1;
//         setCountdown(count);
        
//         if (count === 0) {
//           clearInterval(timer);
//           stopRecording();
//         }
//       }, 1000);
//     } catch (err) {
//       console.error('Error starting recording:', err);
//       setError('Could not start recording');
//     }
//   };
  
//   const stopRecording = async () => {
//     try {
//       await ApiService.stopVideoCapture(streamRef.current);
//       streamRef.current = null;
//       setIsRecording(false);
//       setRecordingComplete(true);
//       setCountdown(null);
//     } catch (err) {
//       console.error('Error stopping recording:', err);
//       setError('Error finishing recording');
//     }
//   };
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!formData.name.trim()) {
//       setError('Please enter a sign name');
//       return;
//     }
    
//     if (!formData.meaning.trim()) {
//       setError('Please enter a meaning for the sign');
//       return;
//     }
    
//     if (!recordingComplete) {
//       setError('Please record the sign gesture before submitting');
//       return;
//     }
    
//     setIsSubmitting(true);
//     setError('');
    
//     try {
//       await ApiService.createSign(currentUser.id, formData);
//       navigate('/signs', { state: { success: true } });
//     } catch (err) {
//       console.error('Error creating sign:', err);
//       setError('Failed to create sign. Please try again.');
//       setIsSubmitting(false);
//     }
//   };
  
//   return (
//     <div className="add-sign-container">
//       <h1>Add New Sign</h1>
      
//       <form onSubmit={handleSubmit} className="sign-form">
//         <div className="form-group">
//           <label htmlFor="name">Sign Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="e.g., Hello, Thank you"
//             disabled={isSubmitting}
//           />
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="meaning">Meaning</label>
//           <textarea
//             id="meaning"
//             name="meaning"
//             value={formData.meaning}
//             onChange={handleChange}
//             placeholder="Describe what this sign means"
//             disabled={isSubmitting}
//           />
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="language">Language</label>
//           <select
//             id="language"
//             name="language"
//             value={formData.language}
//             onChange={handleChange}
//             disabled={isSubmitting}
//           >
//             <option value="en">English</option>
//             <option value="es">Spanish</option>
//             <option value="fr">French</option>
//             {/* Add more languages as needed */}
//           </select>
//         </div>
        
//         <div className="video-capture">
//           <h3>Capture Sign Gesture</h3>
          
//           <div className="video-container">
//             <video 
//               ref={videoRef} 
//               className={isRecording ? 'recording' : ''}
//               width="400" 
//               height="300"
//             >
//               Your browser does not support video recording.
//             </video>
            
//             {countdown !== null && (
//               <div className="countdown">{countdown}</div>
//             )}
            
//             {recordingComplete && !isRecording && (
//               <div className="recording-complete">
//                 ✓ Recording complete
//               </div>
//             )}
//           </div>
          
//           <div className="video-controls">
//             <button
//               type="button"
//               onClick={startRecording}
//               disabled={isRecording || isSubmitting}
//               className="btn"
//             >
//               {recordingComplete ? 'Re-record' : 'Record Sign (3s)'}
//             </button>
            
//             {isRecording && (
//               <button
//                 type="button"
//                 onClick={stopRecording}
//                 className="btn btn-danger"
//               >
//                 Stop Recording
//               </button>
//             )}
//           </div>
//         </div>
        
//         {error && <div className="error-message">{error}</div>}
        
//         <div className="form-actions">
//           <button
//             type="button"
//             onClick={() => navigate('/signs')}
//             className="btn btn-secondary"
//             disabled={isSubmitting}
//           >
//             Cancel
//           </button>
          
//           <button
//             type="submit"
//             className="btn btn-primary"
//             disabled={isSubmitting || !recordingComplete}
//           >
//             {isSubmitting ? 'Saving...' : 'Save Sign'}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default AddSign;

import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../services/ApiService';    // Keep your service logic here
import './AddSign.css';


function AddSign() {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    meaning: '',
    language: 'en',
  });

  const [isRecording, setIsRecording] = useState(false);
  const [recordingComplete, setRecordingComplete] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const streamRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const startRecording = async () => {
    try {
      setError('');
      const { stream, success } = await ApiService.startVideoCapture();

      if (!success) {
        setError('Could not access camera');
        return;
      }

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      setIsRecording(true);

      let count = 3;
      setCountdown(count);

      const timer = setInterval(() => {
        count -= 1;
        setCountdown(count);

        if (count === 0) {
          clearInterval(timer);
          stopRecording();
        }
      }, 1000);
    } catch (err) {
      console.error('Error starting recording:', err);
      setError('Could not start recording');
    }
  };

  const stopRecording = async () => {
    try {
      await ApiService.stopVideoCapture(streamRef.current);
      streamRef.current = null;
      setIsRecording(false);
      setRecordingComplete(true);
      setCountdown(null);
    } catch (err) {
      console.error('Error stopping recording:', err);
      setError('Error finishing recording');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setError('Please enter a sign name');
      return;
    }

    if (!formData.meaning.trim()) {
      setError('Please enter a meaning for the sign');
      return;
    }

    if (!recordingComplete) {
      setError('Please record the sign gesture before submitting');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      await ApiService.createSign(formData);
      navigate('/signs', { state: { success: true } });
    } catch (err) {
      console.error('Error creating sign:', err);
      setError('Failed to create sign. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="add-sign-container">
      <h1>Add New Sign</h1>

      <form onSubmit={handleSubmit} className="sign-form">
        <div className="form-group">
          <label htmlFor="name">Sign Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="meaning">Sign Meaning</label>
          <input
            type="text"
            id="meaning"
            name="meaning"
            value={formData.meaning}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="language">Language</label>
          <select
            id="language"
            name="language"
            value={formData.language}
            onChange={handleChange}
            disabled={isSubmitting}
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="bn">Bengali</option>
          </select>
        </div>

        <div className="video-container">
          <video ref={videoRef} autoPlay muted className="video-preview" />
        </div>

        {isRecording && countdown !== null && (
          <div className="countdown-timer">Recording in {countdown}...</div>
        )}

        {error && <p className="error-message">{error}</p>}

        <div className="button-group">
          {!isRecording && !recordingComplete && (
            <button type="button" onClick={startRecording}>
              Start Recording
            </button>
          )}

          {recordingComplete && <p>Recording Complete!</p>}

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Add Sign'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddSign;
