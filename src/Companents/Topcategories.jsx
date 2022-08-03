import React from "react";
import laptop from "../images/laptop.png";
import motherboard from "../images/motherboard.png";
import cpu from "../images/cpu.png";
import ram from "../images/ram.png";
import monitor from "../images/monitor.png";
import { NavLink } from "react-router-dom";
function Topcategories() {
  return (
    <div className="topCategories">
      <h2>Populyar Kateqoriyalar</h2>
      <ul className="topCategoriesContain">
        <li className="topCat">
          <NavLink to="category/laptop">
            <img src={laptop} />
            <h2>Noutbuklar</h2>
          </NavLink>
        </li>
        <li className="topCat">
          <NavLink to="category/mainboard">
            <img src={motherboard} />
            <h2>Ana Platalar</h2>
          </NavLink>
        </li>
        <li className="topCat">
          <NavLink to="category/cpu">
            <img src={cpu} />
            <h2>Prosessorlar</h2>
          </NavLink>
        </li>
        <li className="topCat">
          <NavLink to="category/ram">
            <img src={ram} />
            <h2>Operaiv yaddaş</h2>
          </NavLink>
        </li>
        <li className="topCat">
          <NavLink to="category/monitor">
            <img src={monitor} />
            <h2>Monitorlar</h2>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Topcategories;
