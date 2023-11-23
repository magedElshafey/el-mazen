import React from "react";
import style from "./seemore.module.css";
import { useTranslation } from "react-i18next";
import PortfolioCard from "../../../utils/portfolioCard.jsx/PortfolioCard";
import { useNavigate } from "react-router-dom";
const Seemore = ({ data }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/real");
  return (
    <div className="container">
      <p className={`m-0 p-0 mb-5 ${style.title}`}>{t("see")}</p>
      <div className="row mb-3">
        {data.slice(0, 4).map((item, index) => (
          <div className="col-12 col-md-6 col-lg-3" key={index}>
            <PortfolioCard item={item} />
          </div>
        ))}
      </div>
      {data.length > 4 ? (
        <div className="d-flex align-items-center justify-content-center my-3">
          <button
            onClick={handleNavigate}
            className={`d-flex my-3 align-items-center justify-content-center ${style.btn}`}
          >
            {t("all")}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Seemore;
