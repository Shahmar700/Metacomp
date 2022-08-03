import React from "react";
import Asus from "../images/Companies/Asus.png";
import Msi from "../images/Companies/Msi.png";
import Hp from "../images/Companies/Hp.png"
import Razer from "../images/Companies/Razer.png";
import Corsair from "../images/Companies/Corsair.png";
import A4Tech from "../images/Companies/A4Tech.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';
function Companies() {
  return (
    <div className="Companies">
      <ul className="company">
        <li className="companyImg ASUS">
          <a href="https://www.asus.com/" target="_blank"><img src={Asus} /></a>
        </li>
        <li className="companyImg MSI">
          <a href="https://www.msi.com/index.php" target="_blank"><img src={Msi} /></a>
        </li>
        {/* <li className="companyImg HP">
          <img src={Hp} />
        </li> */}
        <li className="companyImg comImg2 RAZER">
          <a href="https://www.razer.com/" target="_blank"><img src={Razer} /></a>
        </li>
        <li className="companyImg CORSAIR">
          <a href="https://www.corsair.com/ww/en/" target="_blank"><img src={Corsair} /></a>
        </li>
        <li className="companyImg A4TECH">
          <a href="https://www.a4tech.com/" target="_blank"><img src={A4Tech} /></a>
        </li>
      </ul>
    </div>
  );
}

export default Companies;
