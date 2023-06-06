import React from "react";
import Nav from "../HomeSection/Nav/Nav";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.headerContainer}>
        <a href="/">Moiz</a>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
