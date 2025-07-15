

// import React, { useState } from 'react';

// const Level3 = () => {
//   const [videoSrc, setVideoSrc] = useState(process.env.PUBLIC_URL + '/Level3/can_i_help_you.mp4');

//   const videos = [
//     { text: "Can I help you?", filename: "can_i_help_you.mp4" },
//     { text: "Help me", filename: "help_me.mp4" },
//     { text: "Hi, how are you?", filename: "hi_how_are_you.mp4" },
//     { text: "No need to worry", filename: "no_need_to_worry.mp4" },
//     { text: "This place is beautiful", filename: "this_place_is_beautiful.mp4" },
//     { text: "What do you do?", filename: "what_do_you_do.mp4" },
//   ];

//   const handleVideoChange = (filename) => {
//     setVideoSrc(process.env.PUBLIC_URL + `/Level3/${filename}`);
//   };

//   return (
//     <div className="container py-5 learning-bg">
//       <h2 className="text-center mb-4 fw-bold text-primary">Level 3 - Learn Sentences</h2>

//       <div className="row">
//         {/* Left Video Section */}
//         <div className="col-md-6 d-flex justify-content-center align-items-center">
//           <div className="card bg-dark text-light shadow-lg border-3 border-primary rounded-4 w-100">
//             <div className="card-header text-center fs-4 fw-bold py-3 bg-primary text-white rounded-top">
//               Watch & Learn
//             </div>
//             <div className="card-body text-center">
//               <video key={videoSrc} width="100%" height="auto" controls className="rounded shadow-lg border border-light p-2">
//                 <source src={videoSrc} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           </div>
//         </div>

//         {/* Right Buttons Section */}
//         <div className="col-md-6 pt-3">
//           <div className="border border-primary rounded-4 shadow-lg p-4 bg-white">
//             <h4 className="text-center fw-bold text-uppercase mb-4 text-primary">
//               Select a Sentence
//             </h4>
//             <div className="list-group">
//               {videos.map((video, index) => (
//                 <button
//                   key={index}
//                   className="list-group-item list-group-item-action border border-primary text-primary fw-semibold rounded-3 mb-2 shadow-sm hover-effect"
//                   onClick={() => handleVideoChange(video.filename)}
//                   style={{ backgroundColor: "#EAF4FB" }}
//                 >
//                   {video.text}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Level3;






// import React, { useState } from 'react';

// const Level3 = () => {
//   const [videoSrc, setVideoSrc] = useState(process.env.PUBLIC_URL + '/Level3/can_i_help_you.mp4');
//   const [activeIndex, setActiveIndex] = useState(0);

//   const videos = [
//     { text: "Can I help you?", filename: "can_i_help_you.mp4" },
//     { text: "Help me", filename: "help_me.mp4" },
//     { text: "Hi, how are you?", filename: "hi_how_are_you.mp4" },
//     { text: "No need to worry", filename: "no_need_to_worry.mp4" },
//     { text: "This place is beautiful", filename: "this_place_is_beautiful.mp4" },
//     { text: "What do you do?", filename: "what_do_you_do.mp4" },
//   ];

//   const handleVideoChange = (filename, index) => {
//     setVideoSrc(process.env.PUBLIC_URL + `/Level3/${filename}`);
//     setActiveIndex(index);
//   };

//   return (
//     <div style={styles.bg}>
//       <h2 style={styles.heading}>Level 3 - Learn Sentences</h2>

//       <div className="container py-4">
//         <div className="row">

//           {/* Video Section */}
//           <div className="col-md-6 mb-4">
//             <div style={styles.card}>
//               <div style={styles.cardHeader}>Watch & Learn</div>
//               <div style={styles.cardBody}>
//                 <video key={videoSrc} width="100%" height="auto" controls style={styles.video}>
//                   <source src={videoSrc} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </div>
//             </div>
//           </div>

