import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import axios from 'axios';
import "./App.css";

// Ana sayfa bileşeni
function Home() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => setCountries(response.data))
      .catch(error => console.log("Error fetching countries:", error));
  }, []);

  return (
    <div className="App">
      <h1>Ülkeler ve Bayraklar</h1>
      <h3>Ülke / Bayrak / Başkent</h3>
      {countries.map(country => (
        <div key={country.name.common} className="country-card">
          <h2>{country.name.common}</h2>
          <h4>{country.capital ? country.capital[0] : "No Capital"}</h4>
          <p>
            <img src={country.flags.png} alt={country.name.common} />
          </p>
        </div>
      ))}
    </div>
  );
}

// Hakkında sayfası bileşeni
function About() {
  return (
    <div className="About">
      <h1>Hakkında</h1>
      <p>Bu uygulama ülke bilgilerini gösterir.</p>
    </div>
  );
}

// Uygulama bileşeni
export default function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Ana Sayfa</Link></li>
          <li><Link to="/about">Hakkında</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
