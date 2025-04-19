import { useNavigate } from "react-router-dom";
import { useCountriesContext } from "../Context/CountryContext";
import { useCallback } from "react";

function Country() {
  const navigate = useNavigate();
  const { countries } = useCountriesContext();

  console.log(countries);

  return (
    <div className="card_body">
      {countries.map((country) => (
        <div
          className="country_card"
          key={country.alpha3Code || country.numericCode}
          onClick={() => navigate(`/country/${country.name.common}`)}
        >
          <img src={country.flags.png} alt={`flag of ${country.name.common}`} />
          <div className="country_info">
            <h3>{country.name.common || country.name.official}</h3>
            <p>
              Population: <span>{country.population}</span>
            </p>
            <p>
              Region: <span>{country.region}</span>
            </p>
            <p>
              Capital: <span>{country.capital}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Country;
