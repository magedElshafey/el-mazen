import React from "react";
import AboutUs from "../components/home/about/AboutUS";
import Services from "../components/home/services/Services";
import Meta from "../utils/meta/Meta";
import { useTranslation } from "react-i18next";
const About = ({ services }) => {
  const { i18n } = useTranslation();
  return (
    <>
      <Meta title={i18n.language === "ar" ? "من نحن" : "about us"} />
      <div className="mt-5 pt-5">
        <AboutUs showSeeMore={false} />
        <div className="mt-4 border">
          <Services data={services} />
        </div>
      </div>
    </>
  );
};

export default About;
