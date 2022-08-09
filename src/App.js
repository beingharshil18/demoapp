import "./App.css";
import "./Styles/variables.scss";
import LandingPage from "../src/Pages/LandingPage/landingPage";
import ClientPage from "../src/Pages/ClientPage/clientPage";
import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/clientpage" element={<ClientPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
