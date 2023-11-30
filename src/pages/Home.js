import React from "react";
import Hero from "../components/home/hero/Hero";
import Partners from "../components/home/partners/Partners";
import Portfolio from "../components/home/portfolio/Portfolio";
import Stats from "../components/home/stats/Stats";
import Services from "../components/home/services/Services";
import AboutUS from "../components/home/about/AboutUS";
import Featuers from "../components/home/featuers/Featuers";
import Reviews from "../components/home/Reviews/Reviews";
const Home = ({
  hero,
  partners,
  portfolio,
  stats,
  services,
  about,
  feat,
  rev,
}) => {
  return (
    <div className="mt-5 pt-4">
      <Hero data={hero} />
      <Partners data={partners} />
      <Portfolio data={portfolio} />
      <Stats data={stats} />
      <Services isHome={true} data={services} />
      <AboutUS allDesc={false} data={about} showSeeMore={true} />
      <Featuers data={feat} />
      <Reviews data={rev} />
    </div>
  );
};

export default Home;
