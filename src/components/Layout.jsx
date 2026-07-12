import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Layout({ breweries, loading, error }) {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        {loading && <p className="status-message">Loading breweries...</p>}
        {error && <p className="status-message error">Error: {error}</p>}
        {!loading && !error && <Outlet context={{ breweries }} />}
      </main>
    </div>
  );
}

export default Layout;
