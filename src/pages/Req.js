import React from "react";
import ReqDetails from "../components/req/ReqDetails";
import Meta from "../utils/meta/Meta";
import { useTranslation } from "react-i18next";
const Req = () => {
  const { i18n } = useTranslation();
  return (
    <>
      <Meta
        title={i18n.language === "ar" ? "طلب تمويل" : "Request Financing"}
      />
      <div className="mt-5 pt-4">
        <ReqDetails />
      </div>
    </>
  );
};

export default Req;
