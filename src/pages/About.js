import React, { useEffect } from "react";
import AboutUs from "../components/home/about/AboutUS";
import Meta from "../utils/meta/Meta";
import { useTranslation } from "react-i18next";
import { request } from "../utils/axios";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Spinner from "../utils/spinner/Spinner";
const About = ({ about }) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const fetchData = () => {
    return request({ url: "/settings" });
  };
  const { isLoading, data } = useQuery("settings", fetchData);
  console.log(`about`, data?.data.data.searchAboutUs.Slug);
  useEffect(() => {
    const currentSlug = window.location.pathname.split("/").pop();
    if (!isLoading) {
      if (data?.data?.data?.searchAboutUs?.Slug) {
        if (currentSlug !== data?.data?.data?.searchAboutUs?.Slug) {
          navigate(`/about/${data?.data?.data?.searchAboutUs?.Slug}`);
        }
      }
    } 
  }, [data.data.data.searchAboutUs.Slug, navigate, isLoading]);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Meta title={i18n.language === "ar" ? "من نحن" : "about us"} />
          <div className="mt-5 pt-5 mb-5">
            <AboutUs allDesc={true} data={about} showSeeMore={false} />
          </div>
        </>
      )}
    </>
  );
};

export default About;
