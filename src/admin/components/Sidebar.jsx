import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";

export default function Sidebar() {
  return (
    <aside className="admin-sidebar">
      <div className="sidebar-brand">
        Global Tax<br />
        <span>Solutions</span>
      </div>

      <nav>
        <NavLink to="/admin/dashboard">Dashboard</NavLink>
        <NavLink to="/admin/forms">Form Submissions</NavLink>
      </nav>
    </aside>
  );
}
