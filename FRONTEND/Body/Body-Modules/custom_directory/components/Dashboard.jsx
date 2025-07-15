// // import React, { useContext, useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import UserContext from '../contexts/UserContext';
// // import ApiService from '../services/ApiService';

// // function Dashboard() {
// //   const { currentUser } = useContext(UserContext);
// //   const [stats, setStats] = useState({
// //     totalSigns: 0,
// //     recentSigns: []
// //   });
// //   const [isLoading, setIsLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       if (currentUser) {
// //         try {
// //           const signs = await ApiService.getUserSigns(currentUser.id);
// //           setStats({
// //             totalSigns: signs.length,
// //             recentSigns: signs.slice(0, 3) // Get only the 3 most recent signs
// //           });
// //         } catch (error) {
// //           console.error('Error fetching dashboard data:', error);
// //         } finally {
// //           setIsLoading(false);
// //         }
// //       }
// //     };

// //     fetchData();
// //   }, [currentUser]);

// //   if (isLoading) {
// //     return <div className="loading">Loading dashboard...</div>;
// //   }

// //   return (
// //     <div className="dashboard">
// //       <h1>Welcome to Your Personal Sign Dictionary</h1>
      
// //       <div className="dashboard-stats">
// //         <div className="stat-card">
// //           <h3>Total Signs</h3>
// //           <div className="stat-value">{stats.totalSigns}</div>
// //           <Link to="/signs" className="btn btn-sm">View All</Link>
// //         </div>
        
// //         <div className="stat-card">
// //           <h3>Quick Actions</h3>
// //           <div className="quick-actions">
// //             <Link to="/add-sign" className="btn">Add New Sign</Link>
// //             <Link to="/recognize" className="btn">Recognize Sign</Link>
// //           </div>
// //         </div>
// //       </div>
      
// //       <div className="recent-signs">
// //         <h2>Recent Signs</h2>
// //         {stats.recentSigns.length > 0 ? (
// //           <div className="sign-cards">
// //             {stats.recentSigns.map(sign => (
// //               <div key={sign.sign_id} className="sign-card">
// //                 <div className="sign-thumbnail">
// //                   <img src={sign.thumbnail} alt={sign.name} />
// //                 </div>
// //                 <div className="sign-info">
// //                   <h3>{sign.name}</h3>
// //                   <p>{sign.meaning}</p>
// //                 </div>
// //                 <Link to={`/edit-sign/${sign.sign_id}`} className="btn btn-sm">Edit</Link>
// //               </div>
// //             ))}
// //           </div>
// //         ) : (
// //           <p className="no-data">No signs created yet. <Link to="/add-sign">Add your first sign!</Link></p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Dashboard;

// // import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import ApiService from '../services/ApiService';


// // function Dashboard() {
// //   const [stats, setStats] = useState({
// //     totalSigns: 0,
// //     recentSigns: []
// //   });
// //   const [isLoading, setIsLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         // Fetch all signs directly (without user-based filtering)
// //         const signs = await ApiService.getAllSigns();

// //         setStats({
// //           totalSigns: signs.length,
// //           recentSigns: signs.slice(0, 3) // Latest 3 signs
// //         });
// //       } catch (error) {
// //         console.error('Error fetching dashboard data:', error);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   if (isLoading) {
// //     return <div className="loading">Loading dashboard...</div>;
// //   }

// //   return (
// //     <div className="dashboard">
// //       <h1>Welcome to the Sign Dictionary</h1>
      
// //       <div className="dashboard-stats">
// //         <div className="stat-card">
// //           <h3>Total Signs</h3>
// //           <div className="stat-value">{stats.totalSigns}</div>
// //           <Link to="/signs" className="btn btn-sm">View All</Link>
// //         </div>
        
// //         <div className="stat-card">
// //           <h3>Quick Actions</h3>
// //           <div className="quick-actions">
// //             <Link to="/add-sign" className="btn">Add New Sign</Link>
// //             <Link to="/recognize" className="btn">Recognize Sign</Link>
// //           </div>
// //         </div>
// //       </div>
      
// //       <div className="recent-signs">
// //         <h2>Recent Signs</h2>
// //         {stats.recentSigns.length > 0 ? (
// //           <div className="sign-cards">
// //             {stats.recentSigns.map(sign => (
// //               <div key={sign.sign_id} className="sign-card">
// //                 <div className="sign-thumbnail">
// //                   <img src={sign.thumbnail} alt={sign.name} />
// //                 </div>
// //                 <div className="sign-info">
// //                   <h3>{sign.name}</h3>
// //                   <p>{sign.meaning}</p>
// //                 </div>
// //                 <Link to={`/edit-sign/${sign.sign_id}`} className="btn btn-sm">Edit</Link>
// //               </div>
// //             ))}
// //           </div>
// //         ) : (
// //           <p className="no-data">No signs created yet. <Link to="/add-sign">Add your first sign!</Link></p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Dashboard;






// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import ApiService from '../services/ApiService';

// function Dashboard() {
//   const [stats, setStats] = useState({
//     totalSigns: 0,
//     recentSigns: []
//   });
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const signs = await ApiService.getAllSigns();
//         setStats({
//           totalSigns: signs.length,
//           recentSigns: signs.slice(0, 3)
//         });
//       } catch (error) {
//         console.error('Error fetching dashboard data:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   if (isLoading) {
//     return <div className="text-center mt-5">Loading dashboard...</div>;
//   }

//   return (
//     <div className="container mt-4">
//        <nav class="navbar navbar-expand-lg bg-body-tertiary">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#">SPEECH TO SIGN  </a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNav">
//       <ul class="navbar-nav">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="/custom-library/dashboard">Dashboard</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="/custom-library/AddSign">ADDSIGN</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="/custom-library/SignList">SIGN LIST</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="/custom-library/EditSign">EDIT SIGN</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="/custom-library/RecognizeSign">RECOGNIZE SIGN</a>
//         </li>
       
//       </ul>
//     </div>
//   </div>
// </nav>
//       <h1 className="text-center mb-4 text-primary">Welcome to the Sign Dictionary</h1>

//       <div className="row g-4 mb-4">
//         <div className="col-md-6">
//           <div className="card text-center shadow">
//             <div className="card-body">
//               <h5 className="card-title">Total Signs</h5>
//               <h2 className="card-text">{stats.totalSigns}</h2>
//               <Link to="/signs" className="btn btn-outline-primary btn-sm mt-2">
//                 View All
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-6">
//           <div className="card text-center shadow">
//             <div className="card-body">
//               <h5 className="card-title">Quick Actions</h5>
//               <Link to="/add-sign" className="btn btn-success m-2">
//                 Add New Sign
//               </Link>
//               <Link to="/recognize" className="btn btn-warning m-2">
//                 Recognize Sign
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       <h3 className="mb-3">Recent Signs</h3>

//       {stats.recentSigns.length > 0 ? (
//         <div className="row">
//           {stats.recentSigns.map(sign => (
//             <div key={sign.sign_id} className="col-md-4 mb-4">
//               <div className="card shadow h-100">
//                 <img
//                   src={sign.thumbnail}
//                   alt={sign.name}
//                   className="card-img-top"
//                   style={{ height: '200px', objectFit: 'cover' }}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{sign.name}</h5>
//                   <p className="card-text">{sign.meaning}</p>
//                   <Link to={`/edit-sign/${sign.sign_id}`} className="btn btn-primary btn-sm">
//                     Edit
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-muted">
//           No signs created yet.{' '}
//           <Link to="/add-sign" className="text-decoration-none">
//             Add your first sign!
//           </Link>
//         </p>
//       )}
//     </div>
//   );
// }

// export default Dashboard;





import React, { useEffect, useState } from 'react';
import './Dashbord.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const [signs, setSigns] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/signs')
      .then(res => res.json())
      .then(data => setSigns(data))
      .catch(err => console.error('Error:', err));
  }, []);

  const handleTrainModel = async () => {
    try {
      const res = await axios.post('http://localhost:5000/train_model');
      alert(res.data.message);
    } catch (err) {
      console.error('Training error:', err);
      alert('Training failed.');
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Sign Language Dashboard</h1>
        <div className="dashboard-buttons">
          <button onClick={() => navigate('/custom-library/AddSign')}>Capture Sign</button>
          <button onClick={() => navigate('/custom-library/SignList')}>View All Signs</button>
        </div>
      </header>

      <h2 className="overview-title">Sign Classes Overview</h2>
      <div className="card-grid">
        {signs.map((sign, index) => (
          <div className="card" key={index} >
            <img 
              src={`http://localhost:5000/${sign.image_url}`}
              alt={sign.class_name}
              className="card-image"
            />
            <div className="card-title">{sign.class_name}</div>
          </div>
        ))}
      </div>
      <div>
      <button className="train-button" onClick={handleTrainModel}>
        🚀 Train CNN Model
      </button>

      </div>
    </div>
  );
};

export default Dashboard;
