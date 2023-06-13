import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.heroContainer}>
      <div className={classes.heroContent}>
        <h2>OUR BUSINESS PARTNERS</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </div>
    </div>
  );
};

export default Hero;
