import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
function Result1(props) {   
  let { category } = useParams();
  let { sort } = useParams();
  if (!sort) {
    sort = "";
  }
  console.log(category, sort);
  return (
    <div className="products">
      {props.products
        .filter(
          (a) =>
            a.category.toLowerCase() == category &&
            a.sort.toLowerCase().includes(sort)
        )
        .map((t) => {
          return (
            <div className="product" key={t.id}>
              <img src={t.image} />
              <h1>{t.brand}</h1>
              <h1>{t.model}</h1>
              <h1>{t.price}</h1>
            </div>
          );
        })}
    </div>
  );
}

let t = (s) => s;
export default connect(t)(Result1);
