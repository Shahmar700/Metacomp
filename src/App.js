import "./App.css";
import "./Responsive.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import {useEffect} from "react"
import HeaderTop from "./Companents/HeaderTop";
import Header from "./Companents/Header";
import About from "./Pages/About";
import Catalog from "./Companents/Catalog";
import HomePage from "./Pages/HomePage";
import Result from "./Pages/Result";
import Start3 from "./Pages/Start3";
import Footer from "./Companents/Footer";
import FooterTop from "./Companents/FooterTop";
import Registration from "./Pages/Registration";
import Description from "./Pages/Description";
import Location from "./Pages/Location";
import Basket from "./Pages/Basket";
import BasketScroll from "./Companents/BasketScroll";
import ScrollTopBtn from "./Companents/ScrollTopBtn"
function App(props) {
  
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <div>
      {/* <Start3 /> */}
      <div className="App">
        <HeaderTop />
        <hr />
        <Header />
        <BasketScroll />
        <ScrollTopBtn />
        <div className="homeBody">
          <Catalog />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/category/:category" element={<Result />} />
            <Route path="/category/:category/:brand" element={<Result />} />
            <Route path="/description/:id" element={<Description />} />
            <Route path="/location" element={<Location />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/basket" element={<BasketScroll />} />
          </Routes>
        </div>
        <FooterTop />
        <Footer />
      </div>
    </div>
  );
}

let t = (s) => s;
export default connect(t)(App);
