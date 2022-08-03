import React from "react";
import Slider from "../Companents/Slider";
import Slider2 from "../Companents/Slider2";
import { SliderData } from "../Companents/SliderData";
import { Slider2Data } from "../Companents/Slider2Data";
import Topcategories from "../Companents/Topcategories";
import Companies from "../Companents/Companies";
import MainSlider from "../Companents/MainSlider";
import HomePageItems from "../Companents/HomePageItems";
import BasketScroll from "../Companents/BasketScroll";

function HomePage(props) {
  return (
    <>
      <div className="homePageRight">
        <div className="homePageSlider">
          <MainSlider />
          {/* <Slider slides={SliderData} /> */}
          {/* <Slider2 slides={Slider2Data} /> */}
        </div>
        <Companies />
        {/* <Topcategories /> */}
        <HomePageItems />
        {/* <BasketScroll /> */}
      </div>
    </>
  );
}

export default HomePage;
