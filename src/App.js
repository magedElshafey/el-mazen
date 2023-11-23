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
import {
  navLinks,
  partners,
  portfolio,
  stats,
  services,
  feat,
  filters,
} from "./data/data";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Req from "./pages/Req";
import Real from "./pages/Real";
import RealDetails from "./pages/RealDetails";
import Thanks from "./pages/Thanks";
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
            <Home
              partners={partners}
              portfolio={portfolio}
              stats={stats}
              services={services}
              feat={feat}
            />
          }
        />
      </Routes>
      <Routes>
        <Route path="/about" element={<About services={services} />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Routes>
        <Route path="/req" element={<Req />} />
      </Routes>
      <Routes>
        <Route path="/thanks" element={<Thanks />} />
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
      <Footer links={navLinks} />
    </Router>
  );
};

export default App;
