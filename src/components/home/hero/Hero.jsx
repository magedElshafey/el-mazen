import React from "react";
import style from "./hero.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const Hero = ({ data }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/req");
  return (
    <div
      style={{
        backgroundImage: `url(${data.img})`,
      }}
      className={style.mainDiv}
    >
      <div className={style.overlay}>
        <div className="container">
          <p className={`m-0 p-0 mb-4 ${style.title}`}>{data.title}</p>
          <p className={`m-0 p-0 mb-4 ${style.desc}`}>{data.des}</p>
          <button
            onClick={handleNavigate}
            className={`d-flex align-items-center justify-content-center ${style.btn}`}
          >
            {data.btn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
