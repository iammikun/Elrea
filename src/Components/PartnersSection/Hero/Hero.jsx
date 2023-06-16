import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.heroContainer}>
      <div className={classes.heroContent}>
        <h2>OUR BUSINESS PARTNERS</h2>
        <p>
          We have partnered with some of the most valuable brands and national
          agencies across Nigeria and Africa at large.
        </p>
      </div>
    </div>
  );
};

export default Hero;
