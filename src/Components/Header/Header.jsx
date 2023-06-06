import React from "react";
import Nav from "../HomeSection/Nav/Nav";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.headerContainer}>
        <Link to="/">Moiz</Link>
        <Nav />
        <div className={classes.toggler}>
          <GiHamburgerMenu className={classes.btn} />
        </div>
      </div>
    </div>
  );
};

export default Header;
