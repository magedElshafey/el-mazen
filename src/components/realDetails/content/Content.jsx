import React from "react";
import style from "./content.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const Content = ({ data }) => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/req");
  return (
    <div
      className={`px-4 ${style.mainContainer} d-flex align-items-center justify-content-center`}
    >
      <div className="container">
        <div className="d-flex flex-column gap-4 align-items-center">
          <p className={`m-0 p-0 ${style.title}`}>
            {i18n.language === "ar" ? data.arTitle : data.enTitle}
          </p>
          <p className={style.desc}>{data.desc}</p>
          <button onClick={handleNavigate} className={`${style.btn} `}>
            {t("navReq")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
