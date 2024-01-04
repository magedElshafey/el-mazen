import React from "react";
import style from "./portfolio.module.css";
import { useTranslation } from "react-i18next";
import PortfolioCard from "../../../utils/portfolioCard.jsx/PortfolioCard";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Portfolio = ({ data }) => {
  const { t } = useTranslation();
  // handle navigate
  const navigate = useNavigate();
  const handleNavigate = () => navigate("/real");
  // const swiperOptions = {
  //   loop: true,
  //   centeredSlides: false,
  //   spaceBetween: 120,
  //   navigation: true,
  //   autoplay: {
  //     delay: 1500,
  //     disableOnInteraction: false,
  //   },
  //   pagination: {
  //     clickable: true,
  //   },
  //   breakpoints: {
  //     500: {
  //       slidesPerView: 1,
  //     },
  //     768: {
  //       slidesPerView: 2,
  //     },
  //     900: {
  //       slidesPerView: 3,
  //     },
  //     1024: {
  //       slidesPerView: 4,
  //     },
  //   },
  // };
  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    autoplay: true, // Enable autoplay
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 4,

    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",
    vertcal: false,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="container my-3 my-md-5">
      <p className="m-0 p-0 mb-3 title">{t("navPort")}</p>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div className="w-90" key={index}>
            <PortfolioCard isBg={false} item={item} />
          </div>
        ))}
      </Slider>
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
