import React from "react";
import { Link } from "react-router-dom";
import classes from "./Ben.module.css";
import { FaLinkedinIn } from "react-icons/fa";
import benji from "../../../Asset/Images/benji.jpg";

const Ben = () => {
  window.scrollTo(0, 0);

  return (
    <div className={classes.ben_Container}>
      <div className={classes.ben_Wrapper}>
        <Link to="/team">Back</Link>
        <img src={benji} alt="" />
        <h1>Benjamin Eliye</h1>
        <h3>Director/CFO</h3>
        <p>
          Benjamin Eliye is one of the esteemed co-founders of Elrae
          Technologies Limited, a prominent figure known by the epithet "Ben."
          He possesses a remarkable inclination towards precision, exemplifying
          an unwavering dedication to meticulousness and displaying adeptness in
          the art of troubleshooting. Since the inception of Elrae, he has
          spearheaded numerous pioneering initiatives while assuming a
          supervisory role in the execution of the majority of the company's
          projects.
        </p>
        <p>
          Armed with a prestigious degree in Economics from the distinguished
          University of Maiduguri and adorned with the esteemed title of a
          chartered accountant bestowed upon him by the Institute of Chartered
          Accountants of Nigeria, Ben is a seasoned financial analyst. Before
          his pivotal contribution to the establishment of Elrae, he acquired
          valuable professional experience at renowned institutions such as
          Standard Chartered Bank, Stanton Limited, Panic Alarm Security
          Systems, and Petra Digital Press Limited, where he held the esteemed
          position of Head of Finance.
        </p>
        <p>
          In addition to serving as the Vice President within the organization,
          Ben also shoulders the responsibility of Chief Financial Officer. His
          diverse and extensive background empowers him to meticulously
          scrutinize and interpret information, leading to the implementation of
          practical solutions that significantly enhance
          organizational productivity.
        </p>
        <a
          href="https://www.linkedin.com/in/benjamin-eliye/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.ben_Link}
        >
          <FaLinkedinIn className={classes.media} />
        </a>
      </div>
    </div>
  );
};

export default Ben;
