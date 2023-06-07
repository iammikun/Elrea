import React, { useState } from "react";
import Nav from "../HomeSection/Nav/Nav";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.wrapper}>
      <div className={classes.headerContainer}>
        <Link to="/">Moiz</Link>
        <Nav />
        <div className={classes.toggler}>
          <GiHamburgerMenu className={classes.btn} />
        </div>
      </div>
      <nav className={classes.mobileNav}>
        <ul className={classes.navUl}>
          <li>
            <Link to="/">Home</Link>
            <hr className={classes.span} />
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
            <hr className={classes.span} />
          </li>
          <li>
            <Link to="/team">Team</Link>
            <hr className={classes.span} />
          </li>
          <li>
            <Link to="/partners">Partners</Link>
            <hr className={classes.span} />
          </li>
          <li>
            <Link to="/about">About us</Link>
            <hr className={classes.span} />
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
