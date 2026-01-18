import { HashRouter, Routes, Route, useLocation } from "react-router-dom";

import { Header } from "./components/home/Header";
import { Footer } from "./components/home/Footer";
import TopStrip from "./components/home/TopStrip";
import ScrollToTop from "./components/scroll/scrolltotop";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { ServicePage } from "./pages/service";
import { ContactPage } from "./pages/contactPage";

import AdminRoutes from "./admin/AdminRoutes";

function LayoutWrapper({ children }) {
  const location = useLocation();

  // Check if admin route
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <TopStrip />}
      {!isAdminRoute && <Header />}

      <main style={{ paddingTop: isAdminRoute ? "0" : "80px" }}>
        {children}
      </main>

      {!isAdminRoute && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <LayoutWrapper>
        <Routes>
          {/* Public Website Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/:serviceSlug" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Admin Routes */}
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Routes>
      </LayoutWrapper>
    </BrowserRouter>
  );
}
