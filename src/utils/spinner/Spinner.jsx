import React from "react";
import style from "./spinner.module.css";
const Spinner = () => {
  return (
    <div className={style.mainContainer}>
      <span className={style.loader}></span>
    </div>
  );
};

export default Spinner;
