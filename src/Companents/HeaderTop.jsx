import React from "react";
import { NavLink } from "react-router-dom";
function HeaderTop() {
  return (
    <div className="headerTop">
      <div className="phAndMail flex">
        <div className="ph">
          <i className="fas fa-phone-alt"></i>
          <a href="tel:+994 77 605 77 75">077 605 77 75</a>
        </div>
        <div className="mail">
          <i className="far fa-envelope"></i>
          <a
            href="mailto:abc@example.com?subject = Feedback&body = Message"
            className="mail"
          >
            admin@metacomp.az
          </a>
        </div>
      </div>
      <div className="headTopRight">
      <i className="fa-light fa-address-card"></i>
        <NavLink to="/about">
          <p>Haqqımızda</p>
        </NavLink>
        <div className="loc flex">
          <i className="fas fa-map-marker-alt"></i>
          <NavLink to="/location">
            <p>Ünvan</p>
          </NavLink>
        </div>
        <div className="clock flex">
          <i className="far fa-clock"></i>
          <p className="workTime">10:00 dən 19:00 dək</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
