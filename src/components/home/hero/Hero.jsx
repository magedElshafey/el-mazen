import React from "react";
import style from "./hero.module.css";
import { useNavigate } from "react-router-dom";
const Hero = ({ data }) => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/req");
  return (
    <div className={style.mainDiv}>
      <div className={style.imgContainer}>
        <img alt="banner/img" src={data.img} className={style.img} />
        <div className={style.overlay}>
          <div className="container">
            <p className={`m-0 p-0 d-none d-md-block mb-4 ${style.title} `}>
              {data.title}
            </p>
            <p className={`m-0 p-0 mb-4 d-none d-md-block  ${style.desc}`}>
              {data.des}
            </p>
            <button
              onClick={handleNavigate}
              className={`d-none d-md-flex align -items-center justify-content-center ${style.btn}`}
            >
              {data.btn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
/**
 *   <div className={style.overlay}>
        <div className="container">
        
        </div>
      </div>
 */
