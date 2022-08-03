import React, { useState } from "react";
import addtocard from "../images/addtocard.png";
import { connect } from "react-redux";
import rarr from "../images/rarr.png";
import { NavigationType, NavLink, useParams } from "react-router-dom";
function Result(props) {
  const [loadMore, setLoadMore] = useState(12);

  const addToBasket = (item) => {
    props.dispatch({ type: "ADDTOBASKET", value: item });
  };
  let { category } = useParams();
  let { brand } = useParams();
  if (!brand) {
    brand = "";
  }
  let items = [...props.products];
  items = items.filter((i) =>
    i.name
      ? i.name.toLowerCase().includes(props.filter.toLowerCase())
      : i.brand.toLowerCase().includes(props.filter.toLowerCase())
  );
  console.log(category, brand);
  return (
    <div className="resContainer">
      <div className="productHeader">
        <div className="productHeaderContain">
          <i className="fa-solid fa-chevrons-down"></i>
          {category == "pc" ? <h1>Masaüstü PC və Hazır Keyslər</h1> : ""}
          {category == "laptop" ? <h1>Noutbuklar, Ultrabuklar</h1> : ""}
          {category == "monitor" ? <h1>Monitorlar</h1> : ""}
          {category == "mainboard" ? <h1>Ana Platalar</h1> : ""}
          {category == "cpu" ? <h1>Prosessorlar</h1> : ""}
          {category == "cooler" ? <h1>Soyuducu qurğular</h1> : ""}
          {category == "ram" ? <h1>Operativ Yaddaş</h1> : ""}
          {category == "storage" ? <h1>Sərt disk və SSD lər</h1> : ""}
          {category == "vga" ? <h1>Video Kartlar</h1> : ""}
          {category == "optic" ? <h1>Optik Qurğular</h1> : ""}
          {category == "mouse" ? <h1>Kompüter Siçanları</h1> : ""}
          {category == "keyboard" ? <h1>Klaviaturalar</h1> : ""}
          {category == "speaker" ? <h1>Səs Ucaldıcılar</h1> : ""}
          {category == "headphones" ? <h1>Qulaqlıqlar</h1> : ""}
          {category == "cables" ? <h1>Kabellər və Ucluqlar</h1> : ""}
          {category == "office" ? <h1>Ofis avadanlıqları, Printerlər</h1> : ""}
          <i className="fa-solid fa-chevrons-down"></i>
        </div>
      </div>
      <div className="products flex">
        {items
          .filter(
            (a) =>
              a.category.toLowerCase() == category &&
              a.brand.toLowerCase().includes(brand)
          )
          .slice(0, loadMore)
          .map((t) => {
            return (
              <div className="product" key={t.id}>
                <NavLink to={`/description/${t.id}`}>
                  <div className="imgDiv">
                    <img src={t.image} />
                  </div>
                  <div className="nameDiv">
                    <h1>{t.brand}</h1>
                    <h1>{t.model}</h1>
                    <h1 className="price">{t.price} ₼</h1>
                  </div>
                </NavLink>
                <div>
                  <div className="productBottom">
                    <div className="detailsBtn">
                      <NavLink to={`/description/${t.id}`}>
                        <p>
                          Daha Ətraflı <i className="fa-solid fa-share"></i>{" "}
                        </p>
                      </NavLink>
                    </div>
                    <div className="basketBtn">
                      {!props.basket.includes(t) ? (
                        <button
                          onClick={() => addToBasket(t)}
                          className="addToCard"
                        >
                          Əlavə Et{" "}
                          <i className="fa-regular fa-cart-arrow-down"></i>
                        </button>
                      ) : (
                        <button
                          onClick={() => addToBasket(t)}
                          className="addToCard active"
                        >
                          Edildi
                          <i className="fa-light fa-cart-circle-check"></i>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="viewMore">
        {loadMore == 12 && (
          <button onClick={() => setLoadMore(30)}>Daha çox yüklə</button>
        )}
      </div>
      {/* <div className="resultRight">
        <div className="filters">
          <div className="filtersHead">
            <h3>FILTER</h3>
          </div>
          <form>
            <input id="clearFilterBtn" type="reset" value="Filteri təmizlə" />
            <hr />
          </form>
        </div>
      </div> */}
    </div>
  );
}
let t = (s) => s;
export default connect(t)(Result);
