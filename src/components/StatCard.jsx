function StatCard({ label, value, emoji }) {
  return (
    <div className="stat-card">
      <span className="stat-emoji">{emoji}</span>
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default StatCard;
