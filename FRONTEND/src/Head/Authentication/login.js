import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/users/login", formData);
      localStorage.setItem("token", response.data.token);
      setToken(response.data.token);
      navigate("/contacts");
    } catch (error) {
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <div className="conatainer" >
      
    <div 
      className="d-flex align-items-center justify-content-center  text-white px-3"
      style={{
        width : "90%",
        margin:"auto",
        marginTop:"9rem",
        padding:"0"
    
       
      }}
    >
      <div className="bg-dark bg-opacity-75 p-3 p-md-4 p-lg-5 rounded-3 shadow-lg text-light w-100 w-md-50 w-lg-25">
        <h2 className="text-center mb-4">Login</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder="john.doe@example.com" 
              className="form-control" 
              value={formData.email} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              name="password" 
              placeholder="" 
              className="form-control" 
              value={formData.password} 
              onChange={handleInputChange} 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="btn btn-warning w-100"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-3">
          Don't have an account?{" "}
          <a href="/signup" className="text-warning fw-bold">
            Register here
          </a>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Login;