import React from "react";
import classes from "./Work.module.css";
import lottery from "../../../Asset/Images/lottery.jpg";
import workTwo from "../../../Asset/Images/workTwo.jpg";
import workThree from "../../../Asset/Images/workThree.jpg";
import workFour from "../../../Asset/Images/workFour.jpg";

const Work = () => {
  return (
    <div className={classes.work_Container}>
      <div className={classes.work_Wrapper}>
        <h2>Projects</h2>
      </div>
      <div className={classes.work_Flex}>
        <a
          href="https://nationallotterynigeria.com"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.work_Sect}
        >
          <img src={lottery} alt="" />
          <p>National Lottery Nigeria.</p>
        </a>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.work_Sect}
        >
          <img src={workTwo} alt="" />
          <p>Needed a completely fresh branding.</p>
        </a>
      </div>
      <div className={classes.work_Flex_Two}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.work_Sect}
        >
          <img src={workThree} alt="" />
          <p>Needed a completely fresh branding.</p>
        </a>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.work_Sect}
        >
          <img src={workFour} alt="" />
          <p>Needed a completely fresh branding.</p>
        </a>
      </div>
    </div>
  );
};

export default Work;
