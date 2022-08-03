import React from "react";
import basket from "../images/basket.png";
import heart from "../images/heart.png";
import user from "../images/user.png";
import logo from "../images/Logo_text.png";
import reg from "../images/pencil.png";
import LoginModal from "./LoginModal";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";
function Header(props) {
  // console.log(props);

  // Resposive mobile bars  
  const [open, setOpen] = useState();

  const [openModal, setOpenModal] = useState(false);

  const handleInput = (e) => {
    {
      props.dispatch({ type: "SETFILTER", value: e.target.value });
    }
  };

  const clearInput = () => {};

  return (
    <header className="header wrapper">
      <i className="fa-solid fa-bars hamburger "></i>
      <NavLink to="/">
        <div className="logoDiv">
          <h1>Metacomp</h1>
          <img src={logo} />
        </div>
      </NavLink>
      <div className="search">
        {/* <i className="fas fa-bars"></i>
        <p>Kataloq</p> */}
        <div className="formControll">
          <input
            onChange={handleInput}
            type="text"
            placeholder="Məhsul axtar"
          />
          {props.filter.length === 0 ? (
            <i className="fa-regular fa-magnifying-glass"></i>
          ) : (
            <i
              className="fa-regular fa-xmark"
              id="close"
              onClick={clearInput}
            ></i>
          )}
        </div>
      </div>
      <div className="headerRight flex">
        <NavLink to="/basket">
          <div className="sebet">
            <i className="fa-light fa-basket-shopping"></i>
            <p>Səbət</p>
            {props.basket.length ? (
              <span>{props.basket.length}</span>
            ) : (
              props.basket
            )}
          </div>
        </NavLink>
        {/* <img src={heart} /> */}
        <div className="qeydiyyat">
          <NavLink to="/registration">
            <button className="flex align-center">
              <i className="fa-light fa-pen"></i>
              <p>Qeydiyyat</p>
            </button>
          </NavLink>
        </div>
        <div className="hesab">
          <button
            className="flex align-center"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <i className="fa-light fa-user"></i>
            <p>Daxil ol</p>
          </button>
        </div>
      </div>
      {openModal && <LoginModal closeModal={setOpenModal} />}
    </header>
  );
}

let t = (s) => s;
export default connect(t)(Header);
