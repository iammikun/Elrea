import React from "react";
import classes from "./Mission.module.css";
import mision from "../../../Asset/Images/mision.jpg";

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
          <p>
            Nunc quis dui tincidunt, rutrum orci vitae, porttitor lectus. Nullam
            tellus justo, euismod quis elit sed, imperdiet aliquam purus. Morbi
            id lorem orci. Aenean eleifend lorem diam, in maximus lacus finibus
            at. Aliquam vestibulum arcu in orci fringilla mattis.
          </p>
          {/* <p>
            Nam pulvinar sapien pulvinar, laoreet sem eu, blandit magna. Duis
            finibus diam, eget efficitur massa vehicula quis. Nullam vestibulum
            ante ipsum primis in faucibus orci luctus et massa vehicula quis
            ultrices posuere cubilia curae.
          </p> */}
        </div>
        <div className={classes.imgBox}>
          <div className={classes.borderLeft}>
            <img src={mision} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
