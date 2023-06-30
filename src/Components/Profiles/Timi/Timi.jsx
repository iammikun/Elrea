import React from "react";
import { Link } from "react-router-dom";
import classes from "./Timi.module.css";

const Timi = () => {
  return (
    <div className={classes.timi_Container}>
      <div className={classes.timi_Wrapper}>
        <Link to="/team">Back</Link>
        <h1>Ayeni Timilehin Franklin</h1>
        <p>
          Timlehin is the President and Co-Founder of Elrae Technologies
          Limited, a Technological and enterprise solution outfit based in
          Nigeria. Timilehin is a dynamic entrepreneur with several tech and
          media content creation projects.
        </p>
        <p>
          Timilehin, an Economist who graduated from the University of Jos, was
          an experienced business development expert with multiple organizations
          in Finance, media and technology before he decided to become an
          entrepreneur. He is, without a doubt, a creative and gifted
          entrepreneur.{" "}
        </p>
        <p>
          In 2014, Timi started the Elrae Company, which later metamorphosed
          into Elrae Technologies Limited. Since its inception, Elrae has
          handled several technological and sports projects, including The Naija
          Football Fans Challenge Show, The EasyHub portal (A USSD PAYMENT
          PLATFORM), and Bizstreet, amongst many other innovations.
        </p>
      </div>
    </div>
  );
};

export default Timi;
