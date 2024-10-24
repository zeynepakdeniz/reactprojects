import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormValidation from "./Formvalidation";
import Formgonderme from "./Formgonderme";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormValidation />} />
        <Route path="/Formgonderme" element={<Formgonderme/>} />
      </Routes>
    </Router>
  );
}

export default App;
