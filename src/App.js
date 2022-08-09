import React from "react";
import "./App.css";
import "./Styles/variables.scss";
import LandingPage from "../src/Pages/LandingPage/landingPage";
import ClientPage from "../src/Pages/ClientPage/clientPage";
import Example from "../src/Pages/Example/example";
import Page from "./Pages/Page/page1";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/clientpage" element={<ClientPage />} />
          <Route exact path="/example" element={<Example />}>
            <Route exact path="/example/page" element={<Page />} />
            {/* <Route exact path="/page" element={<Page />} />
            <Route exact path="/page" element={<Page />} /> */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
