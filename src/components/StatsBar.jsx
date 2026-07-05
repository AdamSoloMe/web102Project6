import StatCard from "./StatCard";

function StatsBar({ breweries }) {
  const totalCount = breweries.length;

  const uniqueStates = new Set(
    breweries.map((b) => b.state).filter(Boolean)
  ).size;

  const typeCounts = breweries.reduce((counts, b) => {
    const type = b.brewery_type || "unknown";
    counts[type] = (counts[type] || 0) + 1;
    return counts;
  }, {});
  const mostCommonType =
    Object.entries(typeCounts).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "n/a";

  return (
    <section className="stats-bar">
      <StatCard emoji="🏭" label="Total Breweries" value={totalCount} />
      <StatCard emoji="🗺️" label="States Represented" value={uniqueStates} />
      <StatCard
        emoji="⭐"
        label="Most Common Type"
        value={mostCommonType}
      />
    </section>
  );
}

export default StatsBar;
