import React from "react";
import { Link } from "react-router-dom";
import classes from "./Joseph.module.css";
import joseph from "../../../Asset/Images/joseph.jpg";
import { FaLinkedinIn } from "react-icons/fa";

const Akpan = () => {
  window.scrollTo(0, 0);

  return (
    <div className={classes.akpan_Container}>
      <div className={classes.akpan_Wrapper}>
        <Link to="/team">Back</Link>
        <img src={joseph} alt="" />
        <h1>Joseph Attah</h1>
        <h3>Head, Infrastructure</h3>
        <p>
          Joseph Attah serves as the esteemed Chief Executive Officer and
          Managing Director of Evolve Digital Africa Limited, an avant-garde
          telecommunications and IT infrastructure service company located in
          Abuja, Nigeria. This distinguished firm specialises in broadband
          access and connectivity, emphasising designing, executing, and
          maintaining cutting-edge Base Transmission Station (BTS) technology,
          Fiber Optics networks, Data Centers, and IT infrastructure setups.
          With an impeccable track record of delivering top-tier services,
          Evolve Digital Africa Limited adheres to international best practices
          unwaveringly.
        </p>
        <p>
          As a highly proficient Network Infrastructure Engineer, Joseph Attah
          boasts extensive expertise in the domain of Network and
          Telecommunication ancillary services. His exceptional aptitude is
          underscored by a remarkable history of successfully implementing and
          managing large-scale infrastructure projects encompassing
          Telecommunications Networks and Security Systems. His excellent
          proficiency extends to the domains of Distributed Access Architecture
          (DAA), Hyperscale and Cloud Infrastructure, Fiber to the Home (FTTH),
          SONET, DWDW Transmission, OTN, Carrier Ethernet, WiMAX, Wi-Fi, UMTS,
          LTE, Long-haul and Metro Fiber, GPON Networks, and a host of other
          advanced technologies.
        </p>
        <p>
          The impact of his expertise is manifold, leading to enhanced network
          capacity, streamlined outside plant maintenance, improved end-of-line
          signal quality (last mile), headend consolidation, higher modular and
          bit rates, increased spectral efficiency, multiple wavelengths per
          fiber, and the expansion of IP networks to nodes. Moreover, under his
          adept leadership, organisations benefit from lowered operational and
          capital expenditures.
        </p>
        <p>
          Joseph Attah's academic foundation is anchored in a Bachelor's Degree
          in Electrical and Electronics Engineering. With over a decade of
          immersive experience in the Network and Telecommunication Engineering
          sphere, he has honed his skills exceptionally. Furthermore, he holds
          numerous esteemed industry certifications from renowned institutions
          such as GNS3 Academy, Google, AWS, and CISCO, further underscoring his
          commitment to continuous professional development and staying at the
          forefront of technological advancements.
        </p>
        <a
          href="https://www.linkedin.com/in/ogaba-joseph-attah-6a7851118/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.akpan_Link}
        >
          <FaLinkedinIn className={classes.media} />
        </a>
      </div>
    </div>
  );
};

export default Akpan;
