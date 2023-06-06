import React from "react";
import classes from "./Form.module.css";

const Form = () => {
  return (
    <div className={classes.container}>
      <div className={classes.contAdd}>
        <form action="" className={classes.contactForm}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <a href="/">
            <button type="submit">Submit</button>
          </a>
        </form>
        <div className={classes.right}>
          <div className={classes.rightContent}>
            <h4>Amsterdam</h4>
            <p>
              3rd floor 66 queen street <br /> brook vale nsw 2100
            </p>
            <p className={classes.secondPee}>
              amsterdam@email.com​ <br />
              +51853 458 243
            </p>
            <h4 className={classes.second}>New York</h4>
            <p>
              1st floor 73 wallis street <br /> tamarama nsw 2026
            </p>
            <p className={classes.secondPee}>
              newyork@email.com​ <br /> +51853 458 243
            </p>
          </div>
          <div className={classes.chiRight}>
            <h4>Chicago</h4>
            <p>4th floor 3918 randall drive moanalua, hi 96819</p>
            <p className={classes.secondPee}>
              chicago@email.com​ +51853 458 243
            </p>
            <h4 className={classes.second}>Singapore</h4>
            <p>1st floor 66 king street brook vale sp 103</p>
            <p className={classes.secondPee}>
              singapore@email.com​ +51853 458 243
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
