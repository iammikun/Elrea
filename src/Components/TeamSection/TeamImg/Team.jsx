import React from "react";
import classes from "./TeamImg.module.css";
import firstImg from "../../../Asset/Images/firstImg.jpg";
import secondImg from "../../../Asset/Images/secondImg.jpg";
import thirdImg from "../../../Asset/Images/thirdImg.jpg";
import fourthImg from "../../../Asset/Images/fourthImg.jpg";
import fifthImg from "../../../Asset/Images/fifthImg.jpg";
import sixthImg from "../../../Asset/Images/sixthImg.jpg";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Team = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.flexOne}>
          <div>
            <img src={firstImg} alt="" />
            <div className={classes.imgWrapper}>
              <h5>Reda McClain</h5>
              <span>founder and chairman</span>
              <p>
                Quisque sollicitudin lacinia sapien, eu tincidunt nunc accumsan
                laoreet. Curabitur feugiat posuere odio nec tincidunt
              </p>
              <div className={classes.socials}>
                <a href="/">
                  <FaFacebookF className={classes.media} />
                </a>
                <a href="/">
                  <FaInstagram className={classes.media} />
                </a>
                <a href="/">
                  <FaTwitter className={classes.media} />
                </a>
              </div>
            </div>
          </div>
          <div>
            <img src={secondImg} alt="" />
            <div className={classes.imgWrapper}>
              <h5>Reda McClain</h5>
              <span>founder and chairman</span>
              <p>
                Quisque sollicitudin lacinia sapien, eu tincidunt nunc accumsan
                laoreet. Curabitur feugiat posuere odio nec tincidunt
              </p>
              <div className={classes.socials}>
                <a href="/">
                  <FaFacebookF className={classes.media} />
                </a>
                <a href="/">
                  <FaInstagram className={classes.media} />
                </a>
                <a href="/">
                  <FaTwitter className={classes.media} />
                </a>
              </div>
            </div>
          </div>
          <div>
            <img src={thirdImg} alt="" />
            <div className={classes.imgWrapper}>
              <h5>Reda McClain</h5>
              <span>founder and chairman</span>
              <p>
                Quisque sollicitudin lacinia sapien, eu tincidunt nunc accumsan
                laoreet. Curabitur feugiat posuere odio nec tincidunt
              </p>
              <div className={classes.socials}>
                <a href="/">
                  <FaFacebookF className={classes.media} />
                </a>
                <a href="/">
                  <FaInstagram className={classes.media} />
                </a>
                <a href="/">
                  <FaTwitter className={classes.media} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.flexOne}>
          <div>
            <img src={fourthImg} alt="" />
            <div className={classes.imgWrapper}>
              <h5>Reda McClain</h5>
              <span>founder and chairman</span>
              <p>
                Quisque sollicitudin lacinia sapien, eu tincidunt nunc accumsan
                laoreet. Curabitur feugiat posuere odio nec tincidunt
              </p>
              <div className={classes.socials}>
                <a href="/">
                  <FaFacebookF className={classes.media} />
                </a>
                <a href="/">
                  <FaInstagram className={classes.media} />
                </a>
                <a href="/">
                  <FaTwitter className={classes.media} />
                </a>
              </div>
            </div>
          </div>
          <div>
            <img src={fifthImg} alt="" />
            <div className={classes.imgWrapper}>
              <h5>Reda McClain</h5>
              <span>founder and chairman</span>
              <p>
                Quisque sollicitudin lacinia sapien, eu tincidunt nunc accumsan
                laoreet. Curabitur feugiat posuere odio nec tincidunt
              </p>
              <div className={classes.socials}>
                <a href="/">
                  <FaFacebookF className={classes.media} />
                </a>
                <a href="/">
                  <FaInstagram className={classes.media} />
                </a>
                <a href="/">
                  <FaTwitter className={classes.media} />
                </a>
              </div>
            </div>
          </div>
          <div>
            <img src={sixthImg} alt="" />
            <div className={classes.imgWrapper}>
              <h5>Reda McClain</h5>
              <span>founder and chairman</span>
              <p>
                Quisque sollicitudin lacinia sapien, eu tincidunt nunc accumsan
                laoreet. Curabitur feugiat posuere odio nec tincidunt
              </p>
              <div className={classes.socials}>
                <a href="/">
                  <FaFacebookF className={classes.media} />
                </a>
                <a href="/">
                  <FaInstagram className={classes.media} />
                </a>
                <a href="/">
                  <FaTwitter className={classes.media} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
