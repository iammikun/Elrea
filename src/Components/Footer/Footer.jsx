import React from "react";
import classes from "./Footer.module.css";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <div className={classes.footerContent}>
        <div className={classes.sectOne}>
          <h4>25/26 victoria ironsi crescent, 41 crescent, Gwarinpa. Abuja</h4>
          <h4>
            +2348155288800{" "}
            <a
              href="mailto:info@elraetechnologies.com"
              className={classes.trans}
            >
              info@elraetechnologies.com
            </a>
          </h4>
          <div className={classes.socials}>
            <a
              href="https://www.linkedin.com/company/elrae-technologies-limited"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className={classes.media} />
            </a>
          </div>
        </div>
        <nav className={classes.navContainer}>
          <ul className={classes.navUl}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/partners">Partners</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        {/* <div className={classes.secondWrap}>
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
        </div> */}
      </div>
      <hr />
      {/* <div className={classes.finale}>
        <p>© 2020 Energetic Themes</p>
        <ul>
          <li>
            <a href="/">Privacy policy</a>
          </li>
          <li>
            <a href="/">Terms & Conditions</a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Footer;
