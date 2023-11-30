import React from "react";
import Services from "../components/home/services/Services";

const Serv = ({ services }) => {
  return (
    <div className="container pt-5 mt-5">
      <Services data={services} isHome={false} />
    </div>
  );
};

export default Serv;
