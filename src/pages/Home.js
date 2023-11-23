import React from "react";
import Hero from "../components/home/hero/Hero";
import Partners from "../components/home/partners/Partners";
import Portfolio from "../components/home/portfolio/Portfolio";
import Stats from "../components/home/stats/Stats";
import Services from "../components/home/services/Services";
import AboutUS from "../components/home/about/AboutUS";
import Featuers from "../components/home/featuers/Featuers";
import Reviews from "../components/home/Reviews/Reviews";
const Home = ({ partners, portfolio, stats, services, feat }) => {
  return (
    <div className="mt-5 pt-4">
      <Hero />
      <Partners data={partners} />
      <Portfolio data={portfolio} />
      <Stats data={stats} />
      <Services data={services} />
      <AboutUS showSeeMore={true} />
      <Featuers data={feat} />
      <Reviews />
    </div>
  );
};

export default Home;
