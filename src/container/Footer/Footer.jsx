import React from "react";
import { useLocation } from "react-router-dom";

import { images } from "../../constants";

import "./Footer.css";

const Footer = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {!isLoginPage ? (
        <div className="app__footer">
          <div className="app__footer-copyright">
            © 2023 BotGen. All Rights Reserved
          </div>
          <div className="app__footer-links">
            <div className="app__footer-link">
              <img src={images.linkedIn} height="20" alt="linkedin-icon" />
              <a
                href="https://www.linkedin.com/in/tudormatei/"
                target="_blank"
                rel="noreferrer"
              >
                Linked in
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Footer;
