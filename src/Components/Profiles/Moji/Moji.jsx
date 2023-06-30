import React from "react";
import classes from "./Moji.module.css";
import { Link } from "react-router-dom";

const moji_profile = () => {
  return (
    <div className={classes.moji_Container}>
      <div className={classes.moji_Wrapper}>
        <Link to="/team">Back</Link>
        <h1>Mojisola Olateru-Olagbegi</h1>
        <p>
          Mojisola Olateru-Olagbegi is an Information Technology and Project
          Management professional with extensive experience in the ICT industry,
          having worked in various industries in Nigeria, the United States and
          Canada. With her engineering background and over twenty-seven years of
          industry experience, Moji has a proven track record in developing and
          managing programmes and projects, particularly in the ICT sector.{" "}
        </p>
        <p>
          She is the co-founder and Partner, Technology and Entrepreneurship at
          The Workplace Centre, Director of Asherlogic Ltd and Chairman of Elrae
          Technologies Ltd. She started her career as a Technical Support and
          Network Engineer at DPMS Nigeria and later became the IT Manager at
          Costain West Africa. Moji's roles in North America included being an
          independent consultant as a Microsoft Certified Systems Engineer
          (MCSE), a Certified Information Systems Auditor (CISA), a Senior
          Technical Specialist at Dow Chemical, Project Manager/Methodology
          specialist at General Motors and Web Applications Project Manager at
          Chrysler. She is also well-versed in ICT Risk Management, Governance,
          Business Process Re-Engineering and E-Government.
        </p>
        <p>
          Mojisola as a consultant to the Federal Ministry of Communication
          Technology, led various initiatives, including the design and
          development of the E-Government and ICT Professional Cadre Structures
          and a Capacity Building Curriculum for ICT professionals in
          Government. She was also the National Consultant for the World Bank
          Nigerian Microwork project (NaijaCloud) and the Rockefeller Foundation
          Digital jobs initiative and consulting for some State Governments.
        </p>
        <p>
          Mojisola is committed to developing African and disadvantaged youth,
          particularly in the technology space and is the Chairman of The
          Workplace Youth Initiatives, a Non-Profit organisation dedicated to
          youth skills development and job creation. She is also a director of
          STEMACT Initiatives in Michigan. This non-profit organisation promotes
          STEM (Science, Technology, Engineering & Mathematics) and Creative
          Technologies education & initiatives amongst disadvantaged youth.{" "}
        </p>
        <p>
          She currently volunteers for the Nigerian Economic Summit Group (NESG)
          as the Science and Technology Policy Commission consultant. Moji holds
          a Ph. D. in Strategy, Project and Programme Management; M. Sc.
          Electronics, a B. Sc. (Hons) in Electrical Engineering, and a
          PMP-certified Project Manager.
        </p>
      </div>
    </div>
  );
};

export default moji_profile;
