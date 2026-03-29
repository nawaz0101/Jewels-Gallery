import "../styles/testimonials.css"
const testimonials = [
  { id: 1, name: "Aisha", text: "Absolutely stunning jewelry.", rating: 5 },
  { id: 2, name: "Rahul", text: "Premium quality and fast delivery.", rating: 4 },
  { id: 3, name: "Sneha", text: "Loved the design and finish.", rating: 5 },
  { id: 4, name: "Arjun", text: "Great experience overall.", rating: 4 },
  { id: 5, name: "Meera", text: "Highly recommended brand.", rating: 5 },
];

export default function Testimonials() {
  return (
    <div className="testimonials-page">
      <h1 className="title">What Our Customers Say</h1>

      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <div key={t.id} className="testimonial-card">
            <div className="stars">
              {"⭐".repeat(t.rating)}
            </div>

            <p className="text">"{t.text}"</p>

            <h3 className="name">— {t.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}