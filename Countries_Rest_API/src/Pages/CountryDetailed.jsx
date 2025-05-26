import React from "react";
import Header from "../components/Header";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useCountriesContext } from "../Context/CountryContext";
import { useParams } from "react-router-dom";

function CountryDetailed() {
  const { name } = useParams();
  const { countries } = useCountriesContext();
  const country = countries.find(
    (country) => country.name.common.toLowerCase() === name.toLowerCase()
  );
  console.log(country);

  if (!country) return <h1>Country not found</h1>;

  const currencyList = country.currencies
    ? Object.values(country.currencies)
        .map((currency) => `${currency.name} `)
        .join(", ")
    : "N/A";

  const languageList = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

  const borderCountries = country?.borders?.map((code) => {
    const borderCountry = countries.find((c) => c.cca3 === code);
    return borderCountry?.name.common;
  });
  return (
    <div className="container">
      <Header />
      <div
        onClick={() => window.history.back()}
        className="back_icon_container"
      >
        <IoIosArrowRoundBack id="icon" /> <span>Back</span>
      </div>

      <div className="country_info_container">
        <div className="sub_container">
          <img src={country.flags.png} alt={country.name.common} />
        </div>
        <div className="country_info_sub_container">
          <h2>{country.name.common}</h2>
          <div className="country-info-sub-both-container">
            <div className="country_info_sub_container_left">
              <p>
                Native Name: <span>{country.name.nativeName.eng.common}</span>
              </p>
              <p>
                Population: <span>{country.population}</span>
              </p>
              <p>
                Region: <span>{country.region}</span>
              </p>
              {country.subregion ? (
                <p>
                  Sub Region: <span>{country.subregion}</span>
                </p>
              ) : (
                ""
              )}
              <p>
                Capital: <span>{country.capital}</span>
              </p>
            </div>
            <div className="country_info_sub_container_right">
              <p>
                Top Level Domain: <span>{country.tld}</span>
              </p>
              <p>
                Currencies: <span>{currencyList}</span>
              </p>
              <p>
                Languages: <span>{languageList}</span>
              </p>
            </div>
          </div>
          <div className="country_border_info">
            <p>
              Border Countries:{" "}
              <span>
                <div className="border_buttons">
                  {borderCountries?.length ? (
                    borderCountries.map((borderName) => (
                      <button key={borderName} className="border_btn">
                        {borderName}
                      </button>
                    ))
                  ) : (
                    <span>No border countries</span>
                  )}
                </div>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetailed;
