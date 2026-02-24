import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "../styles/dashboard.css";

export default function Dashboard() {
  const [stats, setStats] = useState({
  total: 0,
  today: 0,
  yesterday: 0,
  week: 0,
  lastWeek: 0,
  month: 0,
  topService: "",
});


  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [provinceStats, setProvinceStats] = useState([]);


  useEffect(() => {
    const fetchStats = async () => {
      try {
        const snapshot = await getDocs(collection(db, "formSubmissions"));

        const now = new Date();
        const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const startOfYesterday = new Date(startOfToday);
        startOfYesterday.setDate(startOfToday.getDate() - 1);

        const startOfWeek = new Date(startOfToday);
        startOfWeek.setDate(startOfToday.getDate() - 7);

        const startOfLastWeek = new Date(startOfToday);
        startOfLastWeek.setDate(startOfToday.getDate() - 14);

        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

        let total = 0;
        let today = 0;
        let yesterday = 0;
        let week = 0;
        let lastWeek = 0;
        let month = 0;

        const dailyCounts = {};
        const serviceCounts = {};
        const provinceCounts = {};


        snapshot.forEach((doc) => {
          const data = doc.data();
          if (!data.createdAt) return;
          if (data.service) {
  serviceCounts[data.service] =
    (serviceCounts[data.service] || 0) + 1;
}

if (data.province) {
  provinceCounts[data.province] =
    (provinceCounts[data.province] || 0) + 1;
}



          const date = data.createdAt.toDate();
          total++;

          const dateKey = date.toLocaleDateString("en-CA");
          dailyCounts[dateKey] = (dailyCounts[dateKey] || 0) + 1;

          if (date >= startOfToday) today++;
          else if (date >= startOfYesterday) yesterday++;

          if (date >= startOfWeek) week++;
          else if (date >= startOfLastWeek) lastWeek++;

          if (date >= startOfMonth) month++;
        });

        // Build last 7 days chart
        const chart = [];
        for (let i = 6; i >= 0; i--) {
          const d = new Date();
          d.setDate(now.getDate() - i);
          const key = d.toLocaleDateString("en-CA");

          chart.push({
            day: d.toLocaleDateString("en-CA", { weekday: "short" }),
            enquiries: dailyCounts[key] || 0,
          });
        }

        const topService =
  Object.entries(serviceCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "—";

  const provinceArray = Object.entries(provinceCounts)
  .map(([name, count]) => ({ name, count }))
  .sort((a, b) => b.count - a.count);

setProvinceStats(provinceArray);



        setStats({
  total,
  today,
  yesterday,
  week,
  lastWeek,
  month,
  topService,
});

        setChartData(chart);
      } catch (err) {
        console.error("Dashboard error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p className="muted">Global Tax Solutions – Admin Overview</p>

      {/* STATS */}
      <div className="stats-grid">
        <StatCard
          title="Today"
          value={stats.today}
          compare={stats.today - stats.yesterday}
          loading={loading}
          color="green"
        />

        <StatCard
          title="Last 7 Days"
          value={stats.week}
          compare={stats.week - stats.lastWeek}
          loading={loading}
          color="purple"
        />

        <StatCard
          title="This Month"
          value={stats.month}
          loading={loading}
          color="orange"
        />

        <StatCard
          title="Total Enquiries"
          value={stats.total}
          loading={loading}
          color="blue"
        />

        <StatCard
  title="Most Requested Service"
  value={stats.topService}
  loading={loading}
  color="blue"
/>

      </div>

      {/* CHART */}
      <div className="chart-card">
        <h3>Enquiries (Last 7 Days)</h3>

        {loading ? (
          <div className="skeleton" style={{ height: 220 }} />
        ) : (

          <ResponsiveContainer width="100%" height={300}>
  <ComposedChart data={chartData}>
    
    <XAxis
      dataKey="day"
      tick={{ fill: "#94a3b8", fontSize: 12 }}
      axisLine={false}
      tickLine={false}
    />

    <YAxis
      allowDecimals={false}
      tick={{ fill: "#94a3b8", fontSize: 12 }}
      axisLine={false}
      tickLine={false}
    />

    <Tooltip
      contentStyle={{
        background: "var(--card)",
        borderRadius: "12px",
        border: "1px solid var(--border)",
      }}
    />

    {/* Light gray background bars */}
    <Bar
      dataKey="enquiries"
      fill="#e2e8f0"
      radius={[8, 8, 0, 0]}
      barSize={22}
    />

    {/* Blue bars */}
    <Bar
      dataKey="enquiries"
      fill="#2563eb"
      radius={[8, 8, 0, 0]}
      barSize={12}
    />

    {/* Smooth curve line */}
    <Line
      type="monotone"
      dataKey="enquiries"
      stroke="#94a3b8"
      strokeWidth={3}
      dot={false}
    />
  </ComposedChart>
</ResponsiveContainer>

          
        )}
      </div>

      <div className="chart-card">
  <h3>Enquiries by Province</h3>

  {loading ? (
    <div className="skeleton" style={{ height: 160 }} />
  ) : (
    provinceStats.slice(0, 5).map((item) => (
      <div key={item.name} className="province-row">
        <span>{item.name}</span>
        <span>{item.count}</span>
      </div>
    ))
  )}
</div>

    </div>
  );
}

import { DollarSign, CalendarDays, BarChart3, Star } from "lucide-react";

function StatCard({ title, value, compare, loading, color }) {

  const iconMap = {
    green: <CalendarDays size={18} />,
    purple: <BarChart3 size={18} />,
    orange: <Star size={18} />,
    blue: <DollarSign size={18} />,
  };

  return (
    <div className={`stat-card ${color}`}>
      <div className="stat-top">
        <div className="stat-icon">
          {iconMap[color]}
        </div>

        <div className="stat-content">
          {loading ? (
            <div className="skeleton" style={{ height: 28 }} />
          ) : (
            <>
              <h2 className="stat-value">{value}</h2>
              <p className="stat-title">{title}</p>
            </>
          )}
        </div>

        <div className="stat-menu">⋮</div>
      </div>

      {!loading && compare !== undefined && (
        <div className="stat-bottom">
          <span className="progress-label">
            {compare >= 0 ? "Increased" : "Decreased"}
          </span>
          <span className="progress-value">
            {Math.abs(compare)}
          </span>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${Math.min(Math.abs(compare) * 10, 100)}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
