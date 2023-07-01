import React from "react";
import classes from "./Blog.module.css";
import newsOne from "../../../Asset/Images/newsOne.jpg";
import newsTwo from "../../../Asset/Images/newTwo.webp";
import newsThree from "../../../Asset/Images/newsThree.jpg";

const Blog = () => {
  return (
    <div className={classes.blog_Container}>
      <div className={classes.blog_Wrapper}>
        <h2>Elrae in the News</h2>
      </div>
      <div className={classes.news_Container}>
        <a
          href="https://guardian.ng/business-services/business/nlrc-elrae-technologies-to-establish-nigerian-national-game/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.news_Page}
        >
          <img src={newsOne} alt="" />
          <div className={classes.news_Board}>
            <span>Guardian</span>
            <a
              href="https://guardian.ng/business-services/business/nlrc-elrae-technologies-to-establish-nigerian-national-game/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NLRC, Elrae Technologies to establish Nigerian National Game
            </a>
          </div>
        </a>
        <a
          href="https://businessday.ng/news/article/national-lottery-game-will-generate-employment-for-youths-create-wealth-fg/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.news_Page}
        >
          <img src={newsTwo} alt="" />
          <div className={classes.news_Board}>
            <span>Business Day</span>
            <a
              href="https://businessday.ng/news/article/national-lottery-game-will-generate-employment-for-youths-create-wealth-fg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              National Lottery Game will generate employment for youths, create
              wealth – FG{" "}
            </a>
          </div>
        </a>
        <a
          href="https://businessday.ng/news/article/national-lottery-game-will-generate-employment-for-youths-create-wealth-fg/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.news_Page}
        >
          <img src={newsThree} alt="" />
          <div className={classes.news_Board}>
            <span>Independent</span>
            <a
              href="https://independent.ng/gbajabiamila-elrae-technologies-visit-ghana-over-plans-to-establish-nigerian-national-game/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gbajabiamila, Elrae Technologies Visit Ghana Over Plans To
              Establish Nigerian National Game{" "}
            </a>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Blog;
