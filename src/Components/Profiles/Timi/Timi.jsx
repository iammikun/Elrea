import React from "react";
import { Link } from "react-router-dom";
import classes from "./Timi.module.css";
import timi from "../../../Asset/Images/timi.jpg";
import { FaLinkedinIn } from "react-icons/fa";

const Timi = () => {
  window.scrollTo(0, 0);

  return (
    <div className={classes.timi_Container}>
      <div className={classes.timi_Wrapper}>
        <Link to="/team">Back</Link>
        <img src={timi} alt="" />

        <h1>Ayeni Timilehin Franklin</h1>
        <h3>MD/CEO</h3>
        <p>
          Timilehin, a prominent figure esteemed as the President and Co-Founder
          of Elrae Technologies Limited, oversees a notable establishment at the
          intersection of technology and enterprise solutions in Nigeria. With a
          multifaceted and enigmatic nature, Timilehin has played a pivotal role
          in orchestrating a series of ventures that push the boundaries of
          technology and media content creation.
        </p>
        <p>
          Having attained a degree in Economics from the prestigious University
          of Jos, Timilehin's professional trajectory has traversed the realms
          of finance, media, and technology as a seasoned expert in business
          development. During this period, a profound realization of his
          inherent entrepreneurial spirit and creative prowess took hold,
          compelling him to embark on a transformative journey as a visionary
          creator.
        </p>
        <p>
          In 2014, Timi embarked on his initial steps into the world of business
          by establishing the Elrae Company. This venture subsequently underwent
          a metamorphosis, ultimately emerging as the formidable entity known
          today as Elrae Technologies Limited. Throughout its eventful
          existence, Elrae has adeptly navigated a diverse range of
          technological and sports-related projects, catalyzing groundbreaking
          endeavours such as The Naija Football Fans Challenge Show, The EasyHub
          portal (a pioneering USSD payment platform), Bizstreet, and numerous
          other ventures that embody innovation and forward-thinking.
        </p>
        <a
          href="https://www.linkedin.com/in/ayeni-timilehin-franklin/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.timi_Link}
        >
          <FaLinkedinIn className={classes.media} />
        </a>
      </div>
    </div>
  );
};

export default Timi;
