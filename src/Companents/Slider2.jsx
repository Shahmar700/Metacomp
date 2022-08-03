import React, { useState } from "react";
import { Slider2Data } from "./Slider2Data";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

function Slider2({ slides }) {
  const [current, setCurrent] = useState(0);
  const length2 = slides.length;

  const nextSlide = () => {
    setCurrent(current === length2 - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length2 - 1 : current - 1);
  };

  // console.log(current);

  // if (!Array.isArray(slides) || slides.length <= 0) {
  //   return null;
  // }

  return (
    <section className="slider2">
      <FaArrowAltCircleLeft className="leftArrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="rightArrow" onClick={nextSlide} />
      {Slider2Data.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div className="slider2Img">
                <img key={slide.id} src={slide.image} alt="PC" />
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Slider2;
