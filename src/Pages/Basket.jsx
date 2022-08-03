import React from "react";
import { connect } from "react-redux";
import "./Basket.css";
import { NavLink } from "react-router-dom";

function Basket(props) {
  const handleClick = () => {
    alert("Silindi !");
  };

  console.log(props.basket);
  const total = () => {
    return props.basket
      .map((item) => item.price * item.quantity)
      .reduce((i, j) => i + j);
  };
  return props.basket.length ? (
    <div className="basketContainer">
      <div className="basketProducts">
        {props.basket.map((item) => (
          <div className="basketItem" key={item.id}>
            <div className="basketWrapper">
              <div className="basketImg">
                <img src={item.image} />
              </div>
              <div className="basketName">
                <p>{item.name}</p>
              </div>
              <div className="basketQty">
                <span
                  className="minus"
                  onClick={() => {
                    props.dispatch({ type: "DECREASEITEM", value: item.id });
                  }}
                >
                  {" "}
                  <i className="fa-regular fa-minus"></i>{" "}
                </span>
                <p className="qty">{item.quantity}</p>
                <span
                  className="plus"
                  onClick={() => {
                    props.dispatch({ type: "INCREASEITEM", value: item.id });
                  }}
                >
                  {" "}
                  <i className="fa-regular fa-plus"></i>{" "}
                </span>
              </div>
              <div className="basketPrice">
                <span>{item.price} ₼</span>
              </div>
              <div
                className="trash"
                onClick={() => {
                  props.dispatch({ type: "REMOVEFROMBASKET", value: item.id });
                }}
              >
                <i className="fa-solid fa-trash-can" onClick={handleClick}></i>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="basketTotal">
        <div className="basketWrapper">
          {/* <h2>Səbəti təmizlə</h2> */}
          <h1>Yekun: {total()} azn</h1>
        </div>
      </div>
      <div className="basketWrapper">
        <div className="pay">
          <div className="clickPay">
            <div className="total">
              <p>Toplam ödəniləcək</p>
              <h5>{total()} azn</h5>
            </div>
            <div className="completeOrder">
              <button>Sifarişi tamamla</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="basketContainer">
      <div className="basketProducts emptyBasket">
        <h1>Səbət boşdur</h1>
        <i className="fa-light fa-cart-circle-xmark"></i>
        <NavLink to="/">
          <div className="button"><p>Əsas səhifəyə dön <i className="fa-regular fa-arrow-right"></i></p></div>
        </NavLink>
      </div>
    </div>
  );
}

let t = (s) => s;
export default connect(t)(Basket);
