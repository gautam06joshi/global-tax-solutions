// src/components/admin/AdminHeader.jsx
import { signOut } from "firebase/auth";
import { getAuthLazy } from "../../firebase";
import "../styles/header.css";

export default function AdminHeader() {
  const logout = async () => {
    try {
      // 🔥 Lazy-load Firebase Auth only when logging out
      const auth = await getAuthLazy();

      await signOut(auth);

      // Redirect after logout
      window.location.href = "/admin";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="admin-header">
      <h3>Admin Panel</h3>
      <button onClick={logout}>Logout</button>
    </header>
  );
}
