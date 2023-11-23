import React from "react";
import style from "./rev.module.css";
import { useTranslation } from "react-i18next";
import av from "../../../assets/av.svg";
const Reviews = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="container my-5">
      <p className="m-0 p-0 mb-3 title">{t("rev")}</p>
      <div className="row justify-content-center">
        <div className={`col-10 col-md-6  ${style.revCard}`}>
          <div className="d-flex flex-column align-items-center gap-3">
            <img alt="av/img" src={av} className={style.av} />
            <p className={`m-0 p-0 ${style.name}`}>
              {i18n.language === "ar" ? "ماجد الشافعي" : "maged elshafey"}
            </p>
            <p className={`m-0 p-0 ${style.desc}`}>
              {i18n.language === "ar"
                ? "انتو ناس مية المية المية المية و اسيادنا راضيين عليكو   "
                : "Praesent vel interdum nulla, et volutpat est. Praesent consectetur aliquet ligula"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
