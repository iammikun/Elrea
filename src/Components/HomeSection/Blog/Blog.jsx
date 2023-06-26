import React from "react";
import classes from "./Blog.module.css";
import newsOne from "../../../Asset/Images/newsOne.jpg";
import newsTwo from "../../../Asset/Images/newTwo.jpg";
import newsThree from "../../../Asset/Images/newThree.jpg";

const Blog = () => {
  return (
    <div className={classes.blog_Container}>
      <div className={classes.blog_Wrapper}>
        <h2>Blog</h2>
      </div>
      <div className={classes.news_Container}>
        <div className={classes.news_Page}>
          <img src={newsOne} alt="" />
          <div className={classes.news_Board}>
            <span>Photography</span>
            <a href="/">How to write better briefs for design projects</a>
            <p>
              Quisque sollicitudin lacinia sapien, eu tincidunt nunc accumsan
              laoreet. Curabitur feugiat posuere odio nec tincidunt.
            </p>
          </div>
        </div>
        <div className={classes.news_Page}>
          <img src={newsTwo} alt="" />
          <div className={classes.news_Board}>
            <span>Photography</span>
            <a href="/">How to write better briefs for design projects</a>
            <p>
              Quisque sollicitudin lacinia sapien, eu tincidunt nunc accumsan
              laoreet. Curabitur feugiat posuere odio nec tincidunt.
            </p>
          </div>
        </div>
        <div className={classes.news_Page}>
          <img src={newsThree} alt="" />
          <div className={classes.news_Board}>
            <span>Photography</span>
            <a href="/">How to write better briefs for design projects</a>
            <p>
              Quisque sollicitudin lacinia sapien, eu tincidunt nunc accumsan
              laoreet. Curabitur feugiat posuere odio nec tincidunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
