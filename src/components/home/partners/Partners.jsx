import React from "react";
import style from "./partners.module.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
const swiperOptions = {
  loop: true,
  centeredSlides: true,
  spaceBetween: 0,
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
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    900: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 6,
    },
  },
};
const Partners = ({ data }) => {
  return (
    <div className="container">
      <Swiper modules={[Autoplay, Navigation]} {...swiperOptions}>
        {data.map((item, index) => (
          <SwiperSlide className="text-center" key={index}>
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="col-6 col-md-4 col-lg-2 mb-3 mb-lg-0"
            >
              <img className={style.img} alt="partner/img" src={item.photo} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Partners;
/**
 *  <div className="row justify-content-center align-items-center">
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
 */
