import React from "react";
import AboutUs from "../components/home/about/AboutUS";
import Services from "../components/home/services/Services";
const About = ({ services }) => {
  return (
    <div className="mt-5 pt-5">
      <AboutUs showSeeMore={false} />
      <div className="mt-4 border">
        <Services data={services} />
      </div>
    </div>
  );
};

export default About;
