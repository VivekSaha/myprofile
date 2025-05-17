import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <div className="container">
          <div className="section-header">
            <h3>Contact Me</h3>
          </div>
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="contact-info">
                <p>
                  <strong>Personal Information:</strong>
                </p>
                <p>Name: Vivek Kumar</p>
                <p>Date Of Birth: 05th Feb,1992</p>
                <p>Gender: Male</p>
                <p>Nationality: Indian</p>
                <p>Hobbies: Playing chess, enjoying songs</p>
                <p>Father’s Name: Mr.Pradeep Prasad Saha</p>
                <p>Languages Known: English, Hindi & Bengali</p>
                <p>Address: AT+PO+PO- Tarapur, </p>
                <p>Dist - Munger, State - Bihar, Pin - 813321</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-info">
                <p>
                  <strong>Current Address:</strong>
                </p>
                <p>
                  <i className="fa fa-map-marker"></i>409, 2nd floor, Door no
                  88, 2nd Cross, Arekere Lakshmi Layout, Bannerghatta Road
                  Bengaluru, Karnataka 560076
                </p>
                <p>
                  <i className="fa fa-envelope"></i>
                  <a href="mailto:viveklovraj4@gmail.com">
                    viveklovraj4@gmail.com
                  </a>
                </p>
                <p>
                  <i className="fa fa-phone"></i>
                  <a href="tel:7029989871">7029989871</a>
                </p>
                <p>
                  <i className="fa fa-whatsapp"></i>
                  <a href="https://wa.me/9570945720">9570945720</a>
                </p>
                <div className="social">
                <a href="https://www.facebook.com/viveklovraj" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a>
                  <a href="https://x.com/VivekSaha1992" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a>
                  <a href="https://www.instagram.com/viveksaha92/" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
                  <a href="https://www.linkedin.com/in/vivek-kumar-39587387/" target="_blabk" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                  <a href="https://github.com/VivekSaha" target="_blabk" rel="noreferrer"><i className="fa fa-github"></i></a>                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
