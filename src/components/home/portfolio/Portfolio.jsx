import React from "react";
import style from "./portfolio.module.css";
import { useTranslation } from "react-i18next";
import PortfolioCard from "../../../utils/portfolioCard.jsx/PortfolioCard";
import { useNavigate } from "react-router-dom";
const Portfolio = ({ data }) => {
  const { t } = useTranslation();
  // handle navigate
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/real");
  return (
    <div className="container my-5">
      <p className="m-0 p-0 mb-3 title">{t("navPort")}</p>
      <div className="row justify-content-center gap-5">
        {data.slice(0, 3).map((item, index) => (
          <div key={index} className="col-12 col-md-5 col-lg-3">
            <PortfolioCard item={item} />
          </div>
        ))}
      </div>
      {data.length > 3 ? (
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

export default Portfolio;
