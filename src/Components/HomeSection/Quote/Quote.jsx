import React from "react";
import classes from "./Quote.module.css";
import { FaQuoteLeft } from "react-icons/fa";
import timi from "../../../Asset/Images/timi.jpg";

const Quote = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <FaQuoteLeft className={classes.quote} />
          <p className={classes.lead}>
            You owe it to yourself to be patient and to have grit. These two
            qualities will help you achieve your goals and live a fulfilling
            life.
          </p>
          <h5>- Ayeni Timilehin Franklin - CEO, Elrae Technologies</h5>
        </div>
        <div className={classes.imgBox}>
          <div className={classes.borderLeft}>
            <img src={timi} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
