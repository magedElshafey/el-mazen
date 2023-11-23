import React from "react";
import style from "./featuers.module.css";
import { useTranslation } from "react-i18next";
import vector from "../../../assets/Vector.png";

const Featuers = ({ data }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className=" my-5 position-relative">
      <div
        style={{
          position: "absolute",
          inset: "0",
          overflow: "hidden",
          opacity: "0.1",
        }}
      >
        <img
          alt="bg"
          src={vector}
          style={{
            width: "100%",
          }}
        />
      </div>
      <p className="m-0 p-0  title">{t("featTitle")}</p>
      <div className=" mt-5 pt-5 z-3 d-flex align-items-center justify-content-center gap-3 flex-wrap">
        {data.map((item, index) => (
          <div key={index} className={`z-3  ${style.mainCard}`}>
            <img alt="icon" src={item.img} className={style.mainImg} />
            <p className={` ${style.cardTitle}`}>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featuers;
