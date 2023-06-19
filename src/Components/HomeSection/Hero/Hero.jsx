import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.heroWrapper}>
      <div className={classes.heroText}>
        {/* <h2>We are Creators..</h2> */}
        <h1>
          We leverage technology to bring ideas into reality by creating
          scalable solutions that positively affect our world.
        </h1>
      </div>
      <div className={classes.heroImg}>.</div>
    </div>
  );
};

export default Hero;
