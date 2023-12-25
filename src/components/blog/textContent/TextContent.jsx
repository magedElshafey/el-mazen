import React from "react";
import style from "./text.module.css";
import { useTranslation } from "react-i18next";
const TextContent = ({ data }) => {
  const { i18n } = useTranslation();
  // console.log("this is the data from blog page", data);
  // console.log("this is the data from blog page id", data.id);
  return (
    <div className={`pb-3 ${style.main}`}>
      <p className="m-0 p-0 title mb-3 mt-3">{data.title}</p>
      <div className="row justify-content-center mb-4">
        <div className="col-12">
          <img src={data.thumbnail} alt="blog/img" className={style.mainImg} />
        </div>
        <div
          className={`m-0 p-0 mt-3 mb-5 ${style.desc}`}
          dangerouslySetInnerHTML={{ __html: data.content }}
        />

        <p
          dir={i18n.language === "ar" ? "ltr" : "rtl"}
          className={`m-0 p-0 text-uppercase ${style.date}`}
        >
          {i18n.language === "ar" ? data.Publish_date_ar : data.Publish_date_en}{" "}
          |{data.publisher}
        </p>
      </div>
    </div>
  );
};

export default TextContent;
