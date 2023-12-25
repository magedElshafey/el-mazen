import React, { useEffect } from "react";
import Hero from "../components/home/hero/Hero";
import Partners from "../components/home/partners/Partners";
import Portfolio from "../components/home/portfolio/Portfolio";
import Stats from "../components/home/stats/Stats";
import Services from "../components/home/services/Services";
import AboutUS from "../components/home/about/AboutUS";
import Featuers from "../components/home/featuers/Featuers";
import Reviews from "../components/home/Reviews/Reviews";
import Meta from "../utils/meta/Meta";
import { useNavigate } from "react-router-dom";
const Home = ({
  hero,
  partners,
  portfolio,
  stats,
  services,
  about,
  feat,
  rev,
  title,
  desc,
  redirect,
  slug,
  canonical,
}) => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (redirect) {
  //     window.location.href = redirect;
  //   }
  // }, [redirect]);
  // useEffect(() => {
  //   const currentSlug = window.location.pathname.split("/").pop();
  //   if (slug) {
  //     if (currentSlug !== slug) {
  //       navigate(`/${slug}`);
  //     }
  //   }
  // }, [navigate, slug]);
  useEffect(() => {
    const currentSlug = window.location.pathname.split("/").pop();
    if (slug) {
      if (currentSlug !== slug) {
        navigate(`/${slug}`);
      }
    }
  }, [slug, navigate]);
  return (
    <div className="mt-5 pt-4">
      <Meta title={title} desc={desc} canonical={canonical} />
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
