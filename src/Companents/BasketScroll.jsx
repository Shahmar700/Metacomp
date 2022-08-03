import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

function BasketScroll(props) {
  const [scrollBasket, setScrollBasket] = useState(false);
  useEffect(() => {
    const onScroll = (e) => {
      if (e.target.documentElement.scrollTop > 200) {
        setScrollBasket(true);
      } else {
        setScrollBasket(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollBasket]);
  return (
    <NavLink to="/basket">
      <div className={scrollBasket ? "opened basketScroll" : "basketScroll"}>
        <i className="fa-light fa-basket-shopping"></i>
        {props.basket.length ? (
          <span>{props.basket.length}</span>
        ) : (
          props.basket
        )}
      </div>
    </NavLink>
  );
}

let t = (s) => s;
export default connect(t)(BasketScroll);
