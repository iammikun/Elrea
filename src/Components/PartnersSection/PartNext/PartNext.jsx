import React from "react";
import classes from "./PartNext.module.css";
import nibss from "../../../Asset/Images/nibss.jpg";
import nepa from "../../../Asset/Images/nepa.jpg";
import jos from "../../../Asset/Images/jos.jpg";
import remita from "../../../Asset/Images/remita.png";
import bayelsa from "../../../Asset/Images/bayelsa.png";
import mtn from "../../../Asset/Images/mtn.jpg";
import rev from "../../../Asset/Images/rev.jpg";
import NITDA from "../../../Asset/Images/NITDA.webp";
import lottery from "../../../Asset/Images/lottery.jpg";
// import moobitek from "../../../Asset/Images/moobitek.png";
import moobifun from "../../../Asset/Images/moobifun.jpeg";

const PartNext = () => {
  return (
    <div className={classes.container}>
      <div className={classes.partContent}>
        <div className={classes.invest}>
          <img src={nibss} alt="" />
        </div>
        <div className={classes.bank}>
          {" "}
          <img src={nepa} alt="" />
        </div>
        <div className={classes.const}>
          {" "}
          <img src={jos} alt="" />
        </div>
      </div>
      <div className={classes.partContentTwo}>
        <div className={classes.invest}>
          <img src={remita} alt="" />
        </div>
        <div className={classes.bank}>
          {" "}
          <img src={bayelsa} alt="" />
        </div>
        <div className={classes.const}>
          {" "}
          <img src={mtn} alt="" />
        </div>
      </div>
      <div className={classes.partContentThree}>
        <div className={classes.invest}>
          <img src={rev} alt="" />
        </div>
        <div className={classes.bank}>
          {" "}
          <img src={NITDA} alt="" />
        </div>
        <div className={classes.bank}>
          {" "}
          <img src={lottery} alt="" />
        </div>
      </div>
      <div className={classes.partContentThree}>
        {/* <div className={classes.invest}>
          <img src={moobitek} alt="" />
        </div> */}
        <div className={classes.bank}>
          {" "}
          <img src={moobifun} alt="" />
        </div>
        {/* <div className={classes.bank}>
          {" "}
          <img src={lottery} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default PartNext;
