// // import React, { useContext, useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import UserContext from '../contexts/UserContext';
// // import ApiService from '../services/ApiService';

// // function SignList() {
// //   const { currentUser } = useContext(UserContext);
// //   const [signs, setSigns] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [language, setLanguage] = useState('all');

// //   useEffect(() => {
// //     const fetchSigns = async () => {
// //       if (currentUser) {
// //         try {
// //           const userSigns = await ApiService.getUserSigns(currentUser.id);
// //           setSigns(userSigns);
// //         } catch (error) {
// //           console.error('Error fetching signs:', error);
// //         } finally {
// //           setIsLoading(false);
// //         }
// //       }
// //     };

// //     fetchSigns();
// //   }, [currentUser]);

// //   const handleDelete = async (signId) => {
// //     if (window.confirm('Are you sure you want to delete this sign?')) {
// //       try {
// //         await ApiService.deleteSign(currentUser.id, signId);
// //         setSigns(signs.filter(sign => sign.sign_id !== signId));
// //       } catch (error) {
// //         console.error('Error deleting sign:', error);
// //       }
// //     }
// //   };

// //   const filteredSigns = signs.filter(sign => {
// //     const matchesSearch = 
// //       sign.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
// //       sign.meaning.toLowerCase().includes(searchTerm.toLowerCase());
    
// //     const matchesLanguage = language === 'all' || sign.language === language;
    
// //     return matchesSearch && matchesLanguage;
// //   });

// //   if (isLoading) {
// //     return <div className="loading">Loading signs...</div>;
// //   }

// //   return (
// //     <div className="sign-list-container">
// //       <div className="sign-list-header">
// //         <h1>My Sign Dictionary</h1>
// //         <Link to="/add-sign" className="btn">Add New Sign</Link>
// //       </div>
      
// //       <div className="filters">
// //         <div className="search-bar">
// //           <input
// //             type="text"
// //             placeholder="Search signs..."
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //           />
// //         </div>
        
// //         <div className="language-filter">
// //           <select value={language} onChange={(e) => setLanguage(e.target.value)}>
// //             <option value="all">All Languages</option>
// //             <option value="en">English</option>
// //             <option value="es">Spanish</option>
// //             <option value="fr">French</option>
// //             {/* Add more languages as needed */}
// //           </select>
// //         </div>
// //       </div>
      
