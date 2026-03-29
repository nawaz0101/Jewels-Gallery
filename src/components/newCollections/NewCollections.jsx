import "./NewCollections.css";

const newCollections = [
  
  {
    id: 1,
    name: "Golden Royal Ring",
    price: 1299,
    image: "https://i.pinimg.com/1200x/b2/87/0d/b2870d2f62543f8a38507df13eb4c9ad.jpg",
  },
  {
    id: 2,
    name: "Elegant Necklace",
    price: 2499,
    image: "https://i.pinimg.com/1200x/cc/9b/60/cc9b6025d0b85bdd36d0bbb0e5117048.jpg",
  },
  {
    id: 3,
    name: "Diamond Earrings",
    price: 1999,
    image: "https://i.pinimg.com/736x/33/2c/18/332c18c2fdbc63d6a73ef04aa2739e6f.jpg",
  },
  {
    id: 4,
    name: "Luxury Bracelet",
    price: 1799,
    image: "https://i.pinimg.com/1200x/ef/fb/e9/effbe918805ee47a9cebfaa168cd2e4d.jpg",
  },
  {
    id: 5,
    name: "Wedding Special Set",
    price: 4999,
    image: "https://i.pinimg.com/736x/26/30/9c/26309c7f129a47361b10d06facef4a51.jpg",
  }

];

export default function NewCollections() {
  const phoneNumber = "917353364410"; // 👈 replace with your number

  const handleWhatsApp = (product) => {
    const message = `Hi, I'm interested in ${product.name} priced at ₹${product.price}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="new-collections">
      <h2 className="section-title">New Collections</h2>

      <div className="collection-grid">
        {newCollections.map((item) => (
          <div key={item.id} className="collection-card">
            <img src={item.image} alt={item.name} />

            <div className="collection-info">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>

              <button onClick={() => handleWhatsApp(item)}>
                Buy on WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}