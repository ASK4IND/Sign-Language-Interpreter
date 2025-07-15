// import React from 'react'
// function Body() {
//     return (
//         <div className='container' style={{margin:"auto",padding:"0",width:"100%",height:"auto"}}>
//             <div className='Mainbody' style={{margin:"auto" ,marginTop:"5%", height:"",width:"75%" }}>
//                 <div className="row row-cols-1 row-cols-md-2 g-4"style={{height:"50%",width:"100%"}}>
//                     <div className="col">
//                         <div className="card" style={{height:"auto",width:"100%"}} >
//                             <img src="signlearn.jpg" className="card-img-top" alt="..." />
//                             <div className="card-body">
//                                 <h5 className="card-title">Learning Module</h5>
//                                 <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col">
//                         <div className="card">
//                             <img src="mike2.jpg" className="card-img-top" alt="..." />
//                             <div className="card-body">
//                                 <h5 className="card-title">Speech To Sign</h5>
//                                 <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col">
//                         <div className="card">
//                             <img src="mike.jpg" className="card-img-top" alt="..." />
//                             <div className="card-body">
//                                 <h5 className="card-title">Custom library</h5>
//                                 <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col">
//                         <div className="card">
//                         <img src="mike2.jpg" className="card-img-top" alt="..." />
//                             <div className="card-body">
//                                 <h5 className="card-title">Sign to Speech</h5>
//                                 <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default Body;

import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

function Body() {
    return (
        <div className='container' style={{ margin: "auto", padding: "0", width: "100%", height: "auto" }}>
            <div className='Mainbody' style={{ margin: "auto", marginTop: "5%", width: "75%" }}>
                <div className="row row-cols-1 row-cols-md-2 g-4" style={{ height: "50%", width: "100%" }}>
                    <div className="col">
                        <Link to="/learning-module"> {/* Add Link for routing */}
                            <div className="card" style={{ height: "auto", width: "100%" }}>
                                <img src="signlearn.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Learning Module</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col">
                        <Link to="/speech-to-sign"> {/* Add Link for routing */}
                            <div className="card">
                                <img src="mike2.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Speech To Sign</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col">
                        <Link to="/custom-library"> {/* Add Link for routing */}
                            <div className="card">
                                <img src="mike.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Custom library</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col">
                        <Link to="/sign-to-speech"> {/* Add Link for routing */}
                            <div className="card">
                                <img src="mike2.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Sign to Speech</h5>
                                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little.</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;
