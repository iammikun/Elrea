import React from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Work from "./Work/Work";
import Value from "./Values/Value";
import Blog from "./Blog/Blog";

const HomeSection = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Work />
      <Value />
      <Blog />
    </div>
  );
};

export default HomeSection;
