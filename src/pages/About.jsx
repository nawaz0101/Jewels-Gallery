import { useNavigate } from "react-router-dom";
import "../styles/about.css";

export default function About() {
    const navigate = useNavigate();
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <h1>Timeless Elegance</h1>
        <p>Crafting jewelry that tells your story</p>
      </section>

      {/* STORY */}
      <section className="about-section">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            We are passionate about creating jewelry that blends tradition with
            modern elegance. Each piece is thoughtfully designed and crafted to
            celebrate life’s most precious moments.
          </p>
        </div>
      </section>

      {/* WHY US */}
      <section className="about-section dark">
        <h2>Why Choose Us</h2>
        <div className="about-grid">
          <div className="about-card">
            <h3>Premium Quality</h3>
            <p>Only the finest materials and craftsmanship.</p>
          </div>
          <div className="about-card">
            <h3>Elegant Designs</h3>
            <p>Modern styles with timeless beauty.</p>
          </div>
          <div className="about-card">
            <h3>Trusted Brand</h3>
            <p>Loved by hundreds of happy customers.</p>
          </div>
        </div>
      </section>

      {/* CRAFTSMANSHIP */}
      <section className="about-section">
        <div className="about-text">
          <h2>Our Craftsmanship</h2>
          <p>
            Every piece is handcrafted with precision and care. We focus on
            intricate detailing and flawless finishing to ensure unmatched
            quality.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Discover Our Collection</h2>
        <button onClick={()=>navigate("/")} >Explore Now</button>
      </section>

    </div>
  );
}