import React from "react";

const Qualification = () => {
  return (
    <>
      <div className="qualification" id="qualification">
        <div className="container">
          <header className="section-header">
            <h3>My Qualification</h3>
          </header>
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <div className="single-qualification">
                <span></span>
                <div className="qualification-icon">
                  <i className="fa fa-leanpub"></i>
                </div>
                <h4>10th</h4>
                <p>BSEB, PATNA</p>
                <p>2007 with 50.08%</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="single-qualification">
                <span></span>
                <div className="qualification-icon">
                  {" "}
                  <i className="fa fa-building-o"></i>{" "}
                </div>
                <h4>12th</h4>
                <p>BSEB, PATNA</p>
                <p>2007-2009 with 51.4%</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="single-qualification">
                <span></span>
                <div className="qualification-icon">
                  {" "}
                  <i className="fa fa-institution"></i>{" "}
                </div>
                <h4>BCA</h4>
                <p>IGNOU</p>
                <p>2010-2013 with 64%</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-3">
              <div className="single-qualification">
                <span></span>
                <div className="qualification-icon">
                  {" "}
                  <i className="fa fa-graduation-cap"></i>{" "}
                </div>
                <h4>MCA</h4>
                <p>IGNOU</p>
                <p>2014-2019 with 62%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Qualification;
