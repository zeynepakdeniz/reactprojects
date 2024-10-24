import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';

export default function App() {
  const [countries, setCountries] = useState([]);

  /*useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")   //fetch ile veri çekme işlemi
      .then(response => response.json())
      .then(response => setCountries(response));
  }, []);*/
    useEffect (() => {                           //axios ile veri çekme
      axios
        .get("https://restcountries.com/v3.1/all")
        .then(response => setCountries(response.data));
        //.catch(error => console.log({error}));
    },[]);

  return (
    <div className="App">
      <h1>ülkeler ve bayraklar</h1>
      <h3>ülke/bayrak/başkent</h3>
      {countries.map(country => {
        return (
          <div key={country.name.common} className="country-card">
            <h2>{country.name.common}</h2>
            <h4>{country.capital ? country.capital[0] : "No Capital"}</h4>
            <p>
              <img src={country.flags.png} alt={country.name.common} />
            </p>
          </div>
        );
      })}
    </div>
  );
}