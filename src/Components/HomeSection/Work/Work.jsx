import React from "react";
import classes from "./Work.module.css";
import workOne from "../../../Asset/Images/workOne.jpg";
import workTwo from "../../../Asset/Images/workTwo.jpg";
import workThree from "../../../Asset/Images/workThree.jpg";
import workFour from "../../../Asset/Images/workFour.jpg";

const Work = () => {
  return (
    <div className={classes.work_Container}>
      <div className={classes.work_Wrapper}>
        <h2>Work</h2>
      </div>
      <div className={classes.work_Flex}>
        <div className={classes.work_Sect}>
          <img src={workOne} alt="" />
          <p>Needed a completely fresh branding.</p>
        </div>
        <div className={classes.work_Sect}>
          <img src={workTwo} alt="" />
          <p>Needed a completely fresh branding.</p>
        </div>
      </div>
      <div className={classes.work_Flex_Two}>
        <div className={classes.work_Sect}>
          <img src={workThree} alt="" />
          <p>Needed a completely fresh branding.</p>
        </div>
        <div className={classes.work_Sect}>
          <img src={workFour} alt="" />
          <p>Needed a completely fresh branding.</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
