import React from "react";
import style from "./BlogCard.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const BlogCard = ({ item }) => {
  const { i18n } = useTranslation();
  return (
    <div
      className={`d-flex flex-column flex-md-row gap-5 pb-3 ${style.mainContainer} mb-4`}
    >
      <img alt="blog/img" className={style.mainImg} src={item.thumbnail} />
      <div>
        <Link
          to={`/blog/${item.id}`}
          className={`d-inline-block m-0 p-0 mb-3 mb-md-5 ${style.title}`}
        >
          {item.title}
        </Link>
        <div
          className={`m-0 p-0 mb-5 ${style.desc}`}
          dangerouslySetInnerHTML={{ __html: item.content.substr(0, 70) }}
        />

        <p className={`m-0 p-0 text-uppercase ${style.date}`}>
          {i18n.language === "ar" ? item.Publish_date_ar : item.Publish_date_en}{" "}
          |{item.publisher}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
