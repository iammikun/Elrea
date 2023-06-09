import React from "react";
import classes from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={classes.navContainer}>
      <ul className={classes.navUl}>
        <li>
          <Link to="/">Home</Link>
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
        <Link to="/contact" className="navBtn">
          <button>Contact</button>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
