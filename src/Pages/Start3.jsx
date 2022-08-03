import React from "react";
import logo from "../images/LogoWhite.png";
import "./start.css"
function Start3() {
  return (
    <div className="start3Container flex">
      <img src={logo} />
      <div className="stLeft">
        <div className="col-2">
          <h1>Sərfəli qiymətə Premium komponentlər</h1>
          <p>
            «MetaComp» mağazası geniş çeşiddə kompüter, kompüter avadanlıqları,
            noutbuklar və ofis texnikasını ən münasib qiymətə Bakı və
            Azərbaycanda sizə təqdim edir. Biz dünyanın ən aparıcı brend
            şirkətlərinin Logitech, Asus, Huawei, LG, Canon, Intel, Kingston,
            HP, Sony, Acer, Apple, A4Tech və bir çox şirkətlərin məhsullarının
            satışını həyata keçiririk. Siz bizim dükanımızdan ev üçün, biznes
            üçün, iş üçün istənilən – kompüterlər, noutbuklar, netbuklar,
            monitorlar, prosessorlar, videokartlar, operativ yaddaşlar və s. bir
            çox komponentlər satın ala bilərsiniz.
          </p>
          <a href="#" className="enterBtn">
            Daxil ol
          </a>
        </div>
      </div>
      <div className="stRight">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
        <p>Metacomp</p>
      </div>
    </div>
  );
}

export default Start3;
