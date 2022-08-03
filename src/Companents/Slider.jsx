import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

function Slider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // console.log(current);

  // if (!Array.isArray(slides) || slides.length <= 0) {
  //   return null;
  // }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="leftArrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="rightArrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div className="sliderImg">
                <img key={slide.id} src={slide.image} alt="PC" />
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Slider;
