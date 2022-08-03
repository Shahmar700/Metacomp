import sl1 from "../images/slider-img/1.jpg";
import sl2 from "../images/slider-img/2.jpg";
import sl3 from "../images/slider-img/3.jpg";
import sl4 from "../images/slider-img/4.jpg";
import sl5 from "../images/slider-img/5.jpg";
import sl6 from "../images/slider-img/6.jpg"

import "./MainSlider.css";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

function MainSlider() {
  return (
    <div className="MainSlider">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="mainSliderContainer">
          <img src={sl6} />
        </SwiperSlide>
        <SwiperSlide className="mainSliderContainer">
          <img src={sl2} />
        </SwiperSlide>
        <SwiperSlide className="mainSliderContainer">
          <img src={sl1} />
        </SwiperSlide>
        <SwiperSlide className="mainSliderContainer">
          <img src={sl3} />
        </SwiperSlide>
        <SwiperSlide className="mainSliderContainer">
          <img src={sl5} />
        </SwiperSlide>
        <SwiperSlide className="mainSliderContainer">
          <img src={sl4} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MainSlider;
