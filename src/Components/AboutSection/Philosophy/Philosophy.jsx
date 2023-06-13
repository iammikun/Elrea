import React from "react";
import classes from "./Philosophy.module.css";
import mision from "../../../Asset/Images/mision.jpg";

const Philosophy = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <h2>OUR PHILOSOPHY</h2>
          <p className={classes.lead}>
            At a molecular unit, excellence, hard work and creativity are
            ingrained into our DNA's makeup.
          </p>
          <p>
            Deeply embedded in our nature is the constant craving for ethical
            standards of working, empowering and developing our staff and
            opening doors and opportunities that would otherwise
            be unfathomable.
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
            <img src={mision} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
