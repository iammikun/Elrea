import React from "react";
import classes from "./Work.module.css";
import manan from "../../../Asset/Images/mananImg.jpg";
import tozee from "../../../Asset/Images/tozeeImg.jpg";
import hashir from "../../../Asset/Images/hashirImg.jpg";
import kaam from "../../../Asset/Images/kaamImg.jpg";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className={classes.workContainer}>
      <h2>Work</h2>
      <div className={classes.workSections}>
        <>
          <div className={classes.workLinks}>
            <img src={manan} alt="" />
            <a href="/">Manan</a>
            <a href="/" className={classes.mit}>
              Needed a completely new fresh branding to match with their new
              personality
            </a>
          </div>
        </>
        <>
          <div className={classes.workLinks}>
            <img src={tozee} alt="" />
            <a href="/">Tozee</a>
            <a href="/" className={classes.mit}>
              New fresh branding to match with their new personality
            </a>
          </div>
        </>
      </div>
      <div className={classes.workSectionsTwo}>
        <>
          <div className={classes.workLinks}>
            <img src={hashir} alt="" />
            <a href="/">Hashir</a>
            <a href="/" className={classes.mit}>
              Needed a completely new fresh branding to match with their new
              personality
            </a>
          </div>
        </>
        <>
          <div className={classes.workLinks}>
            <img src={kaam} alt="" />
            <a href="/">Kaam</a>
            <a href="/" className={classes.mit}>
              New fresh branding to match with their new personality
            </a>
          </div>
        </>
      </div>
      <Link to="/portfolio" className={classes.btn}>
        <button>See All projects</button>
      </Link>
    </div>
  );
};

export default Work;
