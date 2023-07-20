import React from "react";
import { Link } from "react-router-dom";
import classes from "./Olu.module.css";
import fati from "../../../Asset/Images/fati.jpg";
import { FaLinkedinIn } from "react-icons/fa";

const Olu = () => {
  window.scrollTo(0, 0);

  return (
    <div className={classes.olu_Container}>
      <div className={classes.olu_Wrapper}>
        <Link to="/team">Back</Link>
        <img src={fati} alt="" />
        <h1>Fatiregun Olubunmi</h1>
        <h3>Technical Consultant</h3>
        <p>
          Fatiregun Olubunmi assumes the role of Technical Consultant at Elrae
          Technologies Ltd, showcasing his vast expertise garnered through
          diverse projects within the telecommunications industry across Nigeria
          and several African countries, including South Africa, Ghana, Uganda,
          and Cameroon. Notably, he has adeptly integrated numerous services
          with prominent telecommunications operators such as MT, GLO, AIRTEL,
          and others, specializing in seamlessly deploying advanced
          functionalities like USSD, Premium SMS, and Voice services.
        </p>
        <p>
          Olubunmi's educational background is anchored by a degree in Computer
          Engineering, which serves as a strong foundation for his professional
          accomplishments. His commitment to continuous learning and
          professional development is evident through his acquisition of
          multiple esteemed certifications, including Certified Ethical Hacker
          (CEH), Oracle Certified Professional (OCP), Oracle Certified Associate
          (OCA), Oracle Certified Database SQL Expert (ODCE), and Information
          Technology Infrastructure Library (ITIL), among others.
        </p>
        <p>
          Renowned for his prowess as a Bills and Payment Systems Integration
          Expert, Olubunmi possesses unparalleled expertise in the design and
          implementation of crucial systems such as El, SS7, IVR, SMPP, SIP,
          VOIP, USSD, IN, and SIGTRAN (VAS). Moreover, he boasts extensive
          experience deploying streaming engines for video and audio content,
          further enhancing his versatility within the technological landscape.
          Additionally, his specialization extends to IVR scripting and SMPP,
          exemplifying his exceptional proficiency in these domains.
        </p>
        <p>
          Fatiregun Olubunmi's profound technical acumen, comprehensive
          experience, and diverse skill set position him as a consummate
          professional in telecommunications and technology. His contributions
          are instrumental in advancing the cutting-edge solutions and services
          offered by Elrae Technologies Ltd.
        </p>
        <a
          href="https://www.linkedin.com/in/olubunmi-fatiregun-mba-cciso-ceh-cnd-ocp-oca-odce-itil-0765a768/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.olu_Link}
        >
          <FaLinkedinIn className={classes.media} />
        </a>
      </div>
    </div>
  );
};

export default Olu;
