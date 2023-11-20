import React from "react";
import style from "./partners.module.css";
const Partners = ({ data }) => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        {data.map((item, index) => (
          <div className="col-6 col-md-4 col-lg-2 mb-3 mb-lg-0" key={index}>
            <img className={style.img} alt="partner/img" src={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
