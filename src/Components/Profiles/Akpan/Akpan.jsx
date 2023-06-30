import React from "react";
import { Link } from "react-router-dom";
import classes from "./Akpan.module.css";

const Akpan = () => {
  return (
    <div className={classes.akpan_Container}>
      <div className={classes.akpan_Wrapper}>
        <Link to="/team">Back</Link>
        <h1>Edifofon Akpan</h1>
        <p>
          Edifofon is an experienced administrator in various industries and
          sectors. A Pharmacist by training and a former researcher with NIPRD
          Abuja, he is a highly detailed oriented, organised and efficient
          professional capable of multi-tasking and discovering new ideas which
          can be put into practice effectively.
        </p>
        <p>
          Edifofon is interested in designing, implementing and improving
          complex systems and processes; managing special or ongoing
          organisational projects; and the entire research cycle, including
          set-up and design of projects, data collection and analysis.{" "}
        </p>
        <p>
          He is currently the Head of Business and Administration for Elrae,
          where he is responsible for the organisation's administrative,
          financial and operations management.
        </p>
      </div>
    </div>
  );
};

export default Akpan;
