import React from "react";
import classes from "./Philosophy.module.css";
import mision from "../../../Asset/Images/mision.jpg";

const Philosophy = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <h2>OUR PHILOSOPHY</h2>
          <p>
            You owe it to yourself to be patient and to have grit. These two
            qualities will help you achieve your goals and live a fulfilling
            life.
          </p>
          <p className={classes.lead}>
            - Ayeni Timilehin Franklin (CEO, Elrae Technologies)
          </p>
        </div>
        <div className={classes.imgBox}>
          <div className={classes.borderLeft}>
            <img src={mision} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
