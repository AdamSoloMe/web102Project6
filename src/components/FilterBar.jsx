function FilterBar({
  types,
  selectedType,
  onTypeChange,
  states,
  selectedState,
  onStateChange,
}) {
  return (
    <div className="filter-bar">
      <label className="filter-group">
        <span>Type</span>
        <select value={selectedType} onChange={(e) => onTypeChange(e.target.value)}>
          <option value="all">All Types</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>

      <label className="filter-group">
        <span>State</span>
        <select value={selectedState} onChange={(e) => onStateChange(e.target.value)}>
          <option value="all">All States</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default FilterBar;
