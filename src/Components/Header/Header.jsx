import React from "react";
import Nav from "../HomeSection/Nav/Nav";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.headerContainer}>
        <Link to="/">Moiz</Link>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
