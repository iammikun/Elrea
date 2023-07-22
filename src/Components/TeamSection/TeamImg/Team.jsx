import React from "react";
import classes from "./TeamImg.module.css";
import timi from "../../../Asset/Images/timi.jpg";
import moji from "../../../Asset/Images/moji.png";
import benji from "../../../Asset/Images/benji.jpg";
import baba from "../../../Asset/Images/baba.jpg";
import tunde from "../../../Asset/Images/tunde.jpg";
import kalu from "../../../Asset/Images/kalu.jpg";
import edi from "../../../Asset/Images/edi.jpg";
import fati from "../../../Asset/Images/fati.jpg";
import fifthImg from "../../../Asset/Images/fifthImg.jpg";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.flexOne}>
          <div className={classes.firstWrap}>
            <img src={moji} alt="" className={classes.firstImg} />
            <div className={classes.imgWrapperOne}>
              <h5>Mojisola Olateru-Olagbegi</h5>
              <span>Chairman</span>
              <p className={classes.first}>
                Mojisola is an Information Technology and Project Management
                professional with extensive experience in the ICT industry,
                having worked in various sectors in Nigeria, the United States
                and Canada. <br /> <Link to="/mojisola">Read full profile</Link>
              </p>
              <div className={classes.socials}>
                <a
                  href="https://www.linkedin.com/in/moji-olateru-olagbeg-olagbegi-8a99a2126/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className={classes.media} />
                </a>
              </div>
            </div>
          </div>
          <div className={classes.firstWrap}>
            <img src={timi} alt="" className={classes.firstImg} />
            <div className={classes.imgWrapperOne}>
              <h5>Ayeni Timilehin Franklin</h5>
              <span>MD/CEO</span>
              <p className={classes.first}>
                Timilehin is a dynamic entrepreneur with several projects across
                tech and media content creation. <br />
                <Link to="/timilehin">Read full profile</Link>
              </p>
              <div className={classes.socials}>
                <a
                  href="https://www.linkedin.com/in/ayeni-timilehin-franklin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className={classes.media} />
                </a>
              </div>
            </div>
          </div>
          <div>
            <img src={benji} alt="" className={classes.secondImg} />
            <div className={classes.imgWrapper}>
              <h5>Benjamin Eliye</h5>
              <span>Director/CFO</span>
              <p className={classes.second}>
                Ben as he is fondly called has an exceptional skill for detail
                and very finicky about organization and problem solving. Ben is
                an experienced financial analyst. <br />
                <Link to="/benjamin">Read full profile</Link>
              </p>
              <div className={classes.socials}>
                <a
                  href="https://www.linkedin.com/in/benjamin-eliye/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className={classes.media} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.flexOne}>
          <div>
            <img src={edi} alt="" />
            <div className={classes.imgWrapperSix}>
              <h5>Edifofon Akpan</h5>
              <span>Head, Research and Development</span>
              <p>
                Edifofon is a Pharmacist by training and a former researcher
                with NIPRD Abuja, he is an extreme detailed oriented, organized
                and efficient professional capable of multi-tasking and
                discovering new ideas which can be put into
                practice effectively. <br />{" "}
                <Link to="/akpan">Read full profile</Link>
              </p>
              <div className={classes.socials}>
                <a
                  href="https://www.linkedin.com/in/edifofon/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className={classes.media} />
                </a>
              </div>
            </div>
          </div>
          {/*  */}
          <div>
            <img src={tunde} alt="" />
            <div className={classes.imgWrapperThree}>
              <h5>Tunde Kelani</h5>
              <span>Head, Business Development /Brand Management</span>
              <p>
                Tunde is an adroit business strategist and a team lead
                consulting for multiple top private organizations like Dangote
                Group, Hp Nigeria, Nigeria Breweries and public organizations
                like Federal Government Ministries and Agencies. <br />
                <Link to="/tunde">Read full profile</Link>
              </p>
              <div className={classes.socials}>
                <a
                  href="https://www.linkedin.com/in/tundekelani1/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className={classes.media} />
                </a>
              </div>
            </div>
          </div>
          <div>
            <img src={kalu} alt="" />
            <div className={classes.imgWrapperThree}>
              <h5>Kalu Dimbga</h5>
              <span>Head, System and Technology Development.</span>
              <p>
                Kalu is the head of IT in Elrae Technologies Ltd. He has worked
                as technology fellow and software engineer for Institute of
                Journalism, Washington DC where he developed and built system
                for investigative journalism. <br />{" "}
                <Link to="/kalu">Read full profile</Link>
              </p>
              <div className={classes.socials}>
                <a
                  href="https://www.linkedin.com/in/dkdimgba/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className={classes.media} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.flexOne}>
          <div className={classes.lastWrap}>
            <img src={baba} alt="" className={classes.lastImg} />
            <div className={classes.imgWrapperLast}>
              <h5>Olaniyan Babayemi Olawole</h5>
              <span>Chief Legal Officer</span>
              <p>
                Olaniyan is an experienced legal practitioner with garnered
                experiences spanning across the public and private
                sectors respectively.
              </p>
              <Link to="/olaniyan">Read full profile</Link>
              <div className={classes.socials}>
                <a
                  href="https://www.linkedin.com/in/babayemi-olaniyan-ll-m-abr-aciarb-uk-acis-aicmc-a7739112b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className={classes.media} />
                </a>
              </div>
            </div>
          </div>
          <div className={classes.lastWrap}>
            <img src={fifthImg} alt="" className={classes.lastImg} />
            <div className={classes.imgWrapperLast}>
              <h5>Femi Aje</h5>
              <span>Head, Strategy and Innovation</span>
              <p>
                Prior to joining Trustfund Pensions Limited in 2010, Femi
                commenced his working career with Energy Saving Trust in 2005
                from where he as role of programme assistant in charge of
                managing a budget of $13m annually. <br />
                <Link to="/femi">Read full profile</Link>
              </p>
              <div className={classes.socials}>
                <a
                  href="https://www.linkedin.com/in/babayemi-olaniyan-ll-m-abr-aciarb-uk-acis-aicmc-a7739112b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className={classes.media} />
                </a>
              </div>
            </div>
          </div>
          {/* */}
          <div className={classes.last}>
            <img src={fati} alt="" />
            <div className={classes.imgWrapperSeven}>
              <h5>Fatiregun Olubunmi </h5>
              <span>Technical Consultant</span>
              <p>
                Olubunmi is the Technical Consultant for Elrae Technologies. He
                has worked on various projects in the telecommunications
                industry in Nigeria and other African Countries like South
                Africa, Ghana, Uganda and Cameroon. <br />{" "}
                <Link to="/olubunmi">Read full profile</Link>
              </p>
              <div className={classes.socials}>
                <a
                  href="https://www.linkedin.com/in/olubunmi-fatiregun-mba-cciso-ceh-cnd-ocp-oca-odce-itil-0765a768/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className={classes.media} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
