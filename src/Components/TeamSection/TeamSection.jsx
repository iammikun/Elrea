import React from "react";
import Hero from "./TeamHero/Hero";
import Team from "./TeamImg/Team";

const TeamSection = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <div>
        <Hero />
        <Team />
      </div>
    </div>
  );
};

export default TeamSection;
