import React from "react";
import classes from "./Moji.module.css";
import { Link } from "react-router-dom";
import moji from "../../../Asset/Images/moji.png";
import { FaLinkedinIn } from "react-icons/fa";

const moji_profile = () => {
  window.scrollTo(0, 0);

  return (
    <div className={classes.moji_Container}>
      <div className={classes.moji_Wrapper}>
        <Link to="/team">Back</Link>
        <img src={moji} alt="" />
        <h1>Mojisola Olateru-Olagbegi</h1>
        <h3>Chairman</h3>
        <p>
          Mojisola Olateru-Olagbegi is a distinguished professional in
          Information Technology and Project Management, boasting extensive
          expertise from her illustrious career in the ICT industry across
          Nigeria, the United States, and Canada. With a strong engineering
          background and an impressive industry tenure exceeding twenty-seven
          years, Moji has established a remarkable reputation for her adeptness
          in program and project development and management, focusing on the ICT
          sector.
        </p>
        <p>
          She holds the esteemed positions of co-founder and Partner, Technology
          and Entrepreneurship at The Workplace Centre, Director of Asherlogic
          Ltd, and Chairman of Elrae Technologies Ltd. Moji's professional
          journey commenced as a Technical Support and Network Engineer at DPMS
          Nigeria, followed by her appointment as the IT Manager at Costain West
          Africa. During her tenure in North America, she flourished as an
          independent consultant, earning certifications as a Microsoft
          Certified Systems Engineer (MCSE) and a Certified Information Systems
          Auditor (CISA). She also served as a Senior Technical Specialist at
          Dow Chemical, a Project Manager/Methodology Specialist at General
          Motors, and a Web Applications Project Manager at Chrysler. Moji's
          extensive skill set encompasses ICT Risk Management, Governance,
          Business Process Re-Engineering, and E-Government.
        </p>
        <p>
          In her role as a consultant to the Federal Ministry of Communication
          Technology, Mojisola spearheaded various initiatives, including the
          design and development of E-Government frameworks and the
          establishment of ICT Professional Cadre Structures. Additionally, she
          was pivotal in formulating a Capacity Building Curriculum for ICT
          professionals in governmental positions. Moji also served as the
          National Consultant for the World Bank Nigerian Microwork project
          (NaijaCloud) and the Rockefeller Foundation Digital Jobs initiative.
          She provided consulting services to several State Governments,
          showcasing her breadth of knowledge and expertise.
        </p>
        <p>
          Mojisola exhibits an unwavering commitment to developing African
          youth, particularly those facing disadvantages within the technology
          sector. As Chairman of The Workplace Youth Initiatives, a non-profit
          organization dedicated to enhancing youth skills development and job
          creation, she diligently works towards this noble cause. She also
          serves as a director of STEMACT Initiatives in Michigan, which
          promotes STEM (Science, Technology, Engineering & Mathematics) and
          Creative Technologies education and initiatives among underprivileged
          youth.
        </p>
        <p>
          Furthermore, Moji volunteers her expertise as a Science and Technology
          Policy Commission consultant for the Nigerian Economic Summit Group
          (NESG). Her academic achievements include a PhD in Strategy, Project,
          and Programme Management, an M.Sc. in Electronics, a B.Sc. (Hons) in
          Electrical Engineering, and a Project Management Professional (PMP)
          certification, all of which attest to her intellectual prowess and
          dedication to professional excellence.
        </p>

        <a
          href="https://www.linkedin.com/in/moji-olateru-olagbeg-olagbegi-8a99a2126/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.moji_Link}
        >
          <FaLinkedinIn className={classes.media} />
        </a>
      </div>
    </div>
  );
};

export default moji_profile;
