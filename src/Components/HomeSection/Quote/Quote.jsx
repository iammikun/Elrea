import React from "react";
import classes from "./Quote.module.css";
import { FaQuoteLeft } from "react-icons/fa";
import firstImg from "../../../Asset/Images/firstImg.jpg";

const Quote = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.board}>
          <FaQuoteLeft className={classes.quote} />
          <p>
            Adipisci qui natus expedita aut eum aut. Et ut repellendus ea quis
            autem reprehenderit volu ptatem. Amet totam dolor is voluptates a
            tenetur sit. Qui asperiores excepturi perspiciatis totam rerum volup
            tatem et neque pariatur. Fugiat qui illum sequi ea qui. Iure eos
            fugit.
          </p>
          <h5>Michael D. Wilson - CEO of New City</h5>
        </div>
        <div className={classes.quoteImg}>
          <img src={firstImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Quote;
