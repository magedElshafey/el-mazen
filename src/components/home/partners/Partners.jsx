import React from "react";
import style from "./partners.module.css";
import { Link } from "react-router-dom";
const Partners = ({ data }) => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        {data.map((item, index) => (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="col-6 col-md-4 col-lg-2 mb-3 mb-lg-0"
            key={index}
          >
            <img className={style.img} alt="partner/img" src={item.photo} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Partners;
