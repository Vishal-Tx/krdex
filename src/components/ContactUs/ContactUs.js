import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact">
      <p className="contactHeading">Contact Us</p>
      <div className="contactItems">
        <div className="contactItem">
          <p>INDIA</p>
          <p className="contactInfo">1800 419 4919</p>
        </div>
        <div className="contactItem">
          <p>OUTSIDE INDIA</p>
          <p className="contactInfo">+91-8061799200</p>
        </div>
        <div className="contactItem">
          <p>GLOBAL EMAIL</p>
          <p className="contactInfo">info@KredX.com</p>
        </div>
        <div className="contactItem">
          <p>FOR MEDIA ENQUIRIES</p>
          <p className="contactInfo">pr@KredX.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
