import React from "react";
import style from "./services.module.css";
import { useTranslation } from "react-i18next";
const Services = ({ data, isHome }) => {
  const { t } = useTranslation();
  return (
    <div className="container my-5">
      <p className="m-0 p-0 mb-3 title">{t("servTitle")}</p>
      <div className="row justify-content-center gap-4">
        {isHome
          ? data.slice(0, 3).map((item, index) => (
              <div key={index} className={`col-11 col-md-3 ${style.card}`}>
                <div className={`${style.cardContent}`}>
                  <p className={`m-0 p-0 ${style.number}`}>{++index}</p>
                  <div>
                    <p className={`m-0 p-0 mb-1 ${style.cardTitle}`}>
                      {item.title}
                    </p>
                    <p className={`m-0 p-0  ${style.cardDesc}`}>{item.des}</p>
                  </div>
                </div>
              </div>
            ))
          : data.map((item, index) => (
              <div key={index} className={`col-11 col-md-3 ${style.card}`}>
                <div className={`${style.cardContent}`}>
                  <p className={`m-0 p-0 ${style.number}`}>{++index}</p>
                  <div>
                    <p className={`m-0 p-0 mb-1 ${style.cardTitle}`}>
                      {item.title}
                    </p>
                    <p className={`m-0 p-0  ${style.cardDesc}`}>{item.des}</p>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Services;
