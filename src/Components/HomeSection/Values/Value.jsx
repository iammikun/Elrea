import React from "react";
import classes from "./Value.module.css";
import value from "../../../Asset/Images/valueImg.jpg";

const Value = () => {
  return (
    <div className={classes.valueContainer}>
      <div className={classes.valueContent}>
        <div className={classes.borderRight}>
          <img src={value} alt="" />
        </div>
        <div className={classes.valueText}>
          <h2>Our Values</h2>
          <h5>Our Mission</h5>
          <p>
            To constantly be on the lookout for problems and create scalable
            solutions using technology and profound innovation.
          </p>
          <h5>Our Vision</h5>
          <p>
            To build a diverse future through creative technology solutions that
            will impact Africa and the world at large.
          </p>

          <h5>Our Philosphy</h5>
          <p>
            As a molecular unit, excellence, hard work and creativity are
            ingrained into our DNA's makeup. Deeply embedded in our nature is
            the constant craving for ethical standards of working, empowering
            and developing our staff and opening doors and opportunities that
            would otherwise be unfathomable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Value;
