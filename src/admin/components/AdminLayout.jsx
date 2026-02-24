import { useState } from "react";
import Sidebar from "./Sidebar";
import AdminHeader from "./AdminHeader";
import "../styles/layout.css";

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className={`admin-root ${sidebarOpen ? "" : "collapsed"}`}>
      <Sidebar />

      <div className="admin-main">
        <AdminHeader
  toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
  sidebarOpen={sidebarOpen}
/>

        <div className="admin-content">{children}</div>
      </div>
    </div>
  );
}
