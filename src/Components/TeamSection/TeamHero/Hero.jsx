import React from "react";
import classes from "./Hero.module.css";
import teamImg from "../../../Asset/Images/teamImg.jpg";
import teamImgTwo from "../../../Asset/Images/teamImgTwo.jpg";

const Hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes.contentContainer}>
        <div className={classes.wrapper}>
          <h1>We are team of different talented for one purpose.</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <img src={teamImgTwo} alt="" />
        </div>
        <div className={classes.teamImg}>
          <img src={teamImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
