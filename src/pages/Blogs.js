import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import Meta from "../utils/meta/Meta";
import BlogCard from "../utils/blogCard/BlogCard";
import ReactPaginate from "react-paginate";
import { request } from "../utils/axios";
import { useQuery } from "react-query";
import Spinner from "../utils/spinner/Spinner";
const Blogs = () => {
  const fetchData = () => {
    return request({ url: "/blogs" });
  };
  const { isLoading, data } = useQuery("blogs", fetchData, {
    cacheTime: 80000,
    staleTime: 80000,
  });
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = data?.data?.data?.length / usersPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const sectionRef = useRef(null);
  const handleFilterClick = () => {
    if (sectionRef.current) {
      const sectionTop = sectionRef.current.offsetTop - 100;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };
  const nextBtn = `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
  <path d="M0.355291 0.799466C0.242666 0.930066 0.153312 1.08519 0.0923468 1.25597C0.0313812 1.42675 0 1.60982 0 1.7947C0 1.97959 0.0313812 2.16266 0.0923468 2.33344C0.153312 2.50422 0.242666 2.65934 0.355291 2.78994L5.06911 8.26729L0.355291 13.7446C0.128132 14.0086 0.000514428 14.3666 0.000514428 14.7399C0.000514428 15.1132 0.128132 15.4712 0.355291 15.7351C0.582451 15.9991 0.890546 16.1474 1.2118 16.1474C1.53305 16.1474 1.84114 15.9991 2.0683 15.7351L7.64471 9.25547C7.75734 9.12487 7.84669 8.96974 7.90765 8.79896C7.96862 8.62819 8 8.44512 8 8.26023C8 8.07534 7.96862 7.89227 7.90765 7.7215C7.84669 7.55072 7.75734 7.39559 7.64471 7.26499L2.0683 0.785349C1.60664 0.248908 0.829104 0.248908 0.355291 0.799466Z" fill="#A9A9A9" fill-opacity="0.73"/>
</svg>`;
  const prevBtn = `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="17" viewBox="0 0 8 17" fill="none">
  <path d="M7.64471 0.799466C7.75733 0.930066 7.84669 1.08519 7.90765 1.25597C7.96862 1.42675 8 1.60982 8 1.7947C8 1.97959 7.96862 2.16266 7.90765 2.33344C7.84669 2.50422 7.75733 2.65934 7.64471 2.78994L2.93089 8.26729L7.64471 13.7446C7.87187 14.0086 7.99949 14.3666 7.99949 14.7399C7.99949 15.1132 7.87187 15.4712 7.64471 15.7351C7.41755 15.9991 7.10945 16.1474 6.7882 16.1474C6.46695 16.1474 6.15886 15.9991 5.9317 15.7351L0.35529 9.25547C0.242664 9.12487 0.153311 8.96974 0.0923452 8.79896C0.0313797 8.62819 0 8.44512 0 8.26023C0 8.07534 0.0313797 7.89227 0.0923452 7.7215C0.153311 7.55072 0.242664 7.39559 0.35529 7.26499L5.9317 0.785349C6.39336 0.248908 7.1709 0.248908 7.64471 0.799466Z" fill="#A9A9A9" fill-opacity="0.73"/>
</svg>`;
  const { t, i18n } = useTranslation();
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Meta title={t("blog")} />
          <div ref={sectionRef} className="container mt-5 pt-5">
            <p className="m-0 p-0 title mb-3">{t("blog")}</p>
            <div>
              {data.data.data
                .slice(pagesVisited, pagesVisited + usersPerPage)
                .map((item, index) => (
                  <BlogCard key={index} item={item} />
                ))}
            </div>
            <div className="d-flex justify-content-center">
              <ReactPaginate
                previousLabel={
                  i18n.language === "en" ? (
                    <div dangerouslySetInnerHTML={{ __html: prevBtn }} />
                  ) : (
                    <div dangerouslySetInnerHTML={{ __html: nextBtn }} />
                  )
                }
                nextLabel={
                  i18n.language === "en" ? (
                    <div dangerouslySetInnerHTML={{ __html: nextBtn }} />
                  ) : (
                    <div dangerouslySetInnerHTML={{ __html: prevBtn }} />
                  )
                }
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
                breakLabel="..."
                onClick={handleFilterClick}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Blogs;
