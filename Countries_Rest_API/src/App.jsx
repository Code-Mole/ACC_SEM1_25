import "./App.css";
import Country from "./Pages/Country";

function App() {
  return (
    <div className="parent_container">
      <section className="top_section">
        <h2>Where in the world?</h2>
        <button>🌜Dark Mode</button>
      </section>
      <section className="middle_section">
        <div>
          <span>🔍</span>
          <input type="text" placeholder="Search for a country..." />
        </div>
        <div>
          <select name="" id="">
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </section>
      <section className="bottom_section">
        <Country />
      </section>
    </div>
  );
}

export default App;
