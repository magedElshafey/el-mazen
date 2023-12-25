import React, { useEffect } from "react";
import Services from "../components/home/services/Services";
import Meta from "../utils/meta/Meta";
import { useNavigate } from "react-router-dom";
const Serv = ({ services, title, desc, redirect, slug, canonical }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const currentSlug = window.location.pathname.split("/").pop();
    if (slug) {
      if (currentSlug !== slug) {
        navigate(`/serv/${slug}`);
      }
    }
  }, [navigate, slug]);
  return (
    <div className="container pt-5 mt-5">
      <Meta title={title} desc={desc} canonical={canonical} />
      <Services data={services} isHome={false} />
    </div>
  );
};

export default Serv;
