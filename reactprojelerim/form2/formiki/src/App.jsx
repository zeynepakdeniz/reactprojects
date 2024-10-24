import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormValidation from "./FormValidation";
import FormGonderildi from "./FormGonderildi";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormValidation />} />
        <Route path="/FormGonderildi" element={<FormGonderildi/>} />
      </Routes>
    </Router>
  );
}

export default App;
