import { createContext, useContext, useState, useEffect, useMemo } from "react";

const countriesContext = createContext();

const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error(error));
  }, []);

  const values = useMemo(() => {
    return { countries, setCountries };
  }, [countries, setCountries]);

  return (
    <countriesContext.Provider value={values}>
      {children}
    </countriesContext.Provider>
  );
};

const useCountriesContext = () => {
  const context = useContext(countriesContext);
  if (context === undefined) {
    throw new Error("CountriesAPI must be used within the context");
  }
  return context;
};

export { useCountriesContext, CountriesProvider };
