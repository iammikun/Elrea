import React from "react";
import { Link } from "react-router-dom";
import classes from "./Tunde.module.css";

const Tunde = () => {
  return (
    <div className={classes.tunde_Container}>
      <div className={classes.tunde_Wrapper}>
        <Link to="/team">Back</Link>
        <h1>Tunde Kelani</h1>
        <p>
          Tunde Kelani is an adroit business strategist and a team lead
          consulting for multiple top private organizations like Dangote Group,
          Hp Nigeria, Nigeria Breweries and public organizations like Federal
          Government Ministries and Agencies. One of his popular productions is
          the timely and effective implementation of project activities for the
          Niger Delta Amnesty training programme in Ogun State.
        </p>
        <p>
          One of Tunde's solid beliefs is that deep-seated within every person
          is a valuable ability for which less credence is given them."
        </p>
        <p>
          His method combines the sublime with the systematic, allowing ample
          chance at creativity and change, with a strong focus on foundation and
          implementation. He is currently the Head of Business Development/Brand
          Management for Elrae, where he is responsible for assisting the
          President with developing, communicating, executing, and sustaining
          strategic initiatives.{" "}
        </p>
        <p>
          His experience has allowed him to productively develop business
          development plans and design and implement processes to support
          business growth. Tunde, who has an academic background in Analytical
          reasoning, scientific investigation and Practical research, is also a
          graduate of Daystar Leadership Academy.
        </p>
      </div>
    </div>
  );
};

export default Tunde;
