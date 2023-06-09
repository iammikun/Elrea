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
          <p>
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit, consetetur sadipscing elitr.
          </p>
          <h5>Collaborative</h5>
          <p>
            Consetetur Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam Voluptua. At Vero Eos Accusamjusto Duo Et.
          </p>
          <h5>Trusted</h5>
          <p>
            Consetetur Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam Voluptua. At Vero Eos Accusamjusto Duo Et.
          </p>
          <h5>Focused</h5>
          <p>
            Consetetur Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam Voluptua. At Vero Eos Accusamjusto Duo Et.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Value;
