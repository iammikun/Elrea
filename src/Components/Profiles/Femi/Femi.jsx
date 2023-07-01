import React from "react";
import classes from "./Femi.module.css";
import { Link } from "react-router-dom";
import fifthImg from "../../../Asset/Images/fifthImg.jpg";

const Femi = () => {
  return (
    <div className={classes.femi_Container}>
      <div className={classes.femi_Wrapper}>
        <Link to="/team">Back</Link>
        <img src={fifthImg} alt="" />
        <h1>Femi Aje</h1>
        <h3>Head, System and Technology Development.</h3>
        <p>
          Femi Aje obtained a B. A (Hons) degree in Business Studies -
          Specializing in Corporate Finance in 2003 from London Guildhall
          University, now London Metropolitan University in the UK.{" "}
        </p>
        <p>
          Before joining Trustfund Pensions Limited in 2010, Femi commenced his
          working career with Energy Saving Trust in 2005, where he was a
          programme assistant in charge of managing a budget of $13m annually.
        </p>
        <p>
          Since joining Trustfund Pensions Limited., He worked in the Corporate
          Planning & Strategy Departments before his current stay in the
          Investment Department. He has attended executive training, both local
          and international.
        </p>
      </div>
    </div>
  );
};

export default Femi;