//           {/* Buttons Section */}
//           <div className="col-md-6">
//             <div style={styles.card}>
//               <h4 style={styles.subHeading}>Select a Sentence</h4>
//               {videos.map((video, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handleVideoChange(video.filename, index)}
//                   style={{
//                     ...styles.button,
//                     backgroundColor: activeIndex === index ? '#0d6efd' : '#ffffff',
//                     color: activeIndex === index ? '#ffffff' : '#0d6efd'
//                   }}
//                 >
//                   {video.text}
//                 </button>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// // Inline CSS
// const styles = {
//   bg: {
//     backgroundColor: '#f1f5f9',
//     minHeight: '100vh',
//     padding: '40px 0'
//   },
//   heading: {
//     textAlign: 'center',
//     color: '#0d6efd',
//     fontWeight: 'bold',
//     marginBottom: '30px'
//   },
//   subHeading: {
//     textAlign: 'center',
//     color: '#0d6efd',
//     fontWeight: 'bold',
//     marginBottom: '20px'
//   },
//   card: {
//     backgroundColor: '#ffffff',
//     border: '2px solid #0d6efd',
//     borderRadius: '10px',
//     boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
//     padding: '20px'
//   },
//   cardHeader: {
//     backgroundColor: '#0d6efd',
//     color: '#ffffff',
//     padding: '10px',
//     textAlign: 'center',
//     fontWeight: '600',
//     borderTopLeftRadius: '10px',
//     borderTopRightRadius: '10px'
//   },
//   cardBody: {
//     backgroundColor: '#f8f9fa',
//     padding: '15px',
//     textAlign: 'center'
//   },
//   video: {
//     borderRadius: '8px',
//     boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
//   },
//   button: {
//     display: 'block',
//     width: '100%',
//     padding: '12px',
//     marginBottom: '12px',
//     border: '2px solid #0d6efd',
//     borderRadius: '5px',
//     fontWeight: '500',
//     cursor: 'pointer',
//     transition: '0.3s all ease'
//   }
// };

// export default Level3;






import React, { useState } from 'react';

const Level3 = () => {
  const [activeVideo, setActiveVideo] = useState('can_i_help_you.mp4');

  const videos = [
    { text: "Can I help you?", filename: "can_i_help_you.mp4" },
    { text: "Help me", filename: "help_me.mp4" },
    { text: "Hi, how are you?", filename: "hi_how_are_you.mp4" },
    { text: "No need to worry", filename: "no_need_to_worry.mp4" },
    { text: "This place is beautiful", filename: "this_place_is_beautiful.mp4" },
    { text: "What do you do?", filename: "what_do_you_do.mp4" },
  ];

  const videoSrc = `${process.env.PUBLIC_URL}/Level3/${activeVideo}`;

  const handleVideoChange = (filename) => {
    setActiveVideo(filename);
  };

  return (
    <div className="container py-5 learning-bg">
      <h2 className="text-center mb-4 fw-bold text-primary">
        Level 3 - Learn Sentences
      </h2>

      <div className="row">
        {/* Left Video Section */}
        <div className="col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0">
          <div className="card bg-dark text-light shadow-lg border-3 border-primary rounded-4 w-100">
            <div className="card-header text-center fs-4 fw-bold py-3 bg-primary text-white rounded-top">
              Watch & Learn
            </div>
            <div className="card-body text-center">
              <video
                key={videoSrc}
                width="100%"
                height="auto"
                controls
                className="rounded shadow-lg border border-light p-2"
              >
                <source src={videoSrc} type="video/mp4" />
                Video not available.
              </video>
            </div>
          </div>
        </div>

        {/* Right Sentence Selection Section */}
        <div className="col-md-6">
          <div className="border border-primary rounded-4 shadow-lg p-4 bg-white">
            <h4 className="text-center fw-bold text-uppercase mb-4 text-primary">
              Select a Sentence
            </h4>

            <div className="list-group">
              {videos.map((video, index) => (
                <button
                  key={index}
                  onClick={() => handleVideoChange(video.filename)}
                  className={`list-group-item list-group-item-action border border-primary text-primary fw-semibold rounded-3 mb-2 shadow-sm hover-effect ${
                    activeVideo === video.filename ? 'active bg-primary text-white border-0' : ''
                  }`}
                  style={{ backgroundColor: activeVideo === video.filename ? '' : '#EAF4FB' }}
                >
                  {video.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Level3;

