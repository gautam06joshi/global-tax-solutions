import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import "../styles/header.css";

export default function AdminHeader() {
  const logout = async () => {
    await signOut(auth);
    window.location.href = "/admin";
  };

  return (
    <header className="admin-header">
      <h3>Admin Panel</h3>
      <button onClick={logout}>Logout</button>
    </header>
  );
}
