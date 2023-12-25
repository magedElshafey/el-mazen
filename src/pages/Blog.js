import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import TextContent from "../components/blog/textContent/TextContent";
import { useTranslation } from "react-i18next";
import BlogCard from "../utils/blogCard/BlogCard";
import { useNavigate } from "react-router-dom";
import { request } from "../utils/axios";
import { useQuery } from "react-query";
import Spinner from "../utils/spinner/Spinner";
import Meta from "../utils/meta/Meta";
const Blog = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const params = useParams();
  console.log("this is the params", params);
  const handleNavigate = () => navigate("/blog");
  const fetchData = (id) => {
    return request({ url: `/blogDetails/${id}` });
  };
  const { isLoading, data } = useQuery(["blogs-details"], () =>
    fetchData(params.id)
  );

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="mt-5 pt-5 container">
          <Meta
            title={data.data.data.searchTitle}
            desc={data.data.data.searchMetaDes}
            canonical={data.data.searchCanonical}
          />
          {/**<Meta
            title={data.data.data.search.title}
            desc={data.data.data.search.Meta}
            canonical={data.data.data.search.Canonical}
          /> */}
          <TextContent data={data.data.data} />
          <div className="mt-4">
            <p className="m-0 p-0 read mb-3">{t("read")}</p>
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
                  {t("read")}
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
