import React from "react";
import s1 from "../images/Slogan Pictures/s1.png";
import s2 from "../images/Slogan Pictures/s2.png";
import s3 from "../images/Slogan Pictures/s3.png";
import s4 from "../images/Slogan Pictures/s4.png";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function FooterTop() {
  return (
    <AnimationOnScroll animateIn="animate__fadeInLeftBig">
      <div className="footerTopContainer">
        <div className="footerTopWrapper flex">
          <div className="slogan flex">
            <img src={s1} />
            <h1>SÜRƏTLİ ÇATDIRILMA</h1>
          </div>
          <div className="slogan flex" id="zemanet">
            <img src={s2} />
            <h1>RƏSMİ ZƏMANƏT</h1>
          </div>
          <div className="slogan flex">
            <img src={s3} />
            <h1>KREDİTLƏ SİFARİŞ</h1>
          </div>
          <div className="lastSlogan flex">
            <img src={s4} />
            <h1>YÜKSƏK KEYFİYYƏT</h1>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  );
}

export default FooterTop;
