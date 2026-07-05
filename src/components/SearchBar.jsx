function SearchBar({ query, onQueryChange }) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search breweries by name..."
      value={query}
      onChange={(e) => onQueryChange(e.target.value)}
    />
  );
}

export default SearchBar;
