import React from "react";
import style from "./BlogCard.module.css";
import { Link } from "react-router-dom";
const BlogCard = ({ item }) => {
  return (
    <div
      className={`d-flex flex-column flex-md-row gap-5 pb-3 ${style.mainContainer} mb-4`}
    >
      <img alt="blog/img" className={style.mainImg} src={item.img} />
      <div>
        <Link
          to={`/blog/${item.id}`}
          className={`d-inline-block m-0 p-0 mb-3 mb-md-5 ${style.title}`}
        >
          {item.title}
        </Link>
        <p className={`m-0 p-0 mb-5 ${style.desc}`}>{item.desc}</p>
        <p className={`m-0 p-0 text-uppercase ${style.date}`}>{item.date}</p>
      </div>
    </div>
  );
};

export default BlogCard;
