import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes.heroContent}>
        <h1>Let's talk about everything</h1>
      </div>
    </div>
  );
};

export default Hero;
