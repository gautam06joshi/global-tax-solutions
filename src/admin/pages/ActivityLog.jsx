import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";

export default function ActivityLog() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const q = query(
        collection(db, "activityLogs"),
        orderBy("timestamp", "desc")
      );
      const snapshot = await getDocs(q);
      setLogs(snapshot.docs.map(d => d.data()));
    };

    fetchLogs();
  }, []);

  return (
    <div>
      <h1>Activity Log</h1>

      {logs.map((log, i) => (
        <div key={i} className="log-row">
          <p>{log.action}</p>
          <span>
            {log.timestamp?.toDate().toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
}
