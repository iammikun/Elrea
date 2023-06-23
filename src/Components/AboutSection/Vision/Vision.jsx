import React from "react";
import classes from "./Vision.module.css";

const Vision = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <h2>OUR VISION </h2>
          <p className={classes.lead}>
            To build a diverse future through creative technology solutions that
            will impact Africa and the world at large.
          </p>
        </div>
        <div className={classes.imgBox}>
          <div className={classes.borderLeft}></div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
