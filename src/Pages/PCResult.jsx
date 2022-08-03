import React from "react";
import addtocard from "../images/addtocard.png";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
function PCResult(props) {
  const addToBasket = () => {
    props.dispatch({ type: "ADDTOBASKET", value: props.item });
  };

  let { category } = useParams();
  let { brand } = useParams();
  if (!brand) {
    brand = "";
  }
  console.log(category, brand);
  return (
    <div className="products">
      {props.products
        .filter(
          (a) =>
            a.category.toLowerCase() == category &&
            a.brand.toLowerCase().includes(brand)
        )
        .map((t) => {
          return (
            <div className="product" key={t.id}>
              <div className="imgDiv">
                <img src={t.image} />
              </div>
              <div className="nameDiv">
                <h1>{t.brand}</h1>
                <h1>{t.model}</h1>
                <h1 className="price">{t.price} ₼</h1>
              </div>
              <div>
                <button onClick={addToBasket} className="addToCard">
                  Səbətə <img src={addtocard} />{" "}
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}
let t = (s) => s;
export default connect(t)(PCResult);
