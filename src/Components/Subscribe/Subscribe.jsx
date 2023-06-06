import React from "react";
import classes from "./Subscribe.module.css";

const Subscribe = () => {
  return (
    <div className={classes.subscribeContainer}>
      <div className={classes.subscribeContent}>
        <div className={classes.subText}>
          <h2>Subscribe and keep up with the latest from Moiz</h2>
          <p>
            Maecenas ultricies, ligula id condimentum efficitur, orci diam
            tincidunt nisi, et mollis nisl dui ut risus. Nam neque magna, rutrum
            id sapien elementum, ornare pretium arcu. Suspendisse lacinia
            pharetra lobortis. Donec vitae eros ut velit lacinia aliquam sodales
            hendrerit.
          </p>
          <p className={classes.pee}>
            Phasellus ut urna eget justo consectetur at ante. Etiam ipsum neque,
            feugiat ut gravida non, imperdiet nec mi. Quisque vitae urna ut
            mauris laoreet ullamcorper quis sit amet tellus
          </p>
        </div>
        <form>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <p>
            Your email will be safely stored in our database. We respect your
            privacy. Signing up is quick and easy and you can unsubscribe
            instantly at any time by clicking the link in the footer of our
            emails.
          </p>
          <button className={classes.subBtn}>
            <a href="/">Subscribe</a>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
