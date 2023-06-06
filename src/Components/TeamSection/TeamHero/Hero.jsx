import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h1>
          We are team of different <br /> talented for one purpose.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <br /> sed
          diam nonumy eirmod tempor invidunt ut labore et <br /> dolore magna
          aliquyam erat, sed diam voluptua.
        </p>
      </div>
    </div>
  );
};

export default Hero;
