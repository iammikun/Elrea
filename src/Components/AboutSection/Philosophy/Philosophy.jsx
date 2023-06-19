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
            As a molecular unit, excellence, hard work and creativity are
            ingrained into our DNA's makeup. Deeply embedded in our nature is
            the constant craving for ethical standards of working, empowering
            and developing our staff and opening doors and opportunities that
            would otherwise be unfathomable.
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
