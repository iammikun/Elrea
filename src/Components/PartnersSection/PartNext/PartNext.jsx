import React from "react";
import classes from "./PartNext.module.css";
import lefttop from "../../../Asset/Images/lefttop.png";
import middleTop from "../../../Asset/Images/middleTop.png";
import rightTop from "../../../Asset/Images/rightTop.png";
import leftBottom from "../../../Asset/Images/leftBottom.png";
import middleBottom from "../../../Asset/Images/middleBottom.png";
import rightBottom from "../../../Asset/Images/rightBottom.png";

const PartNext = () => {
  return (
    <div className={classes.container}>
      <div className={classes.partContent}>
        <div className={classes.invest}>
          <img src={lefttop} alt="" />
          <h4>Investment Partner</h4>
          <p>
            Aptent taciti sociosqu ad litora torquent per con ubia nos inceptos
            himenaeos. Pellentesque eget scelerisque turpis et consequat enim
            uisque at.
          </p>
        </div>
        <div className={classes.bank}>
          {" "}
          <img src={middleTop} alt="" />
          <h4>Bank Partner</h4>
          <p>
            Aptent taciti sociosqu ad litora torquent per con ubia nos inceptos
            himenaeos. Pellentesque eget scelerisque turpis et consequat enim
            uisque at.
          </p>
        </div>
        <div className={classes.const}>
          {" "}
          <img src={rightTop} alt="" />
          <h4>Construction Partner</h4>
          <p>
            Aptent taciti sociosqu ad litora torquent per con ubia nos inceptos
            himenaeos. Pellentesque eget scelerisque turpis et consequat enim
            uisque at.
          </p>
        </div>
      </div>
      <div className={classes.partContentTwo}>
        <div className={classes.const}>
          <img src={leftBottom} alt="" />
          <h4>Construction Partner</h4>
          <p>
            Aptent taciti sociosqu ad litora torquent per con ubia nos inceptos
            himenaeos. Pellentesque eget scelerisque turpis et consequat enim
            uisque at.
          </p>
        </div>
        <div className={classes.bank}>
          {" "}
          <img src={middleBottom} alt="" />
          <h4>Construction Partner</h4>
          <p>
            Aptent taciti sociosqu ad litora torquent per con ubia nos inceptos
            himenaeos. Pellentesque eget scelerisque turpis et consequat enim
            uisque at.
          </p>
        </div>
        <div className={classes.const}>
          {" "}
          <img src={rightBottom} alt="" />
          <h4>Construction Partner</h4>
          <p>
            Aptent taciti sociosqu ad litora torquent per con ubia nos inceptos
            himenaeos. Pellentesque eget scelerisque turpis et consequat enim
            uisque at.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartNext;
