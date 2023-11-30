import React from "react";
import Contactus from "../components/contact/Contactus";
import Meta from "../utils/meta/Meta";
import { useTranslation } from "react-i18next";
const Contact = ({ social }) => {
  const { i18n } = useTranslation();
  return (
    <>
      <Meta title={i18n.language === "ar" ? "تواصل معنا" : "contact us"} />
      <div className="container mt-5 pt-5 mb-4">
        <Contactus social={social} />
      </div>
    </>
  );
};

export default Contact;
