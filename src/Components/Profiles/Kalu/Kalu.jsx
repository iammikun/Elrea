import React from "react";
import classes from "./Kalu.module.css";
import { Link } from "react-router-dom";
import kalu from "../../../Asset/Images/kalu.jpg";
import { FaLinkedinIn } from "react-icons/fa";

const Kalu = () => {
  return (
    <div className={classes.kalu_Container}>
      <div className={classes.kalu_Wrapper}>
        <Link to="/team">Back</Link>
        <img src={kalu} alt="" />
        <h1>Dimgba Kalu</h1>
        <h3>Head, System and Technology Development.</h3>
        <p>
          Dimgba Kalu assumes the distinguished position of Head of IT at Elrae
          Technologies Ltd, demonstrating his profound expertise in information
          technology. His career trajectory boasts remarkable milestones,
          including his tenure as a technology fellow and software engineer at
          the Institute of Journalism in Washington, DC, where he spearheaded
          the development and implementation of an investigative journalism
          system of unparalleled sophistication.
        </p>
        <p>
          Simultaneously, Dimgba leverages his exceptional talents as a
          consultant for Ercas Integrated Solutions, where he oversees the
          design and execution of cutting-edge financial technology solutions
          aimed at optimizing the Internal Generated Revenue (IGR) systems of
          various states, including Kebbi and Bauchi, handling the staggering
          volume of transactions daily.
        </p>
        <p>
          Dimgba's professional journey encompasses prestigious roles, notably
          as an Innovation Fellow of HalaNigeria/Code4Africa and as an
          Ambassador of Hack4Good—a transformative social initiative uniting
          designers and developers in creating applications to combat climate
          change. Presently, he serves as a country ambassador for
          AfricaCodeWeek, further showcasing his dedication to fostering
          technological literacy and empowerment across the African continent.
        </p>
        <p>
          An astute internet and technology entrepreneur, Dimgba possesses an
          insatiable passion for coding and a profound interest in back-end
          development, mobile technology, startups, and technology-driven
          solutions for development. Armed with a degree in Computer Science, he
          exhibits exceptional proficiency in diverse technologies and
          programming languages, including Python, PHP, JavaScript, MySQL,
          HTML5, and CSS.
        </p>
        <p>
          Dimgba's accomplishments extend beyond his professional endeavours. As
          a World Economic Forum Global Shapers community member, he actively
          contributes to shaping the global dialogue on pressing issues.
          Additionally, he proudly receives the World Summit-Mobile Award in the
          e-learning category, solidifying his position as a visionary leader at
          the forefront of innovation.
        </p>
        <p>
          Driven by an unwavering commitment to capacity building, Dimgba
          embodies a genuine desire to empower individuals and communities
          through technical education and skills development. His tireless
          dedication to this noble cause permeates every facet of his
          remarkable career.
        </p>
        <a
          href="https://www.linkedin.com/in/dkdimgba/"
          className={classes.kalu_Link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className={classes.media} />
        </a>
      </div>
    </div>
  );
};

export default Kalu;
