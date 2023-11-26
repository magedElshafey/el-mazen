import React from "react";
import { useParams } from "react-router-dom";
import TextContent from "../components/blog/textContent/TextContent";
import { useTranslation } from "react-i18next";
import BlogCard from "../utils/blogCard/BlogCard";
import { useNavigate } from "react-router-dom";
const Blog = ({ data }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { id } = useParams();
  const filterdData = data.filter((item) => item.id === +id);
  const handleNavigate = () => navigate("/blog");
  return (
    <div className="mt-5 pt-5 container">
      <TextContent data={filterdData[0]} />
      <div className="mt-4">
        <p className="m-0 p-0 read mb-3">{t("readMore")}</p>
        <div>
          {data.slice(0, 2).map((item, index) => (
            <BlogCard key={index} item={item} />
          ))}
        </div>
        {data.length > 2 && (
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
  );
};

export default Blog;
