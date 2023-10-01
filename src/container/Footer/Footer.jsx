import React from "react";
import { images } from "../../constants";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="app__footer">
        <div className="app__footer-copyright">
          © 2023 BotGen. All Rights Reserved
        </div>
        <div className="app__footer-links">
          <div className="app__footer-link">
            <img src={images.email} height="20" alt="linkedin-icon" />
            <a href="mailto:office@botgen.ro" rel="noreferrer">
              office@botgen.ro
            </a>
          </div>
          <div className="app__footer-link">
            <img src={images.linkedIn} height="20" alt="linkedin-icon" />
            <a
              href="https://www.linkedin.com/in/tudormatei/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
