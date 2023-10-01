import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setMode } from "../../state";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Header.css";

const Header = () => {
  const mode = useSelector((state) => state.mode);

  const dispatch = useDispatch();

  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  const handleThemeChange = () => {
    dispatch(setMode());
  };

  const handleHome = () => {
    if (isMobile) handleMenuClick();

    const homeElement = document.getElementById("home");
    if (homeElement) {
      homeElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleServicii = () => {
    if (isMobile) handleMenuClick();

    const serviciiElement = document.getElementById("servicii");
    if (serviciiElement) {
      serviciiElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContact = () => {
    if (isMobile) handleMenuClick();

    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMenuClick = () => {
    setShowHamburgerMenu(!showHamburgerMenu);
  };

  const isMobile = !useMediaQuery("(min-width:768px)");

  return (
    <>
      <div className="app__navbar">
        <div onClick={handleHome} className="app__navbar-icon">
          {mode === "light" ? (
            <img src={images.logo} height="40" alt="audio-insight-logo" />
          ) : (
            <img src={images.logoLight} height="40" alt="audio-insight-logo" />
          )}
        </div>
        {!isMobile ? (
          <>
            <div className="app__navbar-links">
              <div className="app__navbar-link">
                <button className="navbar-button" onClick={handleHome}>
                  <div className="dot"></div>
                  <span>Home</span>
                </button>
              </div>
              <div className="app__navbar-link">
                <button className="navbar-button" onClick={handleServicii}>
                  <div className="dot"></div>
                  <span>Servicii</span>
                </button>
              </div>
            </div>

            <div className="app__navbar-account">
              <button onClick={handleContact} id="round">
                Contact
              </button>
              <button onClick={handleThemeChange}>
                {mode === "light" ? (
                  <img src={images.darkMode} alt="dark" height="30" />
                ) : (
                  <img src={images.lightMode} alt="light" height="30" />
                )}
              </button>
            </div>
          </>
        ) : !showHamburgerMenu ? (
          <div className="app__navbar-hamburger" onClick={handleMenuClick}>
            {mode === "light" ? (
              <img
                style={{ marginRight: "2rem", cursor: "pointer" }}
                src={images.hamburgerDark}
                height="25"
                alt="menu"
              />
            ) : (
              <img
                style={{ marginRight: "2rem", cursor: "pointer" }}
                src={images.hamburgerLight}
                height="25"
                alt="menu"
              />
            )}
          </div>
        ) : (
          <motion.div
            initial={{ y: "-50%" }}
            animate={{ y: "40%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="app__navbar-mobile-menu"
          >
            <div onClick={handleHome}>
              {mode === "light" ? (
                <img
                  style={{ cursor: "pointer" }}
                  src={images.logo}
                  height="40"
                  alt="audio-insight-logo"
                />
              ) : (
                <img
                  style={{ cursor: "pointer" }}
                  src={images.logoLight}
                  height="40"
                  alt="audio-insight-logo"
                />
              )}
            </div>
            <div onClick={handleMenuClick}>
              {mode === "light" ? (
                <img
                  style={{ cursor: "pointer" }}
                  src={images.hamburgerDark}
                  height="25"
                  alt="menu"
                />
              ) : (
                <img
                  style={{ cursor: "pointer" }}
                  src={images.hamburgerLight}
                  height="25"
                  alt="menu"
                />
              )}
            </div>
            <button onClick={handleHome}>Home</button>
            <button onClick={handleServicii}>Servicii</button>
            <button onClick={handleContact} id="round">
              Contact
            </button>
            <button onClick={handleThemeChange}>
              {mode === "light" ? (
                <img src={images.darkMode} alt="dark" height="30" />
              ) : (
                <img src={images.lightMode} alt="light" height="30" />
              )}
            </button>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Header;
