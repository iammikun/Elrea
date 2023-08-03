import React from "react";
import classes from "./Address.module.css";

const Address = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {" "}
        <h4>Nigeria</h4>
        <p>25/26 Victoria Ironsi Crescent, 41 Crescent, Gwarinpa. Abuja</p>
        <div>
          <a href="mailto:info@elraetechnologies.com">
            {" "}
            info@elraetechnologies.com
          </a>
          <p>+234 815 528 8800</p>
          <p>+234 815 528 8788</p>
        </div>
      </div>
    </div>
  );
};

export default Address;
