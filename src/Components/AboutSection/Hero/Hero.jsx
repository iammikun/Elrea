import React from "react";
import classes from "./Hero.module.css";
import { FaQuoteLeft } from "react-icons/fa";

const Hero = () => {
  return (
    <div className={classes.aboutContainer}>
      <div className={classes.wrapper}>
        <div className={classes.aboutText}>
          <h4>Creative Agency</h4>
          <h1>
            We use digital solutions to help make your grow business and profit
            line.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum
          </p>
          <p>
            Etiam faucibus eu arcu ac vehicula. Phasellus vehicula orci sed
            volutpat molestie. Aliquam sodales elit id neque gravida porta.
            Phasellus non magna dolor. Denean id metus id ligula laoreet
            fermentum blandit sit amet urna. Aliquam placerat pretium justo ac
            dictum. Duis id metus id ligula pellentesque condimentum enim id
            rutrum.
          </p>
        </div>
        <div className={classes.aboutBlue}>
          <div className={classes.board}>
            <FaQuoteLeft className={classes.quote} />
            <p>
              Adipisci qui natus expedita aut eum aut. Et ut repellendus ea quis
              autem reprehenderit volu ptatem. Amet totam dolor is voluptates a
              tenetur sit. Qui asperiores excepturi perspiciatis totam rerum
              volup tatem et neque pariatur. Fugiat qui illum sequi ea qui. Iure
              eos fugit.
            </p>
            <h5>Michael D. Wilson - CEO of New City</h5>
          </div>
          {/* ::after */}
        </div>
      </div>
      <div className={classes.aboutImg}>.</div>
    </div>
  );
};

export default Hero;
