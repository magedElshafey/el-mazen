import React from "react";
import { Helmet } from "react-helmet";
const Meta = ({ title, desc, canonical, fav }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href={desc} />
      <meta name="description" content={desc} />
      <link rel="icon" href={fav} />
    </Helmet>
  );
};

export default Meta;
