import React from "react";
import style from "./stats.module.css";
import { useTranslation } from "react-i18next";
const Stats = ({ data }) => {
  const { i18n } = useTranslation();
  return (
    <div
      className={`${style.mainContainer} ${
        i18n.language === "en" ? style.ltrBorder : style.rtlBorder
      }`}
    >
      <div className="container">
        <div className="d-flex align-items-center justify-content-center gap-5 flex-wrap  ">
          {data.map((item, index) => (
            <div
              className={`d-flex flex-column  align-items-center mx-0 px-0 px-md-2 mx-lg-5 px-lg-5  ${style.info}`}
              key={index}
            >
              <p className={`m-0 p-0 ${style.number}`}>{item.value}</p>
              <p className={`m-0 p-0 ${style.title}`}>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
