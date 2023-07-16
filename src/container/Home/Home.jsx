import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import axios from "axios";

import { images } from "../../constants";
import "./Home.css";

const headTextTicks = [
  "Chatbots personalizați pentru compania ta",
  "Implementare foarte rapidă și ușoară",
  "Suport tehnic 24/7",
];

const Home = () => {
  const mode = useSelector((state) => state.mode);

  const isMobile = !useMediaQuery("(min-width:768px)");

  const handleContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [message, setMessage] = useState("");

  const [buttonMessage, setButtonMessage] = useState("Contactează-ne");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      CompanyName: companyName,
      CompanyEmail: companyEmail,
      Message: message,
    };

    axios
      .post(
        "https://sheet.best/api/sheets/4a5ff438-1cbc-4ef5-b2da-a56d822fd4d7",
        data
      )
      .then((response) => {
        console.log(response);
        setCompanyName("");
        setCompanyEmail("");
        setMessage("");
      });

    setButtonMessage("Succes!");
  };

  return (
    <div className="app__home">
      <div className="app__home-head">
        <div className="app__home-head-text" id="home">
          <h1>
            <span className="keyword">BotGen </span> imbunatațește experiența
            clienților
          </h1>
          <div className="app__home-head-list-container">
            {headTextTicks.map((value, index) => (
              <motion.div
                className="app__home-head-list-item"
                key={index}
                whileInView={{ x: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img
                  src={mode === "light" ? images.tickDark : images.tickLight}
                  alt="tick"
                  height="15"
                />
                <p>{value}</p>
              </motion.div>
            ))}
          </div>
          <div className="app__home-head-button">
            <button onClick={handleContact}>Contactează-ne</button>
          </div>
        </div>
        <div className="app__home-head-img">
          <img src={images.laptop} alt="img" />
        </div>
      </div>
      <div className="app__home-body-automation" id="servicii">
        <div className="app__home-body-automation-img">
          <div id="automation-img">
            <div id="label">
              <img height="30" src={images.automationIcon} alt="icon" />
              <p style={{ marginLeft: "0.5rem" }}>Configurare personalizată</p>
            </div>
            <img src={images.automation} alt="automation" />
          </div>
        </div>
        <motion.div
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__home-body-automation-text"
        >
          <h1>Chatbot-uri personalizate pentru afacerea ta!</h1>
          <br />
          <p>
            Dezvoltăm chatbot-uri adaptate nevoilor tale specifice, reflectând
            imaginea și brandul afacerii tale. Creează o conexiune autentică cu
            clienții și automatizează interacțiunile cu un chatbot personalizat
            de la{" "}
            <span className="keyword" style={{ color: "var(--chili-red)" }}>
              BotGen
            </span>
            !
          </p>
          <br />
          <button onClick={handleContact}>Află mai multe</button>
        </motion.div>
      </div>
      <div
        style={{
          backgroundColor: "var(--alice-blue)",
          flexDirection: isMobile ? "column-reverse" : "row",
        }}
        className="app__home-body-automation"
      >
        <motion.div
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__home-body-automation-text"
          id="automation"
        >
          <h1>Chatbot-uri integrate rapid în afacerea ta!</h1>
          <br />
          <p>
            implementarea chatbot-ului tău devine ușoară și rapidă. Doar 2 linii
            de cod sunt suficiente pentru a avea chatbot-ul tău funcțional și
            pregătit să interacționeze pe website-ul tău. Beneficiază de
            avantajele unei implementări rapide cu chatbot-uri de la{" "}
            <span className="keyword">BotGen</span>!
          </p>
          <br />
          <button onClick={handleContact}>Află mai multe</button>
        </motion.div>
        <div
          style={{ justifyContent: "flex-end" }}
          className="app__home-body-automation-img"
        >
          <div
            style={{
              justifyContent: isMobile ? "center" : "flex-start",
            }}
            id="automation-img"
          >
            <div
              style={{
                transform: isMobile ? "translateX(0)" : "translateX(-50%)",
              }}
              id="label"
            >
              <img height="30" src={images.fastIcon} alt="icon" />
              <p style={{ marginLeft: "0.5rem", color: "var(--chili-red)" }}>
                Implementare rapidă
              </p>
            </div>
            <img
              style={{ alignSelf: "flex-end", objectPosition: "50%" }}
              src={images.implementation}
              alt="automation"
            />
          </div>
        </div>
      </div>
      <div className="app__home-body-automation">
        <div className="app__home-body-automation-img">
          <div id="automation-img">
            <div id="label">
              <img height="30" src={images.supportIcon} alt="icon" />
              <p style={{ marginLeft: "0.5rem" }}>Suntem la dispoziția ta</p>
            </div>
            <img src={images.call} alt="automation" />
          </div>
        </div>
        <motion.div
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__home-body-automation-text"
        >
          <h1>Echipa noastră mereu alături de tine!</h1>
          <br />
          <p>
            Suntem aici pentru tine 24/7 cu suport tehnic dedicat. Echipa
            noastră experimentată și prietenoasă de la{" "}
            <span className="keyword" style={{ color: "var(--chili-red)" }}>
              BotGen
            </span>{" "}
            este mereu alături de tine, oferind soluții prompte și eficiente. Ai
            încredere că beneficiezi de asistență tehnică de înaltă calitate,
            fiind partenerul de încredere în gestionarea chatbot-ului tău.
          </p>
          <br />
          <button onClick={handleContact}>Află mai multe</button>
        </motion.div>
      </div>
      <div
        id="contact"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          minHeight: "100vh",
          flexDirection: "column",
          marginBottom: "5rem",
        }}
      >
        <h2 style={{ margin: "2rem" }}>
          Contactați-ne pentru a putea programa o întâlnire
        </h2>
        <div className="form-container">
          <form className="form">
            <div className="form-group">
              <label for="email">Numele companiei</label>
              <input
                onChange={(e) => setCompanyName(e.target.value)}
                value={companyName}
                type="text"
                id="email"
                name="email"
                required=""
              />
            </div>
            <div className="form-group">
              <label for="email">Email-ul companiei</label>
              <input
                onChange={(e) => setCompanyEmail(e.target.value)}
                value={companyEmail}
                type="text"
                id="email"
                name="email"
                required=""
              />
            </div>
            <div className="form-group">
              <label for="textarea">Cum vă putem ajuta?</label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                name="textarea"
                id="textarea"
                rows="10"
                cols="50"
                required=""
              ></textarea>
            </div>
            <button onClick={handleSubmit} className="form-submit-btn">
              {buttonMessage}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
