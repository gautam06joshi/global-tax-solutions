import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Mail,
} from "lucide-react";
import "../styles/sidebar.css";

export default function Sidebar() {
  return (
    <aside className="admin-sidebar">
      <div className="sidebar-brand">
  <div className="brand-full">
    <span className="brand-title">GLOBAL TAX</span>
    <span className="brand-sub">Solutions</span>
  </div>

  
</div>


      <div className="sidebar-section">NAVIGATION</div>

      <nav className="sidebar-nav">
        <NavLink to="/admin/dashboard" className="sidebar-link">
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/admin/forms" className="sidebar-link">
          <FileText size={18} />
          <span>Form Submissions</span>
        </NavLink>

        <NavLink to="/admin/contact-leads" className="sidebar-link">
          <Mail size={18} />
          <span>Contact Leads</span>
        </NavLink>
      </nav>
    </aside>
  );
}
