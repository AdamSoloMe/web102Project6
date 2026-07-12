import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="header-logo">🍺</span>
        <div>
          <h1>Brewery Explorer</h1>
          <p>Breweries across the United States</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) => `sidebar-link${isActive ? " active" : ""}`}
        >
          📊 Dashboard
        </NavLink>
      </nav>

      <p className="sidebar-footnote">
        Data from the{" "}
        <a href="https://www.openbrewerydb.org/" target="_blank" rel="noreferrer">
          Open Brewery DB API
        </a>
      </p>
    </aside>
  );
}

export default Sidebar;
