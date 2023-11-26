import React from "react";
import { useParams } from "react-router-dom";
import Content from "../components/realDetails/content/Content";
import Slider from "../components/realDetails/Slider/Slider";
import Seemore from "../components/realDetails/seeMore/Seemore";
import Meta from "../utils/meta/Meta";
import { useTranslation } from "react-i18next";
const RealDetails = ({ portfolio }) => {
  const { i18n } = useTranslation();
  const params = useParams();
  const dataAsArr = portfolio.filter((item) => item.id === +params.id);
  return (
    <>
      <Meta title={i18n.language === "ar" ? "عقارات" : "Real state"} />
      <div className="mt-5 pt-5">
        <div className="row justify-content-center ">
          <div className="p-0 m-0 col-12 col-md-5">
            <Content data={dataAsArr[0]} />
          </div>
          <div className="p-0 m-0 col-12 col-md-7">
            <Slider data={dataAsArr[0].slider} />
          </div>
          <div className="container mt-4">
            <Seemore data={portfolio} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RealDetails;
