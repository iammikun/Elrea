import React, { useState } from "react";
import Nav from "../HomeSection/Nav/Nav";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [active, setActive] = useState(false);

  const closeMenu = () => {
    setActive(false);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.headerContainer}>
        <Link to="/" onClick={closeMenu}>
          Moiz
        </Link>
        <Nav />
        <div className={classes.toggler} onClick={() => setActive(!active)}>
          <GiHamburgerMenu className={classes.btn} />
        </div>
      </div>
      <nav className={active ? classes.activeMobileNav : classes.mobileNav}>
        <ul className={classes.navUl}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
            <hr className={classes.span} />
          </li>
          <li>
            <Link to="/portfolio" onClick={closeMenu}>
              Portfolio
            </Link>
            <hr className={classes.span} />
          </li>
          <li>
            <Link to="/team" onClick={closeMenu}>
              Team
            </Link>
            <hr className={classes.span} />
          </li>
          <li>
            <Link to="/partners" onClick={closeMenu}>
              Partners
            </Link>
            <hr className={classes.span} />
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About us
            </Link>
            <hr className={classes.span} />
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
