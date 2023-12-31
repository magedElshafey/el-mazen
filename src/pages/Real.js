import React, { useState, useEffect } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io"; // Import your arrow icons
import { useTranslation } from "react-i18next";
import PortfolioCard from "../utils/portfolioCard.jsx/PortfolioCard";
import Meta from "../utils/meta/Meta";
import Spinner from "../utils/spinner/Spinner.jsx";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { request } from "../utils/axios.js";
const Real = ({ filters }) => {
  const fetchSlugs = () => {
    return request({ url: "/settings" });
  };
  const { isLoading: loadingSlugs, data: dataSlugs } = useQuery(
    "settings",
    fetchSlugs
  );
  const lang = localStorage.getItem("lang")
    ? JSON.parse(localStorage.getItem("lang"))
    : "ar";
  const [activeId, setActiveId] = useState(null);
  const { t, i18n } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const [catId, setCatId] = useState("");
  const [areaId, setAreaId] = useState("");
  const [data, setData] = useState([]);
  const [area, setArea] = useState([]);
  const [cat, setCat] = useState([]);
  const [name, setName] = useState("");
  const [activeCat, setActiveCat] = useState(null);
  const [activeArea, setActiveArea] = useState(null);

  const navigate = useNavigate();
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleFilter = () => {
    fetchData();
    setActiveArea(null);
    setActiveCat(null);
    setAreaId("");
    setCatId("");
    setName("");
    setShowMenu(false);
  };
  const fetchData = async () => {
    setLoading(true);
    let url = "https://admin.mazen.com.sa/api/RealEstate";
    if (catId && !areaId && !name) {
      url = `https://mazen.technomasrsystems.com/api/RealEstate?cat_id=${catId}`;
    } else if (areaId && !catId && !name) {
      url = `https://mazen.technomasrsystems.com/api/RealEstate?area_id=${areaId}`;
    } else if (name && !catId && !areaId) {
      url = `https://mazen.technomasrsystems.com/api/RealEstate?name=${name}`;
    } else if (catId && areaId && !name) {
      url = `https://mazen.technomasrsystems.com/api/RealEstate?cat_id=${catId}&area_id=${areaId}`;
    } else if (catId && name && !areaId) {
      url = `https://mazen.technomasrsystems.com/api/RealEstate?cat_id=${catId}&name=${name}`;
    } else if (areaId && name && !catId) {
      url = `https://mazen.technomasrsystems.com/api/RealEstate?area_id=${areaId}&name=${name}`;
    } else if (areaId && name && !catId) {
      url = `https://mazen.technomasrsystems.com/api/RealEstate?area_id=${areaId}&name=${name}&catId=${catId}`;
    }
    try {
      const res = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          lang,
        },
      });
      const data = await res.json();

      if (data.status) {
        setData(data.data);
        setArea(data.area);
        setCat(data.cate);

        setLoading(false);
      } else {
        toast.error(data.message);
      }
    } catch {}
  };
  useEffect(() => {
    fetchData();
  }, []);
  // useEffect(() => {
  //   const currentSlug = window.location.pathname.split("/").pop();
  //   if (!loading && !loadingSlugs) {
  //     if (dataSlugs?.data?.search?.Slug) {
  //       if (currentSlug !== dataSlugs?.data?.search?.Slug) {
  //         navigate(`/real/port/${dataSlugs?.data?.search?.Slug}`);
  //       }
  //     }
  //   }
  // }, [dataSlugs?.data?.search?.Slug, navigate, loading, loadingSlugs]);

  return (
    <>
      {loading || loadingSlugs ? (
        <Spinner />
      ) : (
        <>
          <Meta
            title={data?.data?.search?.title}
            desc={data?.data?.search?.Meta}
            canonical={data?.data?.search?.Canonical}
          />
          <div className="container mt-5 pt-5">
            <p className="m-0 p-0 mb-3 title">{t("navPort")}</p>
            <div className="filterContainer mb-5 d-flex align-items-center">
              <div className="py-2 px-4 d-flex align-items-center justify-content-between w-100">
                <div className="d-flex align-items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="20"
                    viewBox="0 0 32 30"
                    fill="none"
                  >
                    <path
                      d="M32 26.7003L22.8382 18.3244C24.5319 15.971 25.2103 13.1268 24.742 10.3424C24.2737 7.55799 22.692 5.0315 20.3031 3.25206C17.9142 1.47262 14.8882 0.566822 11.8107 0.710032C8.7333 0.853242 5.82345 2.03528 3.64456 4.02728C1.46568 6.01928 0.172746 8.67954 0.0161004 11.493C-0.140546 14.3065 0.850235 17.073 2.79662 19.257C4.743 21.441 7.50652 22.887 10.5521 23.3152C13.5978 23.7433 16.7088 23.1231 19.283 21.5746L28.4448 29.9506L32 26.7003ZM3.55822 12.0741C3.55822 7.59354 7.5454 3.94834 12.4463 3.94834C17.3472 3.94834 21.3343 7.59354 21.3343 12.0741C21.3343 16.5546 17.3472 20.1998 12.4463 20.1998C7.5454 20.1998 3.55822 16.5546 3.55822 12.0741Z"
                      fill="#969696"
                    />
                  </svg>
                  <input
                    className="filterInp"
                    placeholder={t("search")}
                    onChange={handleNameChange}
                  />
                </div>
                <svg
                  onClick={() => setShowMenu(!showMenu)}
                  className="pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="21"
                  viewBox="0 0 38 31"
                  fill="none"
                >
                  <path
                    d="M33.8249 9.88587C33.8249 9.3876 33.6084 8.90973 33.223 8.5574C32.8376 8.20507 32.3149 8.00713 31.7699 8.00713C31.2249 8.00713 30.7022 8.20507 30.3168 8.5574C29.9314 8.90973 29.7149 9.3876 29.7149 9.88587C29.7149 10.3841 29.9314 10.862 30.3168 11.2143C30.7022 11.5667 31.2249 11.7646 31.7699 11.7646C32.3149 11.7646 32.8376 11.5667 33.223 11.2143C33.6084 10.862 33.8249 10.3841 33.8249 9.88587ZM33.8249 4.56905C35.0282 4.9572 36.0701 5.67701 36.8071 6.62927C37.5442 7.58152 37.9399 8.71934 37.9399 9.88587C37.9399 11.0524 37.5442 12.1902 36.8071 13.1425C36.0701 14.0947 35.0282 14.8145 33.8249 15.2027L33.8249 28.6732C33.8249 29.1715 33.6084 29.6494 33.223 30.0017C32.8376 30.354 32.3149 30.552 31.7699 30.552C31.2249 30.552 30.7022 30.354 30.3168 30.0017C29.9314 29.6494 29.7149 29.1715 29.7149 28.6732L29.7149 15.2027C28.5117 14.8145 27.4697 14.0947 26.7327 13.1425C25.9957 12.1902 25.5999 11.0524 25.5999 9.88587C25.5999 8.71934 25.9957 7.58152 26.7327 6.62927C27.4697 5.67701 28.5117 4.9572 29.7149 4.56905L29.7149 2.37092C29.7149 1.87265 29.9314 1.39479 30.3168 1.04246C30.7022 0.690125 31.2249 0.492187 31.7699 0.492187C32.3149 0.492187 32.8376 0.690125 33.223 1.04246C33.6084 1.39479 33.8249 1.87265 33.8249 2.37092L33.8249 4.56905ZM21.4949 21.1583C21.4949 20.66 21.2784 20.1822 20.893 19.8298C20.5077 19.4775 19.985 19.2795 19.4399 19.2795C18.8949 19.2795 18.3722 19.4775 17.9868 19.8298C17.6015 20.1822 17.3849 20.66 17.3849 21.1583C17.3849 21.6566 17.6015 22.1344 17.9868 22.4868C18.3722 22.8391 18.8949 23.037 19.4399 23.037C19.985 23.037 20.5077 22.8391 20.893 22.4868C21.2784 22.1344 21.4949 21.6566 21.4949 21.1583ZM21.4949 15.8415C22.6982 16.2296 23.7402 16.9494 24.4772 17.9017C25.2142 18.8539 25.61 19.9918 25.61 21.1583C25.61 22.3248 25.2142 23.4626 24.4772 24.4149C23.7402 25.3671 22.6982 26.087 21.4949 26.4751L21.4949 28.6732C21.4949 29.1715 21.2784 29.6494 20.893 30.0017C20.5077 30.354 19.985 30.552 19.4399 30.552C18.8949 30.552 18.3722 30.354 17.9868 30.0017C17.6015 29.6494 17.3849 29.1715 17.3849 28.6732L17.3849 26.4751C16.1817 26.087 15.1397 25.3671 14.4027 24.4149C13.6657 23.4626 13.2699 22.3248 13.2699 21.1583C13.2699 19.9918 13.6657 18.8539 14.4027 17.9017C15.1397 16.9494 16.1817 16.2296 17.3849 15.8415L17.3849 2.37092C17.3849 1.87265 17.6015 1.39479 17.9868 1.04246C18.3722 0.690125 18.8949 0.492187 19.4399 0.492187C19.985 0.492187 20.5077 0.690125 20.893 1.04246C21.2784 1.39479 21.4949 1.87265 21.4949 2.37092L21.4949 15.8415ZM9.16496 9.88587C9.16496 9.3876 8.94845 8.90973 8.56307 8.5574C8.17768 8.20507 7.65498 8.00713 7.10996 8.00713C6.56494 8.00713 6.04225 8.20507 5.65686 8.5574C5.27148 8.90973 5.05497 9.3876 5.05497 9.88587C5.05497 10.3841 5.27148 10.862 5.65686 11.2143C6.04225 11.5667 6.56494 11.7646 7.10996 11.7646C7.65498 11.7646 8.17768 11.5667 8.56307 11.2143C8.94845 10.862 9.16496 10.3841 9.16496 9.88587ZM9.16496 4.56904C10.3682 4.9572 11.4102 5.67701 12.1472 6.62927C12.8842 7.58152 13.28 8.71934 13.28 9.88587C13.28 11.0524 12.8842 12.1902 12.1472 13.1425C11.4102 14.0947 10.3682 14.8145 9.16496 15.2027L9.16496 28.6732C9.16496 29.1715 8.94845 29.6494 8.56307 30.0017C8.17768 30.354 7.65498 30.552 7.10996 30.552C6.56494 30.552 6.04225 30.354 5.65686 30.0017C5.27148 29.6494 5.05497 29.1715 5.05497 28.6732L5.05497 15.2027C3.8517 14.8145 2.80975 14.0947 2.07274 13.1425C1.33572 12.1902 0.939941 11.0524 0.939941 9.88587C0.939941 8.71934 1.33572 7.58152 2.07274 6.62927C2.80975 5.67701 3.8517 4.95719 5.05497 4.56904L5.05497 2.37092C5.05497 1.87265 5.27148 1.39479 5.65686 1.04246C6.04225 0.690124 6.56495 0.492186 7.10996 0.492186C7.65498 0.492186 8.17768 0.690124 8.56307 1.04246C8.94845 1.39479 9.16496 1.87265 9.16496 2.37092L9.16496 4.56904Z"
                    fill="#969696"
                  />
                </svg>
              </div>
              {showMenu && (
                <ul
                  className={`menu ${
                    i18n.language === "ar" ? "menuLtr" : "menuRtl"
                  }`}
                >
                  {filters.map((item, index) => (
                    <>
                      <li
                        key={index}
                        className={` pointer d-flex align-items-center justify-content-between mb-4  ${
                          activeId === index ? "activeFilter" : null
                        }`}
                      >
                        <span>
                          {i18n.language === "ar" ? item.arTitle : item.enTitle}
                        </span>
                        {activeId === index ? (
                          <IoIosArrowUp
                            size={15}
                            onClick={() => setActiveId(null)}
                          />
                        ) : (
                          <IoIosArrowDown
                            size={15}
                            onClick={() => setActiveId(index)}
                          />
                        )}
                      </li>
                      {activeId === index && item.enTitle === "building" ? (
                        <ul className="m-0 p-0">
                          {cat.map((item, indexTwo) => (
                            <li
                              onClick={() => {
                                setCatId(item.id);
                                setActiveCat(indexTwo);
                              }}
                              className={`px-2 mt-3 pb-3 filterBorder pointer ${
                                activeCat === indexTwo ? "activeFilter" : null
                              } `}
                              key={indexTwo}
                            >
                              {i18n.language === "ar"
                                ? item.name_ar
                                : item.name_en}
                            </li>
                          ))}
                        </ul>
                      ) : activeId === index && item.enTitle === "location" ? (
                        <ul className="m-0 p-0">
                          {area.map((item, indexTwo) => (
                            <li
                              onClick={() => {
                                setActiveArea(indexTwo);
                                setAreaId(item.id);
                              }}
                              className={`px-2 mt-3 pb-3 filterBorder pointer ${
                                activeArea === indexTwo ? "activeFilter" : null
                              }`}
                              key={indexTwo}
                            >
                              {i18n.language === "ar"
                                ? item.title_ar
                                : item.title_en}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </>
                  ))}
                  <div className="mt-3 d-flex justify-content-center">
                    <button
                      onClick={handleFilter}
                      className="d-flex justify-content-center align-items-center filterBtn"
                    >
                      {t("filter")}
                    </button>
                  </div>
                </ul>
              )}
            </div>
            <div className="row gap-5 justify-content-center mb-4">
              {data?.map((item, index) => (
                <div key={index} className="col-12 col-md-5 col-lg-3">
                  <PortfolioCard item={item} isBg={true} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Real;
