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
  function ScrollToTopAfterChangePage() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }
  // fetch main page and general data
  const fetchData = () => {
    return request({ url: "/settings" });
  };
  const { isLoading, data } = useQuery("settings", fetchData, {
    cacheTime: 80000,
    staleTime: 80000,
  });
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Router>
          <ScrollToTopAfterChangePage />
          <Navbar logo={data.data.data.images.logo} links={navLinks} />
          <Meta
            title={data.data.data.SEO.title}
            fav={data.data.data.images.fav}
          />
          <Routes>
            <Route
              path="/"
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
                />
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/about"
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
              path="/serv"
              element={<Serv services={data.data.data.services} />}
            />
          </Routes>
          <Routes>
            <Route
              path="/contact"
              element={<Contact social={data.data.data.socialMedia} />}
            />
          </Routes>
          <Routes>
            <Route path="/req" element={<Req />} />
          </Routes>
          <Routes>
            <Route path="/thanks" element={<Thanks />} />
          </Routes>
          <Routes>
            <Route path="/blog" element={<Blogs data={blogs} />} />
          </Routes>
          <Routes>
            <Route path="/blog/:id" element={<Blog data={blogs} />} />
          </Routes>
          <Routes>
            <Route
              path="/real"
              element={<Real portfolio={portfolio} filters={filters} />}
            />
          </Routes>
          <Routes>
            <Route
              path="/real/:id"
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
