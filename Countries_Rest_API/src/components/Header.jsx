import React, { useLayoutEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";



function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useLayoutEffect(() => {
    if (document.documentElement) {
      document.documentElement.classList.toggle("dark", darkMode);
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    }
  }, [darkMode]);

  return (
    <div className="">
      <section className="top_section">
        <h2>Where in the world?</h2>
        <button onClick={toggleDarkMode}>
          {darkMode ? <div>
            <MdDarkMode /> Light Mode
          </div> :  <div>
            <MdOutlineDarkMode /> Dark Mode
          </div>}
        </button>
      </section>
    </div>
  );
}

export default Header;
