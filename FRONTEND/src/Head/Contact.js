
// import React from 'react'
// function Contact() {

  
//         return (
//             <footer
//               className="bg-dark text-white p-4"
//               style={{
//                 margin: "0",
//                 padding: "0",
//               }}
//             >
//               <div
//                 className="container d-flex justify-content-between flex-wrap"
//                 style={{ margin: "15px" }}
//               >
//                 {/* Left Section: Contact Info */}
//                 <div style={{ flexBasis: "25%" }}>
//                   <h1 className="sub-title">Contacts</h1>
//                   <p>
//                     <i className="fa-solid fa-square-envelope text-danger me-2"></i>Email:
//                     manganresto@gmail.com
//                   </p>
//                   <p>
//                     <i className="fa-solid fa-square-phone text-danger me-2"></i>Phone:
//                     9499820611
//                   </p>
//                   <p>
//                     <i className="fa-solid fa-fax text-danger me-2"></i>Fax: +(1) 000
//                     0000 002
//                   </p>
//                   <div className="mt-3">
//                     <a
//                       href="https://twitter.com/"
//                       className="text-decoration-none text-light me-3"
//                       style={{ fontSize: "30px", transition: "transform 0.5s",color:'pink' }}
//                     >
//                       <i className="fa-brands fa-x-twitter"></i>
//                     </a>
//                     <a
//                       href="https://instagram.com/"
//                       className="text-decoration-none text-light me-3"
//                       style={{ fontSize: "30px", transition: "transform 0.5s" }}
//                     >
//                       <i className="fa-brands fa-square-instagram"></i>
//                     </a>
//                     <a
//                       href="https://facebook.com/"
//                       className="text-decoration-none text-light me-3"
//                       style={{ fontSize: "30px", transition: "transform 0.5s" }}
//                     >
//                       <i className="fa-brands fa-facebook"></i>
//                     </a>
//                     <a
//                       href="https://google.com"
//                       className="text-decoration-none text-light me-3"
//                       style={{ fontSize: "30px", transition: "transform 0.5s" }}
//                     >
//                       <i className="fa-brands fa-google"></i>
//                     </a>
//                     <a
//                       href="#"
//                       className="text-decoration-none text-light me-3"
//                       style={{ fontSize: "30px", transition: "transform 0.5s" }}
//                     >
//                       <i className="fa-solid fa-burger"></i>
//                     </a>
//                   </div>
//                 </div>
        
//                 {/* Right Section: Contact Form */}
//                 <div style={{ flexBasis: "60%" }}>
//                   <form>
//                     <input
//                       type="text"
//                       name="Name"
//                       placeholder="Enter Your Name"
//                       required
//                       className="form-control mb-3"
//                       style={{
//                         background: "#262626",
//                         color: "white",
//                         padding: "15px",
//                         fontSize: "18px",
//                         borderRadius: "6px",
//                       }}
//                     />
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Enter Your Email"
//                       required
//                       className="form-control mb-3"
//                       style={{
//                         background: "#262626",
//                         color: "white",
//                         padding: "15px",
//                         fontSize: "18px",
//                         borderRadius: "6px",
//                       }}
//                     />
//                     <textarea
//                       name="Message"
//                       rows="6"
//                       placeholder="Enter Your Message"
//                       className="form-control mb-3"
//                       style={{
//                         background: "#262626",
//                         color: "white",
//                         padding: "15px",
//                         fontSize: "18px",
//                         borderRadius: "6px",
//                       }}
//                     ></textarea>
//                     <div className="text-end">
//                       <button
//                         type="submit"
//                         className="btn"
//                         style={{
//                           backgroundColor: "#262626",
//                           color: "white",
//                           border: "1px solid #ff004f",
//                           padding: "14px 50px",
//                           borderRadius: "6px",
//                         }}
//                         onMouseOver={(e) => (e.target.style.backgroundColor = "#ff004f")}
//                         onMouseOut={(e) => (e.target.style.backgroundColor = "#262626")}
//                       >
//                         Submit
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </footer>
//           );


// }

// export default Contact ;
import React from "react";

function Contact() {
  return (
    <footer className="bg-dark text-white p-4">
      <div className="container d-flex justify-content-between flex-wrap" style={{ margin: "15px" }}>
        {/* Left Section: Contact Info */}
        <div style={{ flexBasis: "25%" }}>
          <h1 className="sub-title">Contacts</h1>
          <p>
            <i className="fa-solid fa-square-envelope text-white me-2"></i>Email: AAA@gmail.com
          </p>
          <p>
            <i className="fa-solid fa-square-phone text-white me-2"></i>Phone: 47888XXXXX
          </p>
          <p>
            <i className="fa-solid fa-fax text-white me-2"></i>Fax: +(1) 000 0000 002
          </p>
          <div className="mt-3">
            <a href="https://twitter.com/" className="text-decoration-none text-light me-3" style={{ fontSize: "30px" }}>
              <i className="fa-brands fa-x-twitter text-white"></i>
            </a>
            <a href="https://instagram.com/" className="text-decoration-none text-light me-3" style={{ fontSize: "30px" }}>
              <i className="fa-brands fa-square-instagram text-white"></i>
            </a>
            <a href="https://facebook.com/" className="text-decoration-none text-light me-3" style={{ fontSize: "30px" }}>
              <i className="fa-brands fa-facebook text-white"></i>
            </a>
            <a href="https://google.com" className="text-decoration-none text-light me-3" style={{ fontSize: "30px" ,}}>
              <i className="fa-brands fa-google text-white" style={{imaeg:"red"}}></i>
            </a>
           
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div style={{ flexBasis: "60%" }}>
          <form>
            <input
              type="text"
              name="Name"
              placeholder="Enter Your Name"
              required
              className="form-control mb-3"
              style={{
                background: "#262626",
                color: "white",
                padding: "15px",
                fontSize: "18px",
                borderRadius: "6px",
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
              className="form-control mb-3"
              style={{
                background: "#262626",
                color: "white",
                padding: "15px",
                fontSize: "18px",
                borderRadius: "6px",
              }}
            />
            <textarea
              name="Message"
              rows="6"
              placeholder="Enter Your Message"
              className="form-control mb-3"
              style={{
                background: "#262626",
                color: "white",
                padding: "15px",
                fontSize: "18px",
                borderRadius: "6px",
              }}
            ></textarea>
            <div className="text-end">
              <button
                type="submit"
                className="btn"
                style={{
                  backgroundColor: "#262626",
                  color: "white",
                  border: "1px solid #ff004f",
                  padding: "14px 50px",
                  borderRadius: "6px",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#ff004f")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#262626")}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
