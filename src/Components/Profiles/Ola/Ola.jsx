import React from "react";
import { Link } from "react-router-dom";
import classes from "./Ola.module.css";
import baba from "../../../Asset/Images/baba.jpg";
import { FaLinkedinIn } from "react-icons/fa";

const Ola = () => {
  window.scrollTo(0, 0);

  return (
    <div className={classes.ola_Container}>
      <div className={classes.ola_Wrapper}>
        <Link to="/team">Back</Link>
        <img src={baba} alt="" />
        <h1>Olaniyan Babayemi Olawole</h1>
        <h3>Chief Legal Officer</h3>
        <p>
          Olaniyan Babayemi Olawole assumes the esteemed position of Chief Legal
          Officer and Company Secretary at Elrae Technologies Limited,
          showcasing his profound expertise as a seasoned legal practitioner
          with a rich repertoire of experiences in both the public and private
          sectors. Notably, he gained invaluable exposure during his internship
          with Professor Yemi Akinseye-George SAN & Co., an esteemed legal firm
          of high repute.
        </p>
        <p>
          Yemi's professional affiliations encompass membership in prestigious
          organizations such as the Nigeria Bar Association (NBA), the Chartered
          Institute of Arbitrators UK, the Institute of Chartered Mediators and
          Conciliators, and the Chartered Secretaries and Administrators of
          Nigeria. This extensive network further amplifies his prowess and
          dedication within the legal field.
        </p>
        <p>
          Distinguished by his enthusiasm, Yemi embodies a remarkable capacity
          for swift learning and proactive engagement. He brings forth a wealth
          of intellectual acuity, employing sound, logical, and constructive
          thinking in all aspects of his legal practice. His repertoire
          encompasses a multitude of cases, both domestic and international,
          adeptly handling disputes and conflict resolution while excelling in
          written and verbal communication.
        </p>
        <p>
          In addition to his role at Elrae Technologies, Olaniyan serves as the
          principal partner of Lehi Attorneys, further emphasizing his
          dedication to delivering exceptional legal services. Furthermore, he
          proudly holds the status of an alumnus of the renowned University of
          Jos, solidifying his commitment to continuous learning and
          professional development.
        </p>
        <a
          href="https://www.linkedin.com/in/babayemi-olaniyan-ll-m-abr-aciarb-uk-acis-aicmc-a7739112b/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.ola_Link}
        >
          <FaLinkedinIn className={classes.media} />
        </a>
      </div>
    </div>
  );
};

export default Ola;
