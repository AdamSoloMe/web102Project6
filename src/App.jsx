import { useEffect, useState } from "react";
import Header from "./components/Header";
import StatsBar from "./components/StatsBar";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import BreweryList from "./components/BreweryList";
import "./App.css";

const API_URL = "https://api.openbrewerydb.org/v1/breweries?per_page=200";

function App() {
  const [breweries, setBreweries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [query, setQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedState, setSelectedState] = useState("all");

  useEffect(() => {
    async function fetchBreweries() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch brewery data");
        const data = await response.json();
        setBreweries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchBreweries();
  }, []);

  const types = [...new Set(breweries.map((b) => b.brewery_type).filter(Boolean))].sort();
  const states = [...new Set(breweries.map((b) => b.state).filter(Boolean))].sort();

  const filteredBreweries = breweries.filter((brewery) => {
    const matchesQuery = brewery.name.toLowerCase().includes(query.toLowerCase());
    const matchesType = selectedType === "all" || brewery.brewery_type === selectedType;
    const matchesState = selectedState === "all" || brewery.state === selectedState;
    return matchesQuery && matchesType && matchesState;
  });

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        {loading && <p className="status-message">Loading breweries...</p>}
        {error && <p className="status-message error">Error: {error}</p>}

        {!loading && !error && (
          <>
            <StatsBar breweries={breweries} />

            <section className="controls">
              <SearchBar query={query} onQueryChange={setQuery} />
              <FilterBar
                types={types}
                selectedType={selectedType}
                onTypeChange={setSelectedType}
                states={states}
                selectedState={selectedState}
                onStateChange={setSelectedState}
              />
            </section>

            <p className="results-count">
              Showing {filteredBreweries.length} of {breweries.length} breweries
            </p>

            <BreweryList breweries={filteredBreweries} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
