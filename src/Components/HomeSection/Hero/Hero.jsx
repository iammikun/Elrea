import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.heroWrapper}>
      <div className={classes.heroText}>
        <h2>We are Creators..</h2>
        <h1>
          We are a strategic arts marketing consultancy.We can build strategy
          that would make a big difference.
        </h1>
      </div>
      <div className={classes.heroImg}>.</div>
    </div>
  );
};

export default Hero;
