import React, { useState, useEffect } from "react";

function Country() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error(error));
  }, []);

  console.log(countries);

  return (
    <div className="card_body">
      {countries.map((country) => (
        <div className="country_card" key={country.alpha3Code || country.numericCode}>
          <img src={country.flags.png} alt={`flag of ${country.name.common}`}/>
          <div className="country_info">
          <h3>{country.name.common || country.name.official}</h3>
          <p>Population: <span>{country.population}</span></p>
          <p>Region: <span>{country.region}</span></p>
          <p>Capital: <span>{country.capital}</span></p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Country;
