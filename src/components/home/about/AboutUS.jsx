import React from "react";
import style from "./about.module.css";
import { useTranslation } from "react-i18next";
import about1 from "../../../assets/about-01.png";
import about2 from "../../../assets/about-02.png";
import { useNavigate } from "react-router-dom";
const About = ({ showSeeMore }) => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/about");
  const { t, i18n } = useTranslation();
  return (
    <div className="container">
      <div className="d-flex flex-column flex-md-row gap-4 gap-md-0 justify-content-center justify-content-md-between">
        <div>
          <p
            className={`m-0 p-0 mb-3 text-center ${style.aboutTitle}   ${
              i18n.language === "ar" ? "text-md-end" : "text-md-start"
            }`}
          >
            {t("navAbout")}
          </p>
          <p className={`${style.aboutDesc} m-0 p-0 mb-3`}>{t("aboutDesc")}</p>
          {showSeeMore && (
            <div
              className={`d-flex justify-content-center justify-content-md-start `}
            >
              <button
                onClick={handleNavigate}
                className={`d-flex align-items-center justify-content-center ${style.btn}`}
              >
                {t("all")}
              </button>
            </div>
          )}
        </div>
        <div>
          <div className={style.wrapper}>
            <img
              className={`${style.firstImg}  `}
              alt="about/img"
              src={about1}
            />
            <img
              className={`${style.secondImg} ${
                i18n.language === "ar" ? style.ltr : style.rtl
              } `}
              alt="about/img"
              src={about2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
