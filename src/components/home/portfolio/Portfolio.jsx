import React from "react";
import style from "./portfolio.module.css";
import { useTranslation } from "react-i18next";
import PortfolioCard from "../../../utils/portfolioCard.jsx/PortfolioCard";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
const Portfolio = ({ data }) => {
  const { t } = useTranslation();
  // handle navigate
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/real");
  const swiperOptions = {
    loop: true,
    centeredSlides: false,
    spaceBetween: 120,
    navigation: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    breakpoints: {
      500: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <div className="container my-3 my-md-5">
      <p className="m-0 p-0 mb-3 title">{t("navPort")}</p>
      <Swiper modules={[Autoplay, Navigation]} {...swiperOptions}>
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <PortfolioCard isBg={false} item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      {data.length > 3 ? (
        <div className="d-flex align-items-center justify-content-center my-3">
          <button
            onClick={handleNavigate}
            className={`d-flex my-3 align-items-center justify-content-center ${style.btn}`}
          >
            {t("all")}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Portfolio;
