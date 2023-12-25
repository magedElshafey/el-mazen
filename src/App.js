// hooks
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
// animation
import Aos from "aos";
// react router dom
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
// data
import { navLinks, portfolio, filters, blogs } from "./data/data";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Req from "./pages/Req";
import Real from "./pages/Real";
import RealDetails from "./pages/RealDetails";
import Thanks from "./pages/Thanks";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import { useQuery } from "react-query";
import Spinner from "./utils/spinner/Spinner.jsx";
import { request } from "./utils/axios";
import Meta from "./utils/meta/Meta";
import Serv from "./pages/Serv.js";
const App = () => {
  // lang
  useEffect(() => {
    localStorage.setItem("lang", JSON.stringify(i18n.language));
  }, []);
  const { i18n } = useTranslation();
  // handle language
  useEffect(() => {
    document.documentElement.setAttribute("lang", i18n.language);
    if (i18n.language === "ar") {
      document.getElementsByTagName("body")[0].style.direction = "rtl";
    } else {
      document.getElementsByTagName("body")[0].style.direction = "ltr";
    }
  }, [i18n.language]);

  // handle animation
  useEffect(() => {
    Aos.init({
      offset: 0,
      duration: 1200,
    });
  }, []);

  // handle scroll to top after change page
  // function ScrollToTopAfterChangePage() {
  //   const { pathname } = useLocation();
  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, [pathname]);
  //   return null;
  // }
  // fetch main page and general data
  const fetchData = () => {
    return request({ url: "/settings" });
  };
  const { isLoading, data } = useQuery("settings", fetchData);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Router>
          <Navbar logo={data.data.data.images.logo} links={navLinks} />
          <Meta
            title={data.data.data.SEO.title}
            fav={data.data.data.images.fav}
          />
          <Routes>
            <Route
              path="/:slug?"
              element={
                <Home
                  hero={data.data.data.header}
                  partners={data.data.data.partners}
                  portfolio={data.data.data.realState}
                  stats={data.data.data.statistics}
                  services={data.data.data.services}
                  about={data.data.data.aboutUs}
                  feat={data.data.data.features}
                  rev={data.data.data.reviews}
                  title={data.data.data.search.title}
                  desc={data.data.data.search.Meta}
                  redirect={data.data.data.search.CustomUrl}
                  slug={data.data.data.search.Slug}
                  canonical={data.data.data.search.Canonical}
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/about/:slug?"
              element={
                <About
                  about={data.data.data.aboutUs}
                  services={data.data.data.services}
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/serv/:slug?"
              element={
                <Serv
                  services={data.data.data.services}
                  title={data.data.data.searchServices.title}
                  desc={data.data.data.searchServices.Meta}
                  redirect={data.data.data.searchServices.CustomUrl}
                  slug={data?.data?.data?.searchServices?.Slug}
                  canonical={data.data.data.searchServices.Canonical}
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/contact/form"
              element={<Contact social={data.data.data.socialMedia} />}
            />
          </Routes>
          <Routes>
            <Route path="/req/form" element={<Req />} />
          </Routes>
          <Routes>
            <Route path="/thanks/form" element={<Thanks />} />
          </Routes>
          <Routes>
            <Route
              path="/blog/:slug?"
              element={
                <Blogs
                  title={data.data.data.searchBlog.title}
                  desc={data.data.data.searchBlog.Meta}
                  redirect={data.data.data.searchBlog.CustomUrl}
                  slug={data.data.data.searchBlog.Slug}
                  canonical={data.data.data.searchBlog.Canonical}
                  data={blogs}
                />
              }
            />
          </Routes>
          <Routes>
            <Route path="/blog/:id/:slug" element={<Blog data={blogs} />} />
          </Routes>
          <Routes>
            <Route
              path="/real/:slug"
              element={
                <Real
                  portfolio={portfolio}
                  filters={filters}
                  title={data.data.data.searchRealEstate.title}
                  desc={data.data.data.searchRealEstate.Meta}
                  redirect={data.data.data.searchRealEstate.CustomUrl}
                  slug={data.data.data.searchRealEstate.Slug}
                  canonical={data.data.data.searchRealEstate.Canonical}
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/real/:id/:slug?"
              element={<RealDetails portfolio={portfolio} />}
            />
          </Routes>
          <Footer social={data.data.data.socialMedia} links={navLinks} />
        </Router>
      )}
    </>
  );
};

export default App;
