import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import About from './About'
import Contact from './Contact'

import Body from "../Body/Body"
import Login from "./Authentication/login"
import SignUp from "./Authentication/signup"



import React from 'react'
import Learning from "../Body/Body-Modules/Learning_module/LEVEL1"
import Learnpage from "../Body/Body-Modules/Learning_module/learnpage"
import LearningWords from "../Body/Body-Modules/Learning_module/LEVEL2"
import Level3 from "../Body/Body-Modules/Learning_module/LEVEL3"
import SignLanguageTranslator from "../Body/Body-Modules/Sign_to_speech"
import Dashboard from "../Body/Body-Modules/custom_directory/components/Dashboard"
import Convert from "../Body/Body-Modules/speech_TO_sign/Pages/convert"
import Sign from "../Body/Body-Modules/custom_directory/sign"
import SignList from "../Body/Body-Modules/custom_directory/components/SignList"






function Navbar() {

    return (

        <Router>
            <nav className="navbar navbar-expand-lg bg-body-tertiary"  data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="">SIGN_LANG_TRANSLATE</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">CONTACT US</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/learn">LEARN MORE</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login / </Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link" to="/signup"> Signup</Link>
                            </li>

                        </ul>
                        
                    </div>
                </div>
            </nav>


            <Routes>
                
                <Route path="/" element={<Body/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/learn" element={<Learning/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/signup" element={<SignUp/>}></Route>
                <Route path="/learning-module" element={<Learnpage/>} />
                <Route path="/custom-library" element={<Dashboard/>} />
                <Route path="/level1" element={<Learning />} />
                <Route path="/level2" element={<LearningWords />} />
                <Route path="/Level3" element={<Level3 />} />
                {/* <Route path="/c" element={<SignLanguageTranslator/>} /> */}
                <Route path="/sign-to-speech" element={<SignLanguageTranslator/>} />
                <Route path="/speech-to-sign" element={<Convert/>} />
                <Route path="/custom-library/dashboard" element={<Dashboard/>} />
                <Route path="/custom-library/AddSign" element={<Sign/>} />
                <Route path="/custom-library/SignList" element={<SignList/>} />
                
                
        
            </Routes>
        </Router>

    );
}

export default Navbar;