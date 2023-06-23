import React from "react";
import classes from "./Mission.module.css";

const Mission = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <h2>MISSION</h2>
          <p className={classes.lead}>
            To constantly be on the lookout for problems and create scalable
            solutions using technology and profound innovation.
          </p>
        </div>
        <div className={classes.imgBox}>
          <div className={classes.borderLeft}></div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
