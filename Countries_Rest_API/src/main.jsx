import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import CountryDetailed from "./Pages/CountryDetailed.jsx";
import NotFound from "./Pages/NotFound.jsx";
import { CountriesProvider } from "./Context/CountryContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CountriesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/country/:name" element={<CountryDetailed />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CountriesProvider>
  </StrictMode>
);
