import "./ProductCard.css";

export default function ProductCard({ product }) {
  const handleBuyClick = () => {
    const phoneNumber = "917353364410"; // <-- replace with your WhatsApp number (with country code, no +)

    const message = `
Hello, I'm interested in this product:

📦 Name: ${product.name}
💰 Price: ₹${product.price}
        `;

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="product-card">
      <div
        className="product-image"
        style={{ backgroundImage: `url(${product.image})` }}
      ></div>

      <div className="product-info">
        <h4>{product.name}</h4>
        <p>₹{product.price}</p>
        <button onClick={handleBuyClick}>Buy on WhatsApp</button>
      </div>
    </div>
  );
}
