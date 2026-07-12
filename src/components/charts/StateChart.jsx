import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function StateChart({ breweries }) {
  const counts = breweries.reduce((acc, b) => {
    if (!b.state) return acc;
    acc[b.state] = (acc[b.state] || 0) + 1;
    return acc;
  }, {});

  const data = Object.entries(counts)
    .map(([state, count]) => ({ state, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  return (
    <div className="chart-card">
      <h2>Top 10 States by Brewery Count</h2>
      <p className="chart-subtitle">Where breweries in this dataset are concentrated</p>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 8, right: 24, left: 8, bottom: 8 }}
        >
          <CartesianGrid horizontal={false} stroke="var(--chart-grid)" />
          <XAxis
            type="number"
            allowDecimals={false}
            tick={{ fill: "var(--chart-muted)", fontSize: 12 }}
            axisLine={{ stroke: "var(--chart-axis)" }}
            tickLine={false}
          />
          <YAxis
            type="category"
            dataKey="state"
            tick={{ fill: "var(--chart-muted)", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            width={100}
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
            labelStyle={{ color: "var(--text-h)", fontWeight: 600 }}
          />
          <Bar dataKey="count" name="Breweries" fill="var(--accent)" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StateChart;
