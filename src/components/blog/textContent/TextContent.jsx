import React from "react";
import style from "./text.module.css";
import { useTranslation } from "react-i18next";
const TextContent = ({ data }) => {
  const { i18n } = useTranslation();
  return (
    <div className={`pb-3 ${style.main}`}>
      <p className="m-0 p-0 title mb-3 mt-3">{data.title}</p>
      <div className="row justify-content-center mb-4">
        <div className="col-12">
          <img src={data.img} alt="blog/img" className={style.mainImg} />
        </div>
        <p className={`m-0 p-0 mt-3 mb-5 ${style.desc}`}>{data.allDesc}</p>
        <p
          dir={i18n.language === "ar" ? "ltr" : "rtl"}
          className={`m-0 p-0 text-uppercase ${style.date}`}
        >
          {data.date}
        </p>
      </div>
    </div>
  );
};

export default TextContent;
