import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar({ search, setSearch, scrollToProducts }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      
      {/* TOP BAR */}
      <div className="nav-top">
        <h2 className="logo">Jewels Gallery</h2>

        <div
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* SEARCH */}
      <div className="search-row">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search jewelry . . ."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                scrollToProducts && scrollToProducts();
                setOpen(false);
              }
            }}
          />
        </div>
      </div>

      {/* MENU */}
      <div className={`nav-links ${open ? "active" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/testimonials" onClick={() => setOpen(false)}>Testimonials</Link>
      </div>
    </nav>
  );
}