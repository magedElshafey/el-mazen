import React from "react";
import Hero from "../components/home/hero/Hero";
import Partners from "../components/home/partners/Partners";
import Portfolio from "../components/home/portfolio/Portfolio";
import Stats from "../components/home/stats/Stats";
const Home = ({ partners, portfolio, stats }) => {
  return (
    <div className="mt-5 pt-4">
      <Hero />
      <Partners data={partners} />
      <Portfolio data={portfolio} />
      <Stats data={stats} />
    </div>
  );
};

export default Home;
