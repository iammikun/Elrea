import React from "react";
import classes from "./Hero.module.css";
import Lottie from "lottie-react";
import animationData from "../../../Asset/roller.json";

const Hero = () => {
  return (
    <div className={classes.heroWrapper}>
      <div className={classes.heroContainer}>
        <div className={classes.heroText}>
          <h1>Together, we are transforming the world, one idea at a time.</h1>
        </div>
        <Lottie animationData={animationData} className={classes.lottie} />
      </div>
      <div className={classes.heroImg}>.</div>
    </div>
  );
};

export default Hero;
