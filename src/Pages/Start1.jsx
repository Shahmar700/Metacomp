import React from "react";
import pc from "../images/startİmage.png";
import logo from "../images/LogoWhite.png";
function Start1() {
  return (
    <div className="startContainer">
      <div className="startHeader1">
        <div className="logo">
          <img src={logo} />
        </div>
      </div>
      <div className="row">
        <div className="col-2">
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
              s. bir çox komponentlər satın ala bilərsiniz.
          </p>
          <a href="#" className="enterBtn">
              Daxil ol
            </a>
        </div>
        <div className="col-2" id="circle-ring">
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
  );
}

export default Start1;
