import React from "react";
import facebook from "../images/facebook.png";
import insta from "../images/insta.png";
import twitter from "../images/twitter.png";
import call from "../images/call.png";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <div className="FooterContainer">
      <div className="footerWrapper">
        <ul className="FooterCol1">
          <li>Masaüstü Kompüterlər</li>
          <li>Noutbuklar</li>
          <li>Kompanentlər</li>
          <li>Ofis avadanlıqları</li>
        </ul>
        <ul className="FooterCol2">
          <li>Zəmanət</li>
          <li>Suallar və cavablar</li>
          <li>Göndərmə və ödəniş</li>
          <li>Hissə-hissə ödəmə</li>
        </ul>
        <ul className="FooterCol3">
          <li>Prays list</li>
          <li>Dükanımız haqqında</li>
          <li>Tərəfdaşlar üçün</li>
          <li>Əlaqə</li>
        </ul>
        <ul className="FooterCol4">
          <li className="location flex">
            <i className="fas fa-map-marker-alt"></i>
            <NavLink to="/location"><p>Baku, Dilarə Əliyeva 188 </p></NavLink>
          </li>
          <li className="socials flex">
            <img src={facebook} />
            <img src={insta} />
            <img src={twitter} />
          </li>
        </ul>
        <ul className="FooterCol5">
          <h3>Əlaqə</h3>
          <p>+994(77)605 77 75</p>
          <p>+994(51)526 35 99</p>
          <div className="call">
            <button>
              Zəng sifariş et <img src={call} />
            </button>
          </div>
        </ul>
      </div>
      <hr />
      <div className="footerBottom">
        <div className="payments">
          <div className="payment">
            <img src="https://www.pikpng.com/pngl/b/202-2022355_follow-us-credit-cards-footer-clipart.png" />
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Bütün hüquqlar qorunur © MetaComp 2022</p>
      </div>
    </div>
  );
}

export default Footer;
