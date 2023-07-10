import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import { Home, Header, Error, Footer } from "./container";

import { useSelector } from "react-redux";

const App = () => {
  const mode = useSelector((state) => state.mode);

  useEffect(() => {
    const root = document.documentElement;
    if (mode === "dark") {
      root.style.setProperty("--alice-blue", "#2f3136");
      root.style.setProperty("--light-grey", "#969696");
      root.style.setProperty("--onyx", "#ffffff");
      root.style.setProperty("--white", "#292b2f");
    } else if (mode === "light") {
      root.style.setProperty("--alice-blue", "#f3f7fcff");
      root.style.setProperty("--light-grey", "#969696");
      root.style.setProperty("--onyx", "#383c43ff");
      root.style.setProperty("--white", "#ffffffff");
    }
  }, [mode]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
