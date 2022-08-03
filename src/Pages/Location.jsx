import React from "react";
import location from "../images/location.png";
import clock from "../images/clock.png";
import call from "../images/call.png";
import email from "../images/email.png";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
function Location() {
  return (
    <div className="locationContainer">
      <div className="locTop">
        <div className="locTopHead">
          <h2>Əlaqə «MetaComp» internet-maqazin</h2>
        </div>
        <div className="locTopBody">
          <div className="info flex">
            <img src={location} />
            <p>Ünvan: Azərbaycan, Baku, Dilarə Əliyeva 188</p>
          </div>
          <div className="info flex">
            <img src={clock} />
            <p>
              İş qrafiki: həftənin I-V günləri saat 10:00 dan 18:00 dək. VI-cı
              gün 10:00-18:00-dək
            </p>
          </div>
          <div className="info flex">
            <img src={call} />
            <p>
              Telefonlar: +994 (12) 596-31-44 / Mob Whatsapp +994 (70) 700-00-77{" "}
            </p>
          </div>
          <div className="info flex">
            <img src={email} />
            <a
              href="mailto:abc@example.com?subject = Feedback&body = Message"
              className="mail"
            >
              admin@metacomp.az
            </a>
          </div>
        </div>
      </div>
      <div className="locBody">
        <h2>Biz xəritədə</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.458890250424!2d49.839466314893315!3d40.37652106600879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da5a4c85e9f%3A0x8b209a8e1ed5eea9!2sAF%20Mall!5e0!3m2!1saz!2s!4v1647336174189!5m2!1saz!2s" width="800" height="450" allowFullScreen="" loading="lazy"></iframe>
      </div>
    </div>
  );
}

export default Location;
