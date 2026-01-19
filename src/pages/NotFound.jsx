// pages/NotFound.jsx
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="nf-minimal">
      {/* Background text */}
      <div className="nf-bg">404</div>

      {/* Foreground content */}
      <div className="nf-content">
        <h1>Page not found</h1>
        <p>
          The page you are trying to access does not exist or may have been moved.
        </p>

        <button onClick={() => navigate("/")}>
          Return to homepage
        </button>
      </div>
    </section>
  );
}
