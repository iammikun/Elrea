import React from "react";
import classes from "./Services.module.css";
import { FaBullhorn, FaDesktop, FaRing, FaCogs } from "react-icons/fa";

const Services = () => {
  return (
    <div className={classes.serviceContainer}>
      <div className={classes.serviceText}>
        <h5>Our services</h5>
        <h3>We provide useful and beautiful solutions.</h3>
        <div className={classes.serviceFlex}>
          <div>
            <FaBullhorn className={classes.marketingIcon} />
            <h4>Gaming and Technology</h4>
            <p>
              We create dedicated state-of-the-art technology solutions and
              services to help lottery management handle games, risks, online
              players, and agents. From website and mobile app technologies to
              mobile USSD technologies.
            </p>
          </div>
          <div>
            <FaRing className={classes.brandIcon} />
            <h4>GovTech</h4>
            <p>
              We design, develop and deploy several innovative solutions to
              increase government sector productivity through the provision of
              automation and e-governance services projects geared towards
              facilitating Governance.
            </p>
          </div>
        </div>
        <div className={classes.serviceFlexSecond}>
          <div>
            <FaDesktop className={classes.webIcon} />
            <h4>Telecoms </h4>
            <p className={classes.fold}>
              We help telecommunication businesses use technology to improve how
              they communicate with customers and access the information they
              need anywhere and anytime, keep up with their market, and create
              resources and relationships that help them to stay competitive.
            </p>
          </div>
          <div>
            <FaCogs className={classes.devIcon} />
            <h4>Project Management </h4>
            <p className={classes.fold}>
              We help individuals, organisations and industries to deliver
              successful projects across diverse sectors. We deploy our
              strategic planning, risk management, and stakeholder engagement
              expertise to foster collaboration and achieve business objectives
              through efficient project execution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
