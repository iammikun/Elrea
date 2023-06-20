import React from "react";
import classes from "./Address.module.css";

const Address = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {" "}
        <h4>Nigeria</h4>
        <p>25/26 victoria ironsi crescent, 41 crescent, Gwarinpa. Abuja</p>
        <div>
          <p> info@elraetechnologies.com</p>
          <p>+2348155288800</p>
        </div>
      </div>
    </div>
  );
};

export default Address;
