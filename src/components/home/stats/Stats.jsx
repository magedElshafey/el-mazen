import React from "react";
import style from "./stats.module.css";
import { useTranslation } from "react-i18next";
const Stats = ({ data }) => {
  const { i18n } = useTranslation();
  return (
    <div className={style.mainContainer}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-center gap-5 flex-wrap  ">
          {data.map((item, index) => (
            <div
              className={`d-flex flex-column  align-items-center mx-0 px-0 mx-md-5 px-md-5  ${style.info}`}
              key={index}
            >
              <p className={`m-0 p-0 ${style.number}`}>{item.number}</p>
              <p className={`m-0 p-0 ${style.title}`}>{item.enTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
