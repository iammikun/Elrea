import React from "react";
import classes from "./Form.module.css";

const Form = () => {
  return (
    <div className={classes.container}>
      <div className={classes.contAdd}>
        <div className={classes.right}>
          <div className={classes.rightContent}>
            <h4>Nigeria</h4>
            <p>
              25/26 victoria ironsi crescent,
              <br /> 41 crescent, Gwarinpa. Abuja{" "}
            </p>
            <p className={classes.secondPee}>
              info@elraetechnologies.com ​<br />
              +2348155288800
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
