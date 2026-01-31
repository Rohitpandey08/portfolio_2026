import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { makeStyles } from "@material-ui/core/styles";

import "./Landing.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";
import { socialsData } from "../../data/socialsData";
import Typewriter from "typewriter-effect";
import github from '../../assets/png/github.png';
import instagram from '../../assets/png/instagram.png';
import linkedin from '../../assets/png/linkedin.png';
import twitter from '../../assets/png/twitter.png';

function Landing() {
  const { theme, drawerOpen } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    resumeBtn: {
      color: "#000",
      backgroundColor: "transparent",
      borderRadius: "30px",
      textTransform: "inherit",
      textDecoration: "none",
      width: "160px",
      fontWeight: "600",
      height: "50px",
      fontFamily: "var(--primaryFont)",
      border: "2px solid #000",
      transition: "100ms ease-out",
      "&:hover": {
        backgroundColor: "#000",
        color: "#fff",
      },
      [t.breakpoints.down("sm")]: {
        width: "180px",
      },
    },
    contactBtn: {
      backgroundColor: "#000",
      color: "#fff",
      borderRadius: "30px",
      textTransform: "inherit",
      textDecoration: "none",
      width: "160px",
      height: "50px",
      fontWeight: "600",
      fontFamily: "var(--primaryFont)",
      border: "2px solid #000",
      transition: "100ms ease-out",
      "&:hover": {
        backgroundColor: "transparent",
        color: "#000",
      },
      [t.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className="landing">
      <div className="landing--container">

        {/* LEFT SIDE - Black - Signature & Socials */}
        <div className="landing--container-left">
          <div className="landing--header">
            {/* Name removed to avoid duplication with Navbar */}
          </div>

          <div className="landing--socials-left">
            {socialsData.linkedIn && (
              <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                <img src={linkedin} alt="LinkedIn" className="landing--social" style={{ width: '35px', height: '35px' }} />
              </a>
            )}
            {socialsData.github && (
              <a href={socialsData.github} target="_blank" rel="noreferrer">
                <img src={github} alt="Github" className="landing--social" style={{ width: '35px', height: '35px' }} />
              </a>
            )}
            {socialsData.twitter && (
              <a href={socialsData.twitter} target="_blank" rel="noreferrer">
                <img src={twitter} alt="Twitter" className="landing--social" style={{ width: '35px', height: '35px' }} />
              </a>
            )}
            {socialsData.instagram && (
              <a href={socialsData.instagram} target="_blank" rel="noreferrer">
                <img src={instagram} alt="Instagram" className="landing--social" style={{ width: '35px', height: '35px' }} />
              </a>
            )}

          </div>
        </div>

        {/* IMAGE - Centered */}
        <img
          src={headerData.image}
          alt=""
          className="landing--img"
          style={{
            opacity: `${drawerOpen ? "0" : "1"}`,
            borderColor: '#eaeaea',
          }}
          draggable="false"
        />

        {/* RIGHT SIDE - Gray - Main Text */}
        <div className="landing--container-right">
          <div className="lcr--content">

            <h6 style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#555', fontSize: '1.2rem', fontWeight: '500' }}>
              <span style={{ color: theme.primary, fontSize: '1.2rem', marginRight: '5px' }}>|</span>
              <Typewriter
                options={{
                  strings: headerData.strings,
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 20,
                }}
              />
            </h6>

            <h1 style={{ color: '#222' }}>{headerData.name}</h1>

            <p style={{ color: '#444' }}>{headerData.desciption}</p>

            <div className="lcr-buttonContainer">
              {headerData.resumePdf && (
                <a
                  href={headerData.resumePdf}
                  download="resume"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className={classes.resumeBtn}>View Resume</Button>
                </a>
              )}
              <NavLink to="/#contacts" smooth={true} spy="true" duration={2000}>
                <Button className={classes.contactBtn}>Let’s Talk</Button>
              </NavLink>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Landing;
