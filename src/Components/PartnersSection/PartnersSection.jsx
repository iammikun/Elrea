import React from "react";
import Hero from "../PartnersSection/Hero/Hero";
import PartNext from "./PartNext/PartNext";

const PartnersSection = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <div>
        <Hero />
        <PartNext />
      </div>
    </div>
  );
};

export default PartnersSection;
