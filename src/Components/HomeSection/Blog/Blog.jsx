import React from "react";
import classes from "./Blog.module.css";
import left from "../../../Asset/Images/left.jpg";
import middle from "../../../Asset/Images/middle.jpg";
import right from "../../../Asset/Images/right.jpg";
import { FaFolder } from "react-icons/fa";

const Blog = () => {
  return (
    <div className={classes.blogContainer}>
      <div className={classes.blogContent}>
        <h2>Blog</h2>
        <div className={classes.blogWrapper}>
          <div className={classes.left}>
            <img src={left} alt="" />
            <div className={classes.border}>
              <p className={classes.a}>
                {" "}
                <FaFolder /> {"  "}Photography
              </p>
              <h2>
                <a href="/">How to write better briefs for design project</a>
              </h2>
              <p>
                Quisque sollicitudin lacinia sapien, eu tincidunt nunc accumsan
                laoreet. Curabitur feugiat posuere odio nec tincidunt.
              </p>
            </div>
          </div>
          <div className={classes.middle}>
            <img src={middle} alt="" />
            <div className={classes.border}>
              <p className={classes.a}>
                <FaFolder /> Humour
              </p>
              <h2>
                <a href="/">How to write better briefs for design project</a>
              </h2>
              <p>
                Quisque sollicitudin lacinia sapien, eu tincidunt nunc accumsan
                laoreet. Curabitur feugiat posuere odio nec tincidunt.
              </p>
            </div>
          </div>
          <div className={classes.right}>
            <img src={right} alt="" />
            <div className={classes.border}>
              <p className={classes.a}>
                {" "}
                <FaFolder /> Photography
              </p>
              <h2>
                <a href="/">How to write better briefs for design project</a>
              </h2>
              <p>
                Quisque sollicitudin lacinia sapien, eu tincidunt nunc accumsan
                laoreet. Curabitur feugiat posuere odio nec tincidunt.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className={classes.btn}>
        <a href="/">More posts</a>
      </button>
    </div>
  );
};

export default Blog;
