import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes.heroContainer}>
      <div className={classes.heroContent}>
        <h2>OUR BUSINESS PARTNERS</h2>
        <p>
          Elrae Technologies has forged strategic partnerships with a myriad of
          esteemed brannds and prominent national agencies spanning across
          Nigeria and the broader expense of African continent.
        </p>
      </div>
    </div>
  );
};

export default Hero;
