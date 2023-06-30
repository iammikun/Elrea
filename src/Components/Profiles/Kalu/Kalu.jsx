import React from "react";
import classes from "./Kalu.module.css";
import { Link } from "react-router-dom";

const Kalu = () => {
  return (
    <div className={classes.kalu_Container}>
      <div className={classes.kalu_Wrapper}>
        <Link to="/team">Back</Link>
        <h1>Dimgba Kalu</h1>
        <p>
          Dimgba Kalu is the head of IT at Elrae Technologies Ltd. He has worked
          as a technology fellow and software engineer for the Institute of
          Journalism, Washington, DC, where he developed and built a system for
          investigative journalism.
        </p>
        <p>
          He is also currently consulting for Ercas Integrated, Solutions,
          developing and supervising financial technology for the IGR of several
          states (Kebbi, Bauchietc), processing millions of transactions daily.
        </p>
        <p>
          Dimgba has served as an Innovation Fellow of HalaNigeria/Code4Africa
          and as an Ambassador of Hack4Good (A social initiative that brings
          designers and developers together to develop applications for climate
          change). He is currently a country ambassador for AfricaCodeWeek.
        </p>
        <p>
          He is an internet and technology entrepreneur; he loves to code,
          interested in Back-end development, mobile technology, startups and
          technology for development. He has a degree in Computer science and he
          technology for development. He has a Computer science degree and is
          proficient in technologies/languages like Python, PHP, Javascript,
          MySQL, HTML5 and CSS.
        </p>
        <p>
          Dimgba is a member of the World Economic Forum GlobalShaper and a
          winner of the World Summit—Mobile Award in the e-learning category.
          Dimgba is passionate about capacity building.
        </p>
      </div>
    </div>
  );
};

export default Kalu;
