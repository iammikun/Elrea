import React from "react";
import classes from "./Hero.module.css";
// import teamImg from "../../../Asset/Images/teamImg.jpg";
// import teamImgTwo from "../../../Asset/Images/teamImgTwo.jpg";

const Hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes.contentContainer}>
        <div className={classes.wrapper}>
          <h1>
            Different ideas. <span>One purpose.</span>
          </h1>
          {/* <img src={teamImgTwo} alt="" /> */}
        </div>
        <div className={classes.teamImg}>
          {/* <img src={teamImg} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
