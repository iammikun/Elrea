import React from "react";
import { Link } from "react-router-dom";
import tunde from "../../../Asset/Images/tunde.jpg";
import classes from "./Tunde.module.css";
import { FaLinkedinIn } from "react-icons/fa";

const Tunde = () => {
  window.scrollTo(0, 0);

  return (
    <div className={classes.tunde_Container}>
      <div className={classes.tunde_Wrapper}>
        <Link to="/team">Back</Link>
        <img src={tunde} alt="" />
        <h1>Tunde Kelani</h1>
        <h3>Head, Business Development /Brand Management</h3>
        <p>
          Tunde Kelani emerges as an astute business strategist and a prominent
          team leader who has lent his expertise to prestigious private
          organisations such as Dangote Group, HP Nigeria, Nigeria Breweries,
          and various Federal Government Ministries and Agencies. Among his
          notable achievements is the successful and timely execution of project
          activities for the Niger Delta Amnesty training program in Ogun State,
          showcasing his exceptional project management capabilities.
        </p>
        <p>
          Central to Tunde's philosophy is a firm conviction that every
          individual possesses a profound and often overlooked reservoir of
          untapped potential. His approach seamlessly intertwines the sublime
          with the systematic, striking a delicate balance between fostering
          creativity and embracing change while emphasising solid foundations
          and effective implementation.
        </p>
        <p>
          Currently serving as the Head of Business Development/Brand Management
          at Elrae, Tunde plays a pivotal role in assisting the President in the
          formulation, communication, execution, and sustainability of strategic
          initiatives. Drawing from his wealth of experience, he skillfully
          develops comprehensive business development plans and devises and
          implements robust processes to support organisational growth.
        </p>
        <p>
          Tunde's educational background encompasses analytical reasoning,
          scientific investigation, and practical research, bolstering his
          ability to approach challenges with a methodical and insightful
          mindset. Furthermore, he is a distinguished graduate of the esteemed
          Daystar Leadership Academy, further attesting to his commitment to
          personal and professional development.
        </p>
        <a
          href="https://www.linkedin.com/in/tundekelani1/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.tunde_Link}
        >
          <FaLinkedinIn className={classes.media} />
        </a>
      </div>
    </div>
  );
};

export default Tunde;
