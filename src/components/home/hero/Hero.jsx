import React from "react";
import style from "./hero.module.css";
import { useTranslation } from "react-i18next";
const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className={style.mainDiv}>
      <div className={style.overlay}>
        <div className="container">
          <p className={`m-0 p-0 mb-4 ${style.title}`}>{t("heroTitle")}</p>
          <p className={`m-0 p-0 mb-4 ${style.desc}`}>
            Praesent vel interdum nulla, et volutpat est. Praesent consectetur
            aliquet ligula,.
          </p>
          <button
            className={`d-flex align-items-center justify-content-center ${style.btn}`}
          >
            {t("navReq")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
