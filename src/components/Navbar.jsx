import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../style/Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <nav className={`navbar navbar-expand-lg px-4 ${scrolled ? "navbar-transparent" : "navbar-solid"}`}>
      <div className="d-flex align-items-center w-100">
        {/* Back Button (not on Home) */}
        {!isHome && (
          <button className="btn btn-back me-3" onClick={() => navigate(-1)}>
            ⬅ Back
          </button>
        )}

        <Link className="navbar-brand fw-bold me-auto" to="/">
          Rick & Morty Explorer
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
