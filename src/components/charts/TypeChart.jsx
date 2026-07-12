import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function TypeChart({ breweries }) {
  const counts = breweries.reduce((acc, b) => {
    const type = b.brewery_type || "unknown";
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  const data = Object.entries(counts)
    .map(([type, count]) => ({ type, count }))
    .sort((a, b) => b.count - a.count);

  return (
    <div className="chart-card">
      <h2>Breweries by Type</h2>
      <p className="chart-subtitle">Which brewery styles are most common nationwide</p>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} margin={{ top: 8, right: 12, left: 0, bottom: 32 }}>
          <CartesianGrid vertical={false} stroke="var(--chart-grid)" />
          <XAxis
            dataKey="type"
            tick={{ fill: "var(--chart-muted)", fontSize: 12 }}
            axisLine={{ stroke: "var(--chart-axis)" }}
            tickLine={false}
            angle={-30}
            textAnchor="end"
            interval={0}
          />
          <YAxis
            allowDecimals={false}
            tick={{ fill: "var(--chart-muted)", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            width={32}
          />
          <Tooltip
            cursor={{ fill: "var(--chart-hover)" }}
            contentStyle={{
              background: "var(--card-bg)",
              border: "1px solid var(--border)",
              borderRadius: 8,
              color: "var(--text-h)",
              fontSize: 13,
            }}
            labelStyle={{ color: "var(--text-h)", fontWeight: 600, textTransform: "capitalize" }}
          />
          <Bar dataKey="count" name="Breweries" fill="var(--accent)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TypeChart;