// //       {filteredSigns.length > 0 ? (
// //         <div className="sign-table">
// //           <table>
// //             <thead>
// //               <tr>
// //                 <th>Sign</th>
// //                 <th>Name</th>
// //                 <th>Meaning</th>
// //                 <th>Language</th>
// //                 <th>Created</th>
// //                 <th>Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {filteredSigns.map(sign => (
// //                 <tr key={sign.sign_id}>
// //                   <td className="sign-thumbnail">
// //                     <img src={sign.thumbnail} alt={sign.name} />
// //                   </td>
// //                   <td>{sign.name}</td>
// //                   <td>{sign.meaning}</td>
// //                   <td>{sign.language.toUpperCase()}</td>
// //                   <td>{new Date(sign.created_at).toLocaleDateString()}</td>
// //                   <td className="actions">
// //                     <Link to={`/edit-sign/${sign.sign_id}`} className="btn btn-sm">Edit</Link>
// //                     <button 
// //                       onClick={() => handleDelete(sign.sign_id)} 
// //                       className="btn btn-sm btn-danger"
// //                     >
// //                       Delete
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       ) : (
// //         <div className="no-data">
// //           {searchTerm || language !== 'all' ? 
// //             'No signs match your search criteria.' : 
// //             'No signs created yet. Add your first sign!'}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default SignList;




// // import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import ApiService from '../services/ApiService';

// // function SignList() {
// //   const [signs, setSigns] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [language, setLanguage] = useState('all');

// //   useEffect(() => {
// //     const fetchSigns = async () => {
// //       try {
// //         const userSigns = await ApiService.getAllSigns(); // changed from getUserSigns
// //         setSigns(userSigns);
// //       } catch (error) {
// //         console.error('Error fetching signs:', error);
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     fetchSigns();
// //   }, []);

// //   const handleDelete = async (signId) => {
// //     if (window.confirm('Are you sure you want to delete this sign?')) {
// //       try {
// //         await ApiService.deleteSign(signId); // removed currentUser.id
// //         setSigns(signs.filter(sign => sign.sign_id !== signId));
// //       } catch (error) {
// //         console.error('Error deleting sign:', error);
// //       }
// //     }
// //   };

// //   const filteredSigns = signs.filter(sign => {
// //     const matchesSearch = 
// //       sign.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
// //       sign.meaning.toLowerCase().includes(searchTerm.toLowerCase());

// //     const matchesLanguage = language === 'all' || sign.language === language;

// //     return matchesSearch && matchesLanguage;
// //   });

// //   if (isLoading) {
// //     return <div className="loading">Loading signs...</div>;
// //   }

// //   return (
// //     <div className="sign-list-container">
// //       <div className="sign-list-header">
// //         <h1>My Sign Dictionary</h1>
// //         <Link to="/add-sign" className="btn">Add New Sign</Link>
// //       </div>

// //       <div className="filters">
// //         <div className="search-bar">
// //           <input
// //             type="text"
// //             placeholder="Search signs..."
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //           />
// //         </div>

// //         <div className="language-filter">
// //           <select value={language} onChange={(e) => setLanguage(e.target.value)}>
// //             <option value="all">All Languages</option>
// //             <option value="en">English</option>
// //             <option value="es">Spanish</option>
// //             <option value="fr">French</option>
// //           </select>
// //         </div>
// //       </div>

// //       {filteredSigns.length > 0 ? (
// //         <div className="sign-table">
// //           <table>
// //             <thead>
// //               <tr>
// //                 <th>Sign</th>
// //                 <th>Name</th>
// //                 <th>Meaning</th>
// //                 <th>Language</th>
// //                 <th>Created</th>
// //                 <th>Actions</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {filteredSigns.map(sign => (
// //                 <tr key={sign.sign_id}>
// //                   <td className="sign-thumbnail">
// //                     <img src={sign.thumbnail} alt={sign.name} />
// //                   </td>
// //                   <td>{sign.name}</td>
// //                   <td>{sign.meaning}</td>
// //                   <td>{sign.language}</td>
// //                   <td>{new Date(sign.created_at).toLocaleDateString()}</td>
// //                   <td>
// //                     <Link to={`/edit-sign/${sign.sign_id}`} className="btn btn-sm">Edit</Link>
// //                     <button onClick={() => handleDelete(sign.sign_id)} className="btn btn-sm btn-danger">Delete</button>
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       ) : (
// //         <p className="no-data">No signs found. <Link to="/add-sign">Add your first sign!</Link></p>
// //       )}
// //     </div>
// //   );
// // }

// // export default SignList;



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import ApiService from '../services/ApiService';

// function SignList() {
//   const [signs, setSigns] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [language, setLanguage] = useState('all');

//   useEffect(() => {
//     const fetchSigns = async () => {
//       try {
//         const userSigns = await ApiService.getAllSigns();
//         setSigns(userSigns);
//       } catch (error) {
//         console.error('Error fetching signs:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchSigns();
//   }, []);

//   const handleDelete = async (signId) => {
//     if (window.confirm('Are you sure you want to delete this sign?')) {
//       try {
//         await ApiService.deleteSign(signId);
//         setSigns(signs.filter(sign => sign.sign_id !== signId));
//       } catch (error) {
//         console.error('Error deleting sign:', error);
//       }
//     }
//   };

//   const filteredSigns = signs.filter(sign => {
//     const matchesSearch =
//       sign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       sign.meaning.toLowerCase().includes(searchTerm.toLowerCase());

//     const matchesLanguage = language === 'all' || sign.language === language;

//     return matchesSearch && matchesLanguage;
//   });

//   if (isLoading) {
//     return <div className="text-center mt-5"><div className="spinner-border text-primary" role="status"></div></div>;
//   }

//   return (
//     <div className="container py-4">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <h2 className="text-primary">My Sign Dictionary</h2>
//         <Link to="/add-sign" className="btn btn-success">
//           <i className="bi bi-plus-circle"></i> Add New Sign
//         </Link>
//       </div>

//       <div className="row mb-3">
//         <div className="col-md-6 mb-2">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Search signs..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>

//         <div className="col-md-6">
//           <select
//             className="form-select"
//             value={language}
//             onChange={(e) => setLanguage(e.target.value)}
//           >
//             <option value="all">All Languages</option>
//             <option value="en">English</option>
//             <option value="es">Spanish</option>
//             <option value="fr">French</option>
//           </select>
//         </div>
//       </div>

//       {filteredSigns.length > 0 ? (
//         <div className="table-responsive">
//           <table className="table table-striped table-hover">
//             <thead className="table-dark">
//               <tr>
//                 <th>Sign</th>
//                 <th>Name</th>
//                 <th>Meaning</th>
//                 <th>Language</th>
//                 <th>Created</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredSigns.map(sign => (
//                 <tr key={sign.sign_id}>
//                   <td>
//                     <img
//                       src={sign.thumbnail}
//                       alt={sign.name}
//                       style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }}
//                     />
//                   </td>
//                   <td>{sign.name}</td>
//                   <td>{sign.meaning}</td>
//                   <td>{sign.language.toUpperCase()}</td>
//                   <td>{new Date(sign.created_at).toLocaleDateString()}</td>
//                   <td>
//                     <button
//                       className="btn btn-danger btn-sm me-2"
//                       onClick={() => handleDelete(sign.sign_id)}
//                     >
//                       <i className="bi bi-trash"></i>
//                     </button>
//                     <Link to={`/edit-sign/${sign.sign_id}`} className="btn btn-primary btn-sm">
//                       <i className="bi bi-pencil"></i>
//                     </Link>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <div className="alert alert-info text-center">
//           No signs found!
//         </div>
//       )}
//     </div>
//   );
// }

// export default SignList;




// import React, { useEffect, useState } from 'react';
// import './SignList.css';

// function SignList() {
//   const [signs, setSigns] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:5000/signs')
//       .then(res => res.json())
//       .then(data => setSigns(data))
//       .catch(err => console.error("Failed to load signs:", err));
//   }, []);

//   return (
//     <div className="sign-list-container">
//       <h1>Saved Hand Signs</h1>
//       <div className="sign-grid">
//         {signs.map((sign, index) => (
//           <div key={index} className="sign-card">
//             <img src={`http://localhost:5000${sign.image_url}`} alt={sign.class_name} />
//             <p>{sign.class_name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SignList;

import React, { useEffect, useState } from 'react';
import './SignList.css';

function SignList() {
  const [signs, setSigns] = useState([]);

  const fetchSigns = () => {
    fetch('http://localhost:5000/signs')
      .then(res => res.json())
      .then(data => setSigns(data))
      .catch(err => console.error("Failed to load signs:", err));
  };

  useEffect(() => {
    fetchSigns();
  }, []);

  const handleDelete = (className) => {
    if (window.confirm(`Are you sure you want to delete "${className}"?`)) {
      fetch(`http://localhost:5000/delete_sign/${className}`, {
        method: 'DELETE',
      })
        .then(res => {
          if (res.ok) {
            alert(`Deleted "${className}"`);
            fetchSigns();
          } else {
            res.json().then(data => alert(`Error: ${data.error}`));
          }
        })
        .catch(err => alert('Failed to delete: ' + err));
    }
  };

  return (
    <div className="sign-list-container">
      <h1>Saved Hand Signs</h1>
      <div className="sign-grid">
        {signs.map((sign, index) => (
          <div key={index} className="sign-card">
            <img src={`http://localhost:5000${sign.image_url}`} alt={sign.class_name} />
            <p>{sign.class_name}</p>
            <button onClick={() => handleDelete(sign.class_name)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SignList;

