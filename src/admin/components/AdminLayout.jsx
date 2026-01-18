import Sidebar from "./Sidebar";
import AdminHeader from "./AdminHeader";
import "../styles/layout.css";

export default function AdminLayout({ children }) {
  return (
    <div className="admin-root">
      <Sidebar />
      <div className="admin-main">
        <AdminHeader />
        <div className="admin-content">{children}</div>
      </div>
    </div>
  );
}
