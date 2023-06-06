import React from "react";
import classes from "./Services.module.css";
import {
  FaBullhorn,
  FaDesktop,
  FaRing,
  FaPalette,
  FaCogs,
  FaPuzzlePiece,
} from "react-icons/fa";

const Services = () => {
  return (
    <div className={classes.serviceContainer}>
      <div className={classes.serviceText}>
        <h5>Our services</h5>
        <h3>We do simple, useful and beautiful solutions.</h3>
        <div className={classes.serviceFlex}>
          <div>
            <FaBullhorn className={classes.marketingIcon} />
            <h4>Marketing</h4>
            <p>
              Praesent varius lorem mauris, varius interdum nisi consequat et.
              Aliquam vel mi a diam vestibulum ultrices eu vitae lectus. Morbi
              venenatis lacinia cursus. Nullam at purus tincidunt cursus.
            </p>
          </div>
          <div>
            <FaDesktop className={classes.webIcon} />
            <h4>Web Design</h4>
            <p>
              Praesent varius lorem mauris, varius interdum nisi consequat et.
              Aliquam vel mi a diam vestibulum ultrices eu vitae lectus. Morbi
              venenatis lacinia cursus. Nullam at purus tincidunt cursus.
            </p>
          </div>
          <div>
            <FaRing className={classes.brandIcon} />
            <h4>Branding</h4>
            <p>
              Praesent varius lorem mauris, varius interdum nisi consequat et.
              Aliquam vel mi a diam vestibulum ultrices eu vitae lectus. Morbi
              venenatis lacinia cursus. Nullam at purus tincidunt cursus.
            </p>
          </div>
        </div>
        <div className={classes.serviceFlexSecond}>
          <div>
            <FaPalette className={classes.designIcon} />
            <h4>Design</h4>
            <p>
              Praesent varius lorem mauris, varius interdum nisi consequat et.
              Aliquam vel mi a diam vestibulum ultrices eu vitae lectus. Morbi
              venenatis lacinia cursus. Nullam at purus tincidunt cursus.
            </p>
          </div>
          <div>
            <FaCogs className={classes.devIcon} />
            <h4>Web Development</h4>
            <p>
              Praesent varius lorem mauris, varius interdum nisi consequat et.
              Aliquam vel mi a diam vestibulum ultrices eu vitae lectus. Morbi
              venenatis lacinia cursus. Nullam at purus tincidunt cursus.
            </p>
          </div>
          <div>
            <FaPuzzlePiece className={classes.conIcon} />
            <h4>Concept Development</h4>
            <p>
              Praesent varius lorem mauris, varius interdum nisi consequat et.
              Aliquam vel mi a diam vestibulum ultrices eu vitae lectus. Morbi
              venenatis lacinia cursus. Nullam at purus tincidunt cursus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
