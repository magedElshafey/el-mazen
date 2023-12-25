import React from "react";
import { useParams } from "react-router-dom";
import Content from "../components/realDetails/content/Content";
import Slider from "../components/realDetails/Slider/Slider";
import Seemore from "../components/realDetails/seeMore/Seemore";
import Meta from "../utils/meta/Meta";
import { request } from "../utils/axios";
import Spinner from "../utils/spinner/Spinner";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
const RealDetails = ({ portfolio }) => {
  const { i18n } = useTranslation();
  const params = useParams();
  const fetchData = (id) => {
    return request({ url: `/RealEstate/realEstateDetails/${id}` });
  };
  const { isLoading, data } = useQuery(
    ["real-state-details"],
    () => fetchData(params.id),
    {
      onSuccess: () => console.log("data from real", data),
    }
  );
  // const dataAsArr = portfolio.filter((item) => item.id === +params.id);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Meta title={i18n.language === "ar" ? "عقارات" : "Real state"} />
          <div className="mt-5 pt-5">
            <div className="row justify-content-center ">
              <div className="p-0 m-0 col-12 col-md-5">
                <Content data={data.data.data} />
              </div>
              <div className="p-0 m-0 col-12 col-md-7">
                <Slider data={data.data.images} />
              </div>
              <div className="container mt-4">
                <Seemore data={data.data.related} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default RealDetails;
