import React, { useState } from "react";
import style from "./slider.module.css";
const Slider = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleActiveIndex = (i) => setActiveIndex(i);
  return (
    <div className={style.mainContainer}>
      <img
        className={style.mainImg}
        alt="project/img"
        src={data[activeIndex]}
      />
      <div className={style.overlay}>
        <div className={style.imgWrapper}>
          {data.map((item, index) => (
            <img
              onClick={() => handleActiveIndex(index)}
              key={index}
              alt="sub/img"
              src={item}
              className={style.subImg}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
