import { Link, useParams, useOutletContext } from "react-router-dom";

function formatPhone(phone) {
  if (!phone) return null;
  const digits = phone.replace(/\D/g, "");
  if (digits.length !== 10) return phone;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function BreweryDetail() {
  const { id } = useParams();
  const { breweries } = useOutletContext();
  const brewery = breweries.find((b) => b.id === id);

  if (!brewery) {
    return (
      <div className="detail-view">
        <Link to="/" className="back-link">
          ← Back to Dashboard
        </Link>
        <p className="status-message">Brewery not found.</p>
      </div>
    );
  }

  const address = [brewery.address_1, brewery.city, brewery.state_province, brewery.postal_code]
    .filter(Boolean)
    .join(", ");

  const mapsUrl =
    brewery.latitude && brewery.longitude
      ? `https://www.google.com/maps?q=${brewery.latitude},${brewery.longitude}`
      : brewery.street
      ? `https://www.google.com/maps?q=${encodeURIComponent(address)}`
      : null;

  return (
    <div className="detail-view">
      <Link to="/" className="back-link">
        ← Back to Dashboard
      </Link>

      <div className="detail-card">
        <div className="detail-header">
          <h1>{brewery.name}</h1>
          <span className="brewery-type-badge">{brewery.brewery_type}</span>
        </div>

        <dl className="detail-grid">
          <div className="detail-item">
            <dt>Address</dt>
            <dd>{address || "Not available"}</dd>
          </div>

          <div className="detail-item">
            <dt>Country</dt>
            <dd>{brewery.country || "Not available"}</dd>
          </div>

          <div className="detail-item">
            <dt>Phone</dt>
            <dd>{formatPhone(brewery.phone) || "Not available"}</dd>
          </div>

          <div className="detail-item">
            <dt>Coordinates</dt>
            <dd>
              {brewery.latitude && brewery.longitude
                ? `${Number(brewery.latitude).toFixed(4)}, ${Number(brewery.longitude).toFixed(4)}`
                : "Not available"}
            </dd>
          </div>
        </dl>

        <div className="detail-actions">
          {brewery.website_url && (
            <a href={brewery.website_url} target="_blank" rel="noreferrer" className="detail-link">
              🔗 Visit website
            </a>
          )}
          {mapsUrl && (
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="detail-link">
              📍 View on map
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default BreweryDetail;
