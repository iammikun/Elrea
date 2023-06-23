import React from "react";
import classes from "./Philosophy.module.css";

const Philosophy = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <h2>OUR PHILOSOPHY</h2>
          <p className={classes.lead}>
            As a molecular unit, excellence, hard work and creativity are
            ingrained into our DNA's makeup. Deeply embedded in our nature is
            the constant craving for ethical standards of working, empowering
            and developing our staff and opening doors and opportunities that
            would otherwise be unfathomable.
          </p>
        </div>
        <div className={classes.imgBox}>
          <div className={classes.borderLeft}></div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
