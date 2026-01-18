import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import {
  LineChart,
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
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={chartData}>
              <XAxis dataKey="day" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="enquiries"
                stroke="#2563eb"
                strokeWidth={2}
              />
            </LineChart>
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

function StatCard({ title, value, compare, loading, color }) {
  return (
    <div className={`stat-card ${color}`}>
      <p className="stat-title">{title}</p>

      {loading ? (
        <div className="skeleton" style={{ height: 32 }} />
      ) : (
        <>
          <h2 className="stat-value">{value}</h2>
          {compare !== undefined && (
            <span
              className={`trend ${compare >= 0 ? "up" : "down"}`}
            >
              {compare >= 0 ? "↑" : "↓"} {Math.abs(compare)}
            </span>
          )}
        </>
      )}
    </div>
  );
}
