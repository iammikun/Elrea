import React from "react";
import classes from "./Vision.module.css";
import vision from "../../../Asset/Images/vision.jpg";

const Vision = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <h2>Vision</h2>
          <p className={classes.lead}>
            Nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. vero eos et accusam et justo duo dolores et
            ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consetetur no
            sea takimata.
          </p>
          <p>
            Nunc quis dui tincidunt, rutrum orci vitae, porttitor lectus. Nullam
            tellus justo, euismod quis elit sed, imperdiet aliquam purus. Morbi
            id lorem orci. Aenean eleifend lorem diam, in maximus lacus finibus
            at. Aliquam vestibulum arcu in orci fringilla mattis.
          </p>
          <p>
            Nam pulvinar sapien pulvinar, laoreet sem eu, blandit magna. Duis
            finibus diam, eget efficitur massa vehicula quis. Nullam vestibulum
            ante ipsum primis in faucibus orci luctus et massa vehicula quis
            ultrices posuere cubilia curae.
          </p>
        </div>
        <div className={classes.imgBox}>
          <div className={classes.borderLeft}>
            <img src={vision} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
