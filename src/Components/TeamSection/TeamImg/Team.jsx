import React from "react";
import classes from "./TeamImg.module.css";
import firstImg from "../../../Asset/Images/firstImg.jpg";
import secondImg from "../../../Asset/Images/secondImg.jpg";
import thirdImg from "../../../Asset/Images/thirdImg.jpg";
import fourthImg from "../../../Asset/Images/fourthImg.jpg";
import fifthImg from "../../../Asset/Images/fifthImg.jpg";
import sixthImg from "../../../Asset/Images/sixthImg.jpg";
import { FaLinkedinIn } from "react-icons/fa";

const Team = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.flexOne}>
          <div>
            <img src={firstImg} alt="" />
            <div className={classes.imgWrapper}>
              <h5>Ayeni Timilehin Franklin</h5>
              <span>President / Co-founder</span>
              <p className={classes.first}>
                Timilehin is a dynamic entrepreneur with several projects across
                tech and media content creation.
              </p>
              <div className={classes.socials}>
                <a href="/">
                  <FaLinkedinIn className={classes.media} />
                </a>
              </div>
            </div>
          </div>
          <div>
            <img src={secondImg} alt="" className={classes.secondImg} />
            <div className={classes.imgWrapper}>
              <h5>Benjamin Eliye</h5>
              <span>Vice President / Co-founder /CFO</span>
              <p className={classes.second}>
                Ben as he is fondly called has an exceptional skill for detail
                and very finicky about organization and problem solving. Ben is
                an experienced financial analyst.
              </p>
              <div className={classes.socials}>
                <a href="/">
                  <FaLinkedinIn className={classes.media} />
                </a>
              </div>
            </div>
          </div>
          <div>
            <img src={thirdImg} alt="" />
            <div className={classes.imgWrapper}>
              <h5>Olaniyan Babayemi Olawole</h5>
              <span>Chief Legal Officer</span>
              <p>
                Olaniyan is an experienced legal practitioner with garnered
                experiences spanning across the public and private
                sectors respectively.
              </p>
              <div className={classes.socials}>
                <a href="/">
                  <FaLinkedinIn className={classes.media} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.flexOne}>
          <div>
            <img src={fourthImg} alt="" />
            <div className={classes.imgWrapper}>
              <h5>Tunde Kelani</h5>
              <span>Head, Business Development /Brand Management</span>
              <p>
                Tunde is an adroit business strategist and a team lead
                consulting for multiple top private organizations like Dangote
                Group, Hp Nigeria, Nigeria Breweries and public organizations
                like Federal Government Ministries and Agencies.
              </p>
              <div className={classes.socials}>
                <a href="/">
                  <FaLinkedinIn className={classes.media} />
                </a>
              </div>
            </div>
          </div>
          <div>
            <img src={fifthImg} alt="" />
            <div className={classes.imgWrapper}>
              <h5>Femi Aje: </h5>
              <span>Head, Strategy and Innovation</span>
              <p>
                Prior to joining Trustfund Pensions Limited in 2010, Femi
                commenced his working career with Energy Saving Trust in 2005
                from where he as role of programme assistant in charge of
                managing a budget of $13m annually.
              </p>
              <div className={classes.socials}>
                <a href="/">
                  <FaLinkedinIn className={classes.media} />
                </a>
              </div>
            </div>
          </div>
          <div>
            <img src={sixthImg} alt="" />
            <div className={classes.imgWrapper}>
              <h5>Edifofon Akpan:</h5>
              <span>Head, System and Technology Development.</span>
              <p>
                Kalu is the head of IT in Elrae Technologies Ltd. He has worked
                as technology fellow and software engineer for Institute of
                Journalism, Washington DC where he developed and built system
                for investigative journalism.
              </p>
              <div className={classes.socials}>
                <a href="/">
                  <FaLinkedinIn className={classes.media} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.flexOne}>
          <div className={classes.last}>
            <img src={fourthImg} alt="" />
            <div className={classes.imgWrapper}>
              <h5>Fatiregun Olubunmi: Technical Consultant</h5>
              <p>
                Olubunmi is the Technical Consultant for Elrae Technologies Ltd.
                He has worked on various projects in the telecommunications
                industry in Nigeria and other African Countries like South
                Africa, Ghana, Uganda and Cameroon. He has integrated so many
                services with MT, GLO, AIRTEL and other Telco Operators. He
                specializes in service deployments like USSD,
                Premium SMS and Voice.
              </p>
              <div className={classes.socials}>
                <a href="/">
                  <FaLinkedinIn className={classes.media} />
                </a>
              </div>
            </div>
          </div>
          {/* <div>
            <img src={fifthImg} alt="" />
            <div className={classes.imgWrapper}>
              <h5>FEMI AJE: </h5>
              <span>Head, Strategy and Innovation</span>
              <p>
                Prior to joining Trustfund Pensions Limited in 2010, Femi
                commenced his working career with Energy Saving Trust in 2005
                from where he as role of programme assistant in charge of
                managing a budget of $13m annually.
              </p>
              <div className={classes.socials}>
                <a href="/">
                  <FaLinkedinIn className={classes.media} />
                </a>
              </div>
            </div>
          </div> */}
          {/* <div>
            <img src={sixthImg} alt="" />
            <div className={classes.imgWrapper}>
              <h5>EDIFOFON AKPAN:</h5>
              <span>Head, System and Technology Development.</span>
              <p>
                Kalu is the head of IT in Elrae Technologies Ltd. He has worked
                as technology fellow and software engineer for Institute of
                Journalism, Washington DC where he developed and built system
                for investigative journalism.
              </p>
              <div className={classes.socials}>
                <a href="/">
                  <FaLinkedinIn className={classes.media} />
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Team;
