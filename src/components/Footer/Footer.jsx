import "../../styles/footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <h2>Jewels Gallery</h2>
          <p>Elegance crafted for every occasion.</p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/testimonials">Testimonials</Link>
        </div>

        {/* CATEGORIES */}
        <div className="footer-links">
          <h3>Categories</h3>
          <p>Rings</p>
          <p>Necklace</p>
          <p>Earrings</p>
          <p>Bracelets</p>
        </div>

        {/* SOCIAL */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <span>Instagram</span>
            <span>Facebook</span>
            <span>WhatsApp</span>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 Jewels Gallery. All rights reserved.</p>
      </div>

    </footer>
  );
}