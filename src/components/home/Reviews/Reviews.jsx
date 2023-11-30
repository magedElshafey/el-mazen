import React from "react";
import style from "./rev.module.css";
import { useTranslation } from "react-i18next";
import av from "../../../assets/av.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const swiperOptions = {
  loop: true,
  centeredSlides: true,
  spaceBetween: 0,
  navigation: true,
  autoplay: {
    delay: 5000,
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
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  },
};
const Reviews = ({ data }) => {
  const { t} = useTranslation();
  return (
    <div className="container my-5">
      <p className="m-0 p-0 mb-3 title">{t("rev")}</p>
      <div className="row justify-content-center">
        <Swiper
          modules={[Autoplay, Pagination]}
          {...swiperOptions}
          className={`col-10 col-md-6 p-2  ${style.revCard}`}
        >
          {data.map((item, index) => (
            <SwiperSlide
              key={index}
              className="d-flex flex-column gap-3 align-items-center justify-content-center"
            >
              <img alt="av/img" src={item.photo} className={style.av} />
              <p className={`m-0 p-0 ${style.name}`}>{item.name}</p>
              <p className={`m-0 p-0 mb-4 ${style.desc}`}>{item.review}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
/**
 *  <div className={`col-10 col-md-6  ${style.revCard}`}>
          <div className="d-flex flex-column align-items-center gap-3">
            <img alt="av/img" src={av} className={style.av} />
            <p className={`m-0 p-0 ${style.name}`}>
              {i18n.language === "ar" ? "ماجد الشافعي" : "maged elshafey"}
            </p>
            <p className={`m-0 p-0 ${style.desc}`}>
              {i18n.language === "ar"
                ? "انتو ناس مية المية المية المية و اسيادنا راضيين عليكو   "
                : "Praesent vel interdum nulla, et volutpat est. Praesent consectetur aliquet ligula"}
            </p>
          </div>
        </div>
 */
