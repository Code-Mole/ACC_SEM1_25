import React, { useState } from "react";

import "./App.css";
import Country from "./Pages/Country";
import Header from "./components/Header";
import { useCountriesContext } from "./Context/CountryContext";
import { GoSearch } from "react-icons/go";

function App() {
  const { countries, setCountries } = useCountriesContext();

  const [selectRegion, setSelectedRegion] = useState("");
  const [regionFileredCountries, setRegionFilteredCountries] =
    useState(countries);

  const searchHandler = () => {
    const search = document.getElementById("search").value;
    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    );
    setCountries(filteredCountries);
  };

  const regionFilterHandler = (e) => {
    setSelectedRegion(e.target.value);
    const filteredCountries = countries.filter(
      (country) => country.region === e.target.value
    );
    setCountries(filteredCountries);
  };
  return (
    <div className="parent_container">
      <Header />
      <section className="middle_section">
        <div>
          <span>
            <GoSearch />
          </span>
          <input
            type="text"
            id="search"
            placeholder="Search for a country..."
            onChange={searchHandler}
          />
        </div>
        <div>
          <select name="" id="" onChange={regionFilterHandler}>
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctic">Antarctic</option>
          </select>
        </div>
      </section>
      <section className="bottom_section">
        <Country countries={countries} />
      </section>
    </div>
  );
}

export default App;
