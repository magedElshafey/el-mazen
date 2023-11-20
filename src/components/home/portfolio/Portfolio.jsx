import React from "react";
import style from "./portfolio.module.css";
import { useTranslation } from "react-i18next";
const Portfolio = ({ data }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="container my-5">
      <p className={`m-0 p-0 mb-3 ${style.title}`}>{t("navPort")}</p>
      <div className="d-flex flex-wrap justify-content-center align-items-center gap-5">
        {data.slice(0, 3).map((item, index) => (
          <div key={index} className={`m-0 p-0 ${style.card}`}>
            <img src={item.img} alt="portfolio/img" className={style.mainImg} />
            <p className={`my-2 px-2 py-0 ${style.cardTitle}`}>
              {i18n.language === "ar" ? item.arTitle : item.enTitle}
            </p>
            <div className="d-flex align-items-center gap-1 px-2 pb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="14"
                viewBox="0 0 14 18"
                fill="none"
              >
                <path
                  d="M7.01782 8.55C6.42061 8.55 5.84787 8.31295 5.42558 7.89099C5.0033 7.46903 4.76606 6.89674 4.76606 6.3C4.76606 5.70326 5.0033 5.13097 5.42558 4.70901C5.84787 4.28705 6.42061 4.05 7.01782 4.05C7.61502 4.05 8.18776 4.28705 8.61005 4.70901C9.03234 5.13097 9.26958 5.70326 9.26958 6.3C9.26958 6.59547 9.21133 6.88806 9.09817 7.16104C8.98501 7.43402 8.81915 7.68206 8.61005 7.89099C8.40096 8.09992 8.15272 8.26566 7.87953 8.37873C7.60633 8.4918 7.31352 8.55 7.01782 8.55ZM7.01782 0C5.34565 0 3.74196 0.663748 2.55956 1.84523C1.37716 3.02671 0.712891 4.62914 0.712891 6.3C0.712891 11.025 7.01782 18 7.01782 18C7.01782 18 13.3227 11.025 13.3227 6.3C13.3227 4.62914 12.6585 3.02671 11.4761 1.84523C10.2937 0.663748 8.68999 0 7.01782 0Z"
                  fill="black"
                />
              </svg>
              <p className={`m-0 p-0 ${style.location}`}>
                {i18n.language === "ar" ? item.arLocation : item.enLocation}
              </p>
            </div>
          </div>
        ))}
      </div>
      {data.length > 3 ? (
        <div className="d-flex align-items-center justify-content-center my-3">
          <button
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
