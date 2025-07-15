import React from 'react';
function Learnpage() {
  return (
   
      <div>
        <div className="container mt-4">
          <div className="d-flex flex-wrap" style={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
            <div className="card mb-3" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">LEVEL 1</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional content.
                </p>
                <a href="/learn" className="btn btn-primary">Click here</a>
              </div>
            </div>

            <div className="card text-center mb-3" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">LEVEL 2</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional content.
                </p>
                <a href="/level2" className="btn btn-primary">Click here</a>
              </div>
            </div>

            <div className="card text-end" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">LEVEL 3</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional content.
                </p>
                <a href="/Level3" className="btn btn-primary">Click here</a>
              </div>
            </div>
          </div>
        </div>
       
      </div>
   
  );
}

export default Learnpage;
