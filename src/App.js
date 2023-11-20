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
import { navLinks, partners, portfolio, stats } from "./data/data";
const App = () => {
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
  return (
    <Router>
      <ScrollToTopAfterChangePage />
      <Navbar links={navLinks} />
      <Routes>
        <Route
          path="/"
          element={
            <Home partners={partners} portfolio={portfolio} stats={stats} />
          }
        />
      </Routes>
      <Footer links={navLinks} />
    </Router>
  );
};

export default App;
