import React from "react";
import classes from "./Content.module.css";
import { FaFolder } from "react-icons/fa";
import left from "../../../Asset/Images/left.jpg";
import middle from "../../../Asset/Images/middle.jpg";
import right from "../../../Asset/Images/right.jpg";
import manan from "../../../Asset/Images/mananImg.jpg";
import tozee from "../../../Asset/Images/tozeeImg.jpg";
import hashir from "../../../Asset/Images/hashirImg.jpg";
import kaam from "../../../Asset/Images/kaamImg.jpg";
import iphone from "../../../Asset/Images/iphone.jpg";
import tableChair from "../../../Asset/Images/tableChair.jpg";
import book from "../../../Asset/Images/book.jpg";
import fourDots from "../../../Asset/Images/fourDots.jpg";
import mac from "../../../Asset/Images/mac.jpg";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className={classes.contentContainer}>
      <div className={classes.wrapper}>
        <div className={classes.imgContainer}>
          <div className={classes.first}>
            <img src={left} alt="" />
            <div className={classes.flex}>
              <p>
                <FaFolder /> {"  "}Photography
              </p>
              <p>March 22, 2020</p>
            </div>
            <h2>
              <a href="/">Seven Explanation On Why Finance Is Important</a>
            </h2>
          </div>
          <div className={classes.second}>
            <img src={middle} alt="" />
            <div className={classes.flex}>
              <p>
                <FaFolder /> {"  "}Humour
              </p>
              <p>March 22, 2020</p>
            </div>
            <h2>
              <a href="/">Most Effective ways To Overcome Finances Problem</a>
            </h2>
          </div>
          <div className={classes.third}>
            <img src={right} alt="" />
            <div className={classes.flex}>
              <p>
                <FaFolder /> {"  "}Photography
              </p>
              <p>March 22, 2020</p>
            </div>
            <h2>
              <a href="/">Never Underestimate The Influence Of Startup</a>
            </h2>
          </div>
        </div>
        <div className={classes.imgContainer}>
          <div className={classes.first}>
            <img src={manan} alt="" />
            <div className={classes.flex}>
              <p>
                <FaFolder /> {"  "}Humour
              </p>
              <p>March 22, 2020</p>
            </div>
            <h2>
              <a href="/">Five Reliable Sources To Learn About Startup</a>
            </h2>
          </div>
          <div className={classes.second}>
            <img src={tozee} alt="" />
            <div className={classes.flex}>
              <p>
                <FaFolder /> {"  "}Photography
              </p>
              <p>March 22, 2020</p>
            </div>
            <h2>
              <a href="/">
                Benefits Of Startup That May Change Your Perspective
              </a>
            </h2>
          </div>
          <div className={classes.third}>
            <img src={hashir} alt="" />
            <div className={classes.flex}>
              <p>
                <FaFolder /> {"  "}Humour
              </p>
              <p>March 22, 2020</p>
            </div>
            <h2>
              <a href="/">The Reason Why Everyone Loves Startup Company</a>
            </h2>
          </div>
        </div>
        <div className={classes.imgContainer}>
          <div className={classes.first}>
            <img src={kaam} alt="" />
            <div className={classes.flex}>
              <p>
                <FaFolder /> {"  "}Photography
              </p>
              <p>March 22, 2020</p>
            </div>
            <h2>
              <a href="/">The Story Of New Startup Has Just Gone Viral</a>
            </h2>
          </div>
          <div className={classes.second}>
            <img src={iphone} alt="" />
            <div className={classes.flex}>
              <p>
                <FaFolder /> {"  "}Photography
              </p>
              <p>March 22, 2020</p>
            </div>
            <h2>
              <a href="/">Most Effective ways To Overcome Finances Problem</a>
            </h2>
          </div>
          <div className={classes.third}>
            <img src={tableChair} alt="" />
            <div className={classes.flex}>
              <p>
                <FaFolder /> {"  "}Photography
              </p>
              <p>March 22, 2020</p>
            </div>
            <h2>
              <a href="/">Never Underestimate The Influence Of Startup</a>
            </h2>
          </div>
        </div>
        <div className={classes.imgContainer}>
          <div className={classes.first}>
            <img src={book} alt="" />
            <div className={classes.flex}>
              <p>
                <FaFolder /> {"  "}Photography
              </p>
              <p>March 22, 2020</p>
            </div>
            <h2>
              <a href="/">Five Reliable Sources To Learn About Startup</a>
            </h2>
          </div>
          <div className={classes.second}>
            <img src={fourDots} alt="" />
            <div className={classes.flex}>
              <p>
                <FaFolder /> {"  "}Photography
              </p>
              <p>March 22, 2020</p>
            </div>
            <h2>
              <a href="/">
                5 Benefits Of Startup That May Change Your Perspective
              </a>
            </h2>
          </div>
          <div className={classes.third}>
            <img src={mac} alt="" />
            <div className={classes.flex}>
              <p>
                <FaFolder /> {"  "}Photography
              </p>
              <p>March 22, 2020</p>
            </div>
            <h2>
              <a href="/">The Reason why Everyone Loves Startup</a>
            </h2>
          </div>
        </div>
        <Link to="/" className={classes.imgContainerBtn}>
          <button>Load More</button>
        </Link>
      </div>
    </div>
  );
};

export default Content;
