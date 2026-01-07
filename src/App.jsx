import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/home/Header";
import { Footer } from "./components/home/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { ServicePage } from "./pages/service";
import TopStrip from "./components/home/TopStrip";
import { ContactPage } from "./pages/contactPage";
import OfficeMap from "./components/map/OfficeMap";
import ScrollToTop from "./components/scroll/scrolltotop";

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
     <TopStrip/>
      <Header />

      <main style={{ paddingTop: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/:serviceSlug" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
