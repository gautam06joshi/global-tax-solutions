import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import FormSubmissions from "./pages/FormSubmissions";
import AdminLayout from "./components/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import ContactLeads from "./pages/ContactLeads";


export default function AdminRoutes() {
  return (
    <Routes>
      {/* Login */}
      <Route path="/" element={<Login />} />

      {/* Dashboard */}
      <Route
        path="dashboard"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          </ProtectedRoute>
        }
      />

      {/* Forms */}
      <Route
        path="forms"
        element={
          <ProtectedRoute>
            <AdminLayout>
              <FormSubmissions />
            </AdminLayout>
          </ProtectedRoute>
        }
      />
      <Route
  path="contact-leads"
  element={
    <AdminLayout>
      <ContactLeads />
    </AdminLayout>
  }
/>

    </Routes>
  );
}
