import React from "react";
import { useParams } from "react-router-dom";
import TextContent from "../components/blog/textContent/TextContent";
import { useTranslation } from "react-i18next";
import BlogCard from "../utils/blogCard/BlogCard";
import { useNavigate } from "react-router-dom";
import { request } from "../utils/axios";
import { useQuery } from "react-query";
import Spinner from "../utils/spinner/Spinner";
const Blog = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { id } = useParams();

  const handleNavigate = () => navigate("/blog");
  const fetchData = (id) => {
    return request({ url: `/blogDetails/${id}` });
  };
  const { isLoading, data } = useQuery(["blogs-details"], () => fetchData(id), {
    cacheTime: 80000,
    staleTime: 80000,
  });
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="mt-5 pt-5 container">
          <TextContent data={data.data.data} />
          <div className="mt-4">
            <p className="m-0 p-0 read mb-3">{t("readMore")}</p>
            <div>
              {data.data.related.slice(0, 2).map((item, index) => (
                <BlogCard key={index} item={item} />
              ))}
            </div>
            {data.data.related.length > 2 && (
              <div className="d-flex align-items-center justify-content-center my-3">
                <button
                  onClick={handleNavigate}
                  className={`d-flex my-3 align-items-center justify-content-center moreBtn`}
                >
                  {t("all")}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
