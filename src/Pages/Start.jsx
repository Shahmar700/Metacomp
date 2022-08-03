import React from "react";
import logo from "../images/LogoWhite.png";
import pc from "../images/startİmage.png";
function Start() {
  return (
    <div className="startContainer">
      <div className="startContainerWrapper">
        <div className="startBody">
          <div className="stBodyLeft">
            <div className="startHeader">
              <img src={logo} />
            </div>
            <h1>Sərfəli qiymətə Premium komponentlər</h1>
            <p>
              «MetaComp» mağazası geniş çeşiddə kompüter, kompüter
              avadanlıqları, noutbuklar və ofis texnikasını ən münasib qiymətə
              Bakı və Azərbaycanda sizə təqdim edir. Biz dünyanın ən aparıcı
              brend şirkətlərinin  Logitech, Asus, Huawei, 
              LG, Canon, Intel, Kingston, HP, Sony, Acer,
              Apple, A4Tech və bir çox
              şirkətlərin məhsullarının satışını həyata keçiririk. Siz bizim
              dükanımızdan ev üçün, biznes üçün, iş üçün istənilən –
              kompüterlər, noutbuklar, netbuklar, monitorlar, prosessorlar, videokartlar, operativ yaddaşlar və
              s. bir çox komponentlər satın ala bilərsiniz.{" "}
            </p>
            <a href="#" className="enterBtn">
              Daxil ol
            </a>
          </div>
          <div className="stBodyRight circle-ring">
            <div className="ring">
              <img src={pc} />
              <span className="circle"></span>
            </div>
            <div className="ring-two">
              <span className="circle-two"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
