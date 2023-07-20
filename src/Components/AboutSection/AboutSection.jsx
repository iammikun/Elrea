import React from "react";
import Hero from "../AboutSection/Hero/Hero";
import Mission from "./Mission/Mission";
import Vision from "./Vision/Vision";
import Philosophy from "./Philosophy/Philosophy";

const AboutSection = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Hero />
      <Mission />
      <Vision />
      <Philosophy />
    </div>
  );
};

export default AboutSection;
