import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import StatsBar from "../components/StatsBar";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import BreweryList from "../components/BreweryList";
import TypeChart from "../components/charts/TypeChart";
import StateChart from "../components/charts/StateChart";

function Dashboard() {
  const { breweries } = useOutletContext();

  const [query, setQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedState, setSelectedState] = useState("all");

  const types = [...new Set(breweries.map((b) => b.brewery_type).filter(Boolean))].sort();
  const states = [...new Set(breweries.map((b) => b.state).filter(Boolean))].sort();

  const filteredBreweries = breweries.filter((brewery) => {
    const matchesQuery = brewery.name.toLowerCase().includes(query.toLowerCase());
    const matchesType = selectedType === "all" || brewery.brewery_type === selectedType;
    const matchesState = selectedState === "all" || brewery.state === selectedState;
    return matchesQuery && matchesType && matchesState;
  });

  return (
    <>
      <StatsBar breweries={breweries} />

      <section className="charts-grid">
        <TypeChart breweries={breweries} />
        <StateChart breweries={breweries} />
      </section>

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
  );
}

export default Dashboard;
