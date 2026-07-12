import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import BreweryDetail from "./pages/BreweryDetail";
import "./App.css";

const API_URL = "https://api.openbrewerydb.org/v1/breweries?per_page=200";

function App() {
  const [breweries, setBreweries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <Routes>
      <Route element={<Layout breweries={breweries} loading={loading} error={error} />}>
        <Route index element={<Dashboard />} />
        <Route path="brewery/:id" element={<BreweryDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
