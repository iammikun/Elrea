import React from "react";
import classes from "./Femi.module.css";
import { Link } from "react-router-dom";
import fifthImg from "../../../Asset/Images/fifthImg.jpg";
import { FaLinkedinIn } from "react-icons/fa";

const Femi = () => {
  return (
    <div className={classes.femi_Container}>
      <div className={classes.femi_Wrapper}>
        <Link to="/team">Back</Link>
        <img src={fifthImg} alt="" />
        <h1>Femi Aje</h1>
        <h3>Head, System and Technology Development.</h3>
        <p>
          Femi Aje, a distinguished professional, acquired his esteemed B.A.
          (Hons) degree in Business Studies, specializing in Corporate Finance,
          in 2003 from London Guildhall University, now known as London
          Metropolitan University, in the United Kingdom.
        </p>
        <p>
          The trajectory of Femi's career began to unfold in 2005 when he
          embarked on his professional journey at Energy Saving Trust. During
          his tenure, he assumed the pivotal role of a program assistant,
          meticulously managing an annual budget of $13 million, showcasing his
          innate proficiency in financial oversight and resource management.
        </p>
        <p>
          In 2010, Femi embarked on a new chapter, joining Trustfund Pensions
          Limited, where he has left an indelible mark. His tenure at Trustfund
          has encompassed various significant roles, initially serving in the
          esteemed Corporate Planning & Strategy Departments before
          transitioning to his current position within the esteemed Investment
          Department.
        </p>
        <p>
          Throughout his professional journey, Femi has demonstrated an
          unwavering commitment to continuous improvement, actively
          participating in executive training programs of both local and
          international stature.
        </p>
        <p>
          Femi Aje's impressive educational background, diverse professional
          experiences, and commitment to honing his skills through executive
          training position him as a formidable force within
          business and finance.
        </p>
        <a
          href="https://www.linkedin.com/in/babayemi-olaniyan-ll-m-abr-aciarb-uk-acis-aicmc-a7739112b/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.femi_Link}
        >
          <FaLinkedinIn className={classes.media} />
        </a>
      </div>
    </div>
  );
};

export default Femi;
