import React from "react";
import { useEffect, useState } from "react";

function ScrollTopBtn() {
  const [scrollTop, setScrollTop] = useState(false);
  useEffect(() => {
    const onScroll = (e) => {
      if (e.target.documentElement.scrollTop > 600) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [setScrollTop]);
  return (
    <a href="#">
      <div className={scrollTop ? "opened ScrollTopBtn" : "ScrollTopBtn" }>
        <i className="fa-solid fa-arrow-up"></i>
      </div>
    </a>
  );
}

export default ScrollTopBtn;
