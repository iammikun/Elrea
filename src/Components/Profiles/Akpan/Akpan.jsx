import React from "react";
import { Link } from "react-router-dom";
import classes from "./Akpan.module.css";
import edi from "../../../Asset/Images/edi.jpg";
import { FaLinkedinIn } from "react-icons/fa";

const Akpan = () => {
  window.scrollTo(0, 0);

  return (
    <div className={classes.akpan_Container}>
      <div className={classes.akpan_Wrapper}>
        <Link to="/team">Back</Link>
        <img src={edi} alt="" />
        <h1>Edifofon Akpan</h1>
        <h3>Head, Research and Development</h3>
        <p>
          Edifofon emerges as an accomplished administrator, well-versed in
          navigating diverse industries and sectors. With a foundational
          background as a Pharmacist and prior involvement as a researcher at
          NIPRD Abuja, he embodies a meticulous and methodical approach
          characterised by exceptional organisational skills and a penchant for
          efficiency. His versatile capabilities enable him to seamlessly juggle
          multiple tasks and proactively generate innovative ideas that can be
          seamlessly translated into practical applications.
        </p>
        <p>
          Edifofon's passion lies in designing, implementing, and enhancing
          intricate systems and processes. He thrives in managing specialised
          and ongoing organisational projects, employing his expertise to
          oversee the entire research cycle—from project establishment and
          design to meticulous data collection and analysis.
        </p>
        <p>
          Edifofon currently assumes the esteemed role of Head of Business and
          Administration at Elrae, where he exercises his adeptness in
          administrative, financial, and operational management. He spearheads
          the organisation's strategic organisational endeavours in this
          capacity, skillfully steering financial operations and optimising
          overall efficiency.
        </p>
        <a
          href="https://www.linkedin.com/in/edifofon/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.akpan_Link}
        >
          <FaLinkedinIn className={classes.media} />
        </a>
      </div>
    </div>
  );
};

export default Akpan;
