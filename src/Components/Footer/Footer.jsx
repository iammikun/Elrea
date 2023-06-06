import React from "react";
import classes from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <div className={classes.footerContent}>
        <div className={classes.firstWrap}>
          <div className={classes.sectOne}>
            <h4>123 main street ground floor 116 London UK</h4>
            <h4>+19 855 518 386 hello@moiz.com</h4>
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
          <div className={classes.sectTwo}>
            <h4>Information</h4>
            <li>
              <a href="/">Insights & Events</a>
            </li>
            <li>
              <a href="/">Certificates</a>
            </li>
            <li>
              <a href="/">Maintenance Instructions</a>
            </li>
            <li>
              <a href="/">Catalogues</a>
            </li>
          </div>
        </div>
        <div className={classes.secondWrap}>
          <div className={classes.sectThree}>
            <h4>About Us</h4>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">For Media</a>
            </li>
            <li>
              <a href="/">Investors Relations</a>
            </li>
            <li>
              <a href="/">Locations</a>
            </li>
          </div>
          <div className={classes.sectFour}>
            <h4>Solutions</h4>
            <li>
              <a href="/">Marketing</a>
            </li>
            <li>
              <a href="/">Branding</a>
            </li>
            <li>
              <a href="/">Design</a>
            </li>
            <li>
              <a href="/">Web Development</a>
            </li>
            <li>
              <a href="/">Concept Development</a>
            </li>
            <li>
              <a href="/">Web Development</a>
            </li>
          </div>
        </div>
      </div>
      <hr />
      <div className={classes.finale}>
        <p>© 2020 Energetic Themes</p>
        <ul>
          <li>
            <a href="/">Privacy policy</a>
          </li>
          <li>
            <a href="/">Terms & Conditions</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
