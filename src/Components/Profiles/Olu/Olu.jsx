import React from "react";
import { Link } from "react-router-dom";
import classes from "./Olu.module.css";

const Olu = () => {
  return (
    <div className={classes.olu_Container}>
      <div className={classes.olu_Wrapper}>
        <Link to="/team">Back</Link>
        <h1>Fatiregun Olubunmi</h1>
        <p>
          Fatiregun Olubunmi is the Technical Consultant for Elrae Technologies
          Ltd. He has worked on various projects in the telecommunications
          industry in Nigeria and other African Countries like South Africa,
          Ghana, Uganda and Cameroon. He has integrated many services with MT,
          GLO, AIRTEL and other Telco Operators. He specialises in service
          deployments like USSD, Premium SMS and Voice.
        </p>
        <p>
          Olubunmi has a degree in Computer Engineering. He also has
          professional certifications in many technology fields, some of which
          are Certified Ethical Hacker (CEH), Oracle Certified Professional
          (OCP), Oracle Certified Associate (OCA), Oracle Certified Database SQL
          Expert (ODCE), and Information Technology Infrastructure Library
          (ITIL).
        </p>
        <p>
          Olubunmi is a Bills and Payment Systems Integration Expert. He has
          expertise in the Design and Implementation of El, SS7, IVR, SMPP, SIP,
          VOIP, USSD, IN, and SIGTRAN (VAS). He also has years of experience in
          streaming engine deployment for Video and Audio Content. He is also an
          IVR scripting and SMPP specialist.
        </p>
      </div>
    </div>
  );
};

export default Olu;
