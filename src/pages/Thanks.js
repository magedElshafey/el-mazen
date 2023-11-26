import React from "react";
import Hero from "../components/thanks/hero/Hero";
import Meta from "../utils/meta/Meta";
import { useTranslation } from "react-i18next";
const Thanks = () => {
  const { i18n } = useTranslation();
  return (
    <>
      <Meta
        title={i18n.language === "ar" ? "طلب تمويل" : "Request Financing"}
      />
      <div>
        <Hero />
      </div>
    </>
  );
};

export default Thanks;
