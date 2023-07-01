import React from "react";
import { Link } from "react-router-dom";
import classes from "./Ola.module.css";
import baba from "../../../Asset/Images/baba.jpg";

const Ola = () => {
  return (
    <div className={classes.ola_Container}>
      <div className={classes.ola_Wrapper}>
        <Link to="/team">Back</Link>
        <img src={baba} alt="" />
        <h1>Olaniyan Babayemi Olawole</h1>
        <h3>Chief Legal Officer</h3>
        <p>
          Olaniyan Babayemi Olawole is the Chief Legal Officer and Company
          Secretary of Elrae Technologies Limited. He is an experienced legal
          practitioner with garnered experiences spanning the public and private
          sectors, respectively. He interned with Professor Yemi Akinseye-George
          SAN & Co.
        </p>
        <p>
          Yemi is a member of the following professional bodies; Nigeria Bar
          Association (NBA), Chartered Institute of Arbitrators UK, Institute of
          Chartered Mediators and Conciliators and Chartered Secretaries and
          Administrators of Nigeria.
        </p>
        <p>
          Yemi is enthusiastic, a fast learner and proactive; he is a sound,
          logical and constructive thinker. Olaniyan has handled several cases
          both locally and abroad. He is skilful in dispute and conflict
          resolution and excellent in writing and verbal communication. He is an
          alumnus of the University of Jos. He is also the principal partner
          of Lehi Attorneys.
        </p>
      </div>
    </div>
  );
};

export default Ola;
