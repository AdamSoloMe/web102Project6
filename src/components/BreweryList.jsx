import { Link } from "react-router-dom";

function BreweryList({ breweries }) {
  if (breweries.length === 0) {
    return <p className="empty-state">No breweries match your search and filters.</p>;
  }

  return (
    <ul className="brewery-list">
      {breweries.map((brewery) => (
        <li key={brewery.id} className="brewery-row">
          <Link to={`/brewery/${brewery.id}`} className="brewery-row-link">
            <div className="brewery-main">
              <span className="brewery-name">{brewery.name}</span>
              <span className="brewery-type-badge">{brewery.brewery_type}</span>
            </div>
            <div className="brewery-details">
              <span>
                📍 {brewery.city}, {brewery.state}
              </span>
            </div>
          </Link>
          {brewery.website_url && (
            <a
              href={brewery.website_url}
              target="_blank"
              rel="noreferrer"
              className="brewery-row-website"
            >
              🔗 Website
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}

export default BreweryList;
