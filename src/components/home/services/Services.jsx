import React from "react";
import style from "./services.module.css";
import { useTranslation } from "react-i18next";
const Services = ({ data }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="container my-5">
      <p className="m-0 p-0 mb-3 title">{t("servTitle")}</p>
      <div className="row justify-content-center gap-4">
        {data.map((item, index) => (
          <div key={index} className={`col-11 col-md-3 ${style.card}`}>
            <div className={`${style.cardContent}`}>
              <p className={`m-0 p-0 ${style.number}`}>{item.number}</p>
              <div>
                <p className={`m-0 p-0 mb-1 ${style.cardTitle}`}>
                  {i18n.language === "ar" ? item.arTitle : item.enTitle}
                </p>
                <p className={`m-0 p-0  ${style.cardDesc}`}>
                  {i18n.language === "ar" ? item.arDesc : item.enDesc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
