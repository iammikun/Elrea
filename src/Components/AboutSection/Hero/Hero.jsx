import React from "react";
import classes from "./Hero.module.css";
import { FaQuoteLeft } from "react-icons/fa";

const Hero = () => {
  return (
    <div className={classes.aboutContainer}>
      <div className={classes.wrapper}>
        <div className={classes.aboutText}>
          <h1>
            We leverage technology to bring ideas into reality by creating
            scalable solutions that positively affect our world.
          </h1>
          <p>
            Elrae Technologies, a Limited Liability Company with the Corporate
            Affairs Commission in Nigeria, was created for enterprise solutions,
            technology, entertainment development and consultancy.
          </p>
          <p>
            We are a high-end creative firm with a reputation for integrity,
            high-end ethical standards and excellence in management.
          </p>
        </div>
        <div className={classes.aboutBlue}>
          <div className={classes.board}>
            <FaQuoteLeft className={classes.quote} />
            <p>
              You owe it to yourself to be patient and to have grit. These two
              qualities will help you achieve your goals and live a fulfilling
              life.
            </p>
            <h5>- Ayeni Timilehin Franklin - CEO, Elrae Technologies</h5>
          </div>
          {/* ::after */}
        </div>
      </div>
      <div className={classes.aboutImg}>.</div>
    </div>
  );
};

export default Hero;
