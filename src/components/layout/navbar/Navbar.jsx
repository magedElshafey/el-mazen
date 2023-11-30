// hooks
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import style from "./nav.module.css";
import { Link, NavLink } from "react-router-dom";
import ksa from "../../../assets/ksa.svg";
import usa from "../../../assets/usa.png";
// icons
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
const Navbar = ({ links, logo }) => {
  const { i18n, t } = useTranslation();
  // handle change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", JSON.stringify(lng));
    window.location.reload();
  };
  // handle show sidebar
  const [showSidebar, setShowSidebar] = useState(false);
  const handleShowSidebar = () => setShowSidebar(!showSidebar);
  // handle navigate
  const navigate = useNavigate();
  const handleNavigate = () => {
    setActiveId(null);
    navigate("/req");
    setShowSidebar(false);
  };
  const [activeId, setActiveId] = useState(0);
  return (
    <>
      <div className={style.navContainer}>
        <div className="container d-flex justify-content-between align-items-center">
          <img alt="logo/img" className={style.logo} src={logo} />
          <ul className="d-none d-md-flex align-items-center gap-5 p-0 m-0 ">
            {links.map((item, index) => (
              <NavLink
                onClick={() => setActiveId(index)}
                key={index}
                className={`${style.navLink} ${
                  activeId === index ? style.active : null
                }`}
                to={item.path}
              >
                {i18n.language === "ar" ? item.arTitle : item.enTitle}
              </NavLink>
            ))}
            <li>
              <div className="dropdown ">
                <button
                  className="dropdown-toggle dropmenu"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {i18n.language === "ar" ? (
                    <img
                      alt="language/img"
                      className={style.langImg}
                      src={ksa}
                    />
                  ) : (
                    <img
                      alt="language/img"
                      className={style.langImg}
                      src={usa}
                    />
                  )}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <span
                      onClick={() => changeLanguage("ar")}
                      className="dropdown-item pointer"
                    >
                      {i18n.language === "ar" ? "العربية" : "AR"}
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={() => changeLanguage("en")}
                      className="dropdown-item pointer"
                    >
                      {i18n.language === "ar" ? "الانجليزية" : "EN"}
                    </span>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div className="d-none d-md-flex align-items-center gap-4">
            <button onClick={handleNavigate} className={`${style.btn} `}>
              {t("navReq")}
            </button>
          </div>
          <div className="d-md-none">
            <AiOutlineMenu
              className={`pointer ${style.menu}`}
              onClick={handleShowSidebar}
              size={40}
            />
          </div>
        </div>
      </div>
      <div
        className={`${style.sidebar} ${showSidebar ? style.show : style.hide}`}
      >
        <div className="p-3">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <img alt="logo/img" className={style.mobLogo} src={logo} />
            <IoClose
              size={30}
              className={`pointer ${style.close}`}
              onClick={handleShowSidebar}
            />
          </div>
          <ul className="p-0 m-0 ">
            {links.map((item, index) => (
              <li
                onClick={handleShowSidebar}
                key={index}
                className={`${style.mobList} pb-3 mt-3`}
              >
                <Link key={index} className={style.mobLink} to={item.path}>
                  {i18n.language === "ar" ? item.arTitle : item.enTitle}
                </Link>
              </li>
            ))}
            <li className="mt-3 d-flex align-items-center justify-content-between">
              <span className={style.mobLink}>
                {i18n.language === "en" ? "change language" : "تغيير اللغة"}
              </span>
              <ul className="dropdown-menu">
                <li>
                  <span
                    onClick={() => changeLanguage("ar")}
                    className="dropdown-item pointer"
                  >
                    {i18n.language === "ar" ? "العربية" : "AR"}
                  </span>
                </li>
                <li>
                  <span
                    onClick={() => changeLanguage("en")}
                    className="dropdown-item pointer"
                  >
                    {i18n.language === "ar" ? "الانجليزية" : "EN"}
                  </span>
                </li>
              </ul>
            </li>
            <li className="mt-5 d-flex justify-content-center">
              <button onClick={handleNavigate} className={`${style.btn} `}>
                {t("navReq")}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
