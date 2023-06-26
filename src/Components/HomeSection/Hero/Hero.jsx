import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.heroWrapper}>
      <div className={classes.heroImg}>
        <div className={classes.heroText}>
          <h1>Together, we are transforming the world, one idea at a time.</h1>
        </div>
      </div>
      {/* <div className={classes.heroImg}>.</div> */}
    </div>
  );
};

export default Hero;
