import React from "react";
import { Link } from "react-router-dom";
import classes from "./Ben.module.css";
import benji from "../../../Asset/Images/benji.jpg";

const Ben = () => {
  return (
    <div className={classes.ben_Container}>
      <div className={classes.ben_Wrapper}>
        <Link to="/team">Back</Link>
        <img src={benji} alt="" />
        <h1>Benjamin Eliye</h1>
        <h3>Director/CFO</h3>
        <p>
          Benjamin Eliye co-founded Elrae Technologies Limited with Timilehin
          Ayeni. Ben, as he is fondly called, has exceptional skill for detail
          and is very finicky about organization and problem-solving. Ever since
          the inception of Elrae, he has pioneered several projects while
          overseeing the execution of most of Elrae's projects.
        </p>
        <p>
          Ben is a graduate of Economics from the University of Maiduguri and a
          Chartered Accountant with the Institute of Chartered Accountants of
          Nigeria. Ben is an experienced financial analyst.
        </p>
        <p>
          Before co-founding Elrae, he worked at Standard Chartered Bank,
          Stanton Limited, and Panic Alarm Security Systems, and he was once the
          Head of Finance for Petra Digital Press Limited. Ben also is the Chief
          Financial Officer for the organization; his experience has given him
          the ability to productively analyze, interpret information and
          implement solutions that will increase organizational productivity.
        </p>
      </div>
    </div>
  );
};

export default Ben;
