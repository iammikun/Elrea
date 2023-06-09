import React from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Work from "./Work/Work";
import Value from "./Values/Value";
import Blog from "./Blog/Blog";
import Quote from "./Quote/Quote";

const HomeSection = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Work />
      <Value />
      <Quote />
      <Blog />
    </div>
  );
};

export default HomeSection;
