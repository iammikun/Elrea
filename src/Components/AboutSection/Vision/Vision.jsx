import React from "react";
import classes from "./Vision.module.css";
import vision from "../../../Asset/Images/vision.jpg";

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
          {/* <p>
            Nam pulvinar sapien pulvinar, laoreet sem eu, blandit magna. Duis
            finibus diam, eget efficitur massa vehicula quis. Nullam vestibulum
            ante ipsum primis in faucibus orci luctus et massa vehicula quis
            ultrices posuere cubilia curae.
          </p> */}
        </div>
        <div className={classes.imgBox}>
          <div className={classes.borderLeft}>
            <img src={vision} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
