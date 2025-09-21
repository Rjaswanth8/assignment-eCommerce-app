import React from "react";
import "./Dashboard.css";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";

const Dashboard = ({ darkMode }) => {
  // Metric cards
  const metrics = [
    {
      title: "Customers",
      value: "3,781",
      change: "+11.01%",
      positive: true,
      highlight: true,
    },
    {
      title: "Orders",
      value: "1,219",
      change: "-0.03%",
      positive: false,
      highlight: false,
    },
    {
      title: "Revenue",
      value: "$695",
      change: "+15.03%",
      positive: true,
      highlight: false,
    },
    {
      title: "Growth",
      value: "30.1%",
      change: "+6.08%",
      positive: true,
      highlight: true,
    },
  ];

  // Locations for Revenue by Location (percent used for bar width)
  const locations = [
    { city: "New York", value: "72k", percent: 75, fill: "#a8c5da" },
    { city: "San Francisco", value: "39k", percent: 40, fill: "#a8c5da" },
    { city: "Singapore", value: "25k", percent: 45, fill: "#a8c5da" },
    { city: "Sydney", value: "61k", percent: 60, fill: "#a8c5da" },
  ];

  // Revenue Chart Data
  const revenueData = [
    { name: "Jan", current: 10000000, previous: 10000000 },
    { name: "Feb", current: 9000000, previous: 16000000 },
    { name: "Mar", current: 11000000, previous: 12000000 },
    { name: "Apr", current: 15000000, previous: 10000000 },
    { name: "May", current: 20000000, previous: 16000000 },
    { name: "Jun", current: 22000000, previous: 23000000 },
  ];

  const transformedRevenueData = revenueData.map((d, i) => ({
    ...d,
    currentSolid: i <= 3 ? d.current : null,
    currentDotted: i >= 3 ? d.current : null,
  }));

  // Projections vs Actuals Data (example)
  const chartData = [
    { name: "Jan", value: 20, projection: 26 },
    { name: "Feb", value: 25, projection: 28 },
    { name: "Mar", value: 22, projection: 24 },
    { name: "Apr", value: 28, projection: 30 },
    { name: "May", value: 18, projection: 20 },
    { name: "Jun", value: 23, projection: 27 },
  ];

  // Transform data: split actual vs projection difference
  const data = chartData.map((d) => ({
    name: d.name,
    actual: d.value,
    projectionDiff: d.projection > d.value ? d.projection - d.value : 0,
  }));

  // Sales Data
  const salesData = [
    { name: "Direct", value: 300.56, color: "#1C1C1C" },
    { name: "Affiliate", value: 135.18, color: "#BAEDBD" },
    { name: "Sponsored", value: 154.02, color: "#95A4FC" },
    { name: "E-mail", value: 48.96, color: "#B1E3FF" },
  ];

  // Top Products
  const topProducts = [
    {
      name: "ASOS Ridley High Waist",
      price: "$79.49",
      qty: 82,
      amount: "$6,518.18",
    },
    {
      name: "Marco Lightweight Shirt",
      price: "$128.50",
      qty: 37,
      amount: "$4,754.50",
    },
    {
      name: "Half Sleeve Shirt",
      price: "$39.99",
      qty: 64,
      amount: "$2,559.36",
    },
    {
      name: "Lightweight Jacket",
      price: "$20.00",
      qty: 184,
      amount: "$3,680.00",
    },
    { name: "Marco Shoes", price: "$79.49", qty: 64, amount: "$1,965.81" },
  ];

  return (
    <div className={`dashboard ${darkMode ? "dark" : "light"}`}>
      <h2 className="section-title">eCommerce</h2>

      {/* Metric Cards */}
      <div className="top-grid">
        <div className="metrics-grid">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className={`metric-card card ${
                metric.highlight ? "highlight" : ""
              }`}
            >
              <h3>{metric.title}</h3>
              <div className="metric-value">{metric.value}</div>
              <div
                className={`metric-change ${
                  metric.positive ? "positive" : "negative"
                }`}
              >
                {metric.positive ? <FiArrowUpRight /> : <FiArrowDownRight />}
                {metric.change}
              </div>
            </div>
          ))}
        </div>

        {/* Projections vs Actuals */}
        <div className="card chart-card">
          <h3 className="chart-title">Projections vs Actuals</h3>
          <div style={{ width: "100%", height: "168px" }}>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart
                data={data}
                margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
                barSize={35}
              >
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis
                  stroke="#6b7280"
                  tickFormatter={(val) => `${val}M`}
                  ticks={[0, 10, 20, 30]}
                />
                <Tooltip formatter={(val) => `${val}M`} />

                {/* Actuals */}
                <Bar dataKey="actual" stackId="a" fill="#A8C5DA" />

                {/* Projection extension */}
                <Bar
                  dataKey="projectionDiff"
                  stackId="a"
                  fill="#dae9fcff"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Revenue Section */}
      <div className="revenue-section">
        {/* Revenue Line Chart */}
        <div className="revenue-chart card">
          <div
            className="chart-header"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h3 className="chart-title">Revenue</h3>
            <div
              className="week-stats"
              style={{ display: "flex", gap: "16px", alignItems: "center" }}
            >
              {/* Current Week */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "#000",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                ></span>
                <span>Current Week $58,211</span>
              </div>
              {/* Previous Week */}
              <div
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "#A8C5DA",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                ></span>
                <span>Previous Week $68,768</span>
              </div>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={250}>
            <LineChart
              data={transformedRevenueData}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis
                stroke="#6b7280"
                tickFormatter={(val) => `${val / 1000000}M`}
                ticks={[0, 10000000, 20000000, 30000000]}
              />
              <Tooltip formatter={(val) => `$${val?.toLocaleString()}`} />
              <Line
                type="monotone"
                dataKey="previous"
                stroke="#A8C5DA"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="currentSolid"
                stroke="#000"
                strokeWidth={3}
                dot={false}
                connectNulls
              />
              <Line
                type="monotone"
                dataKey="currentDotted"
                stroke="#000"
                strokeWidth={3}
                strokeDasharray="5 5"
                dot={false}
                connectNulls
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue by Location */}
        <div className="revenue-map card">
          <h3>Revenue by Location</h3>
          <div className="map-container">
            <img src="/world-map.png" alt="World map" className="world-map" />
          </div>
          {locations.map((loc, idx) => (
            <div key={idx} className="location-row">
              <div className="location-top">
                <span>{loc.city}</span>
                <span>{loc.value}</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${loc.percent}%`, background: loc.fill }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Products + Sales */}
      <div className="products-sales-section">
        {/* Top Products Table */}
        <div className="card top-products">
          <h3 className="section-subtitle">Top Selling Products</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((p, idx) => (
                <tr key={idx}>
                  <td>{p.name}</td>
                  <td>{p.price}</td>
                  <td>{p.qty}</td>
                  <td>{p.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Total Sales Donut */}
        <div className="card total-sales">
          <h3 className="section-subtitle">Total Sales</h3>
          <ResponsiveContainer width="100%" height={150}>
            <PieChart>
              <Pie
                data={salesData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                paddingAngle={3}
                dataKey="value"
              >
                {salesData.map((entry, idx) => (
                  <Cell key={`cell-${idx}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="donut-center">38.6%</div>
          <div className="sales-legend">
            {salesData.map((s, idx) => (
              <div key={idx} className="legend-row">
                <span
                  className="legend-dot"
                  style={{ background: s.color }}
                ></span>
                <span>{s.name}</span>
                <span>{`$${s.value.toFixed(2)}`}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
