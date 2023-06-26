import React from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Work from "./Work/Work";
import Value from "./Values/Value";
import Quote from "./Quote/Quote";
import Create from "./Create/Create";
import Blog from "./Blog/Blog";

const HomeSection = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Work />
      <Value />
      <Quote />
      <Create />
      <Blog />
    </div>
  );
};

export default HomeSection;
