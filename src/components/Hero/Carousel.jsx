import { useEffect, useState } from "react";
import "./Carousel.css";

const images = [
  "https://i.pinimg.com/1200x/79/f6/bf/79f6bfb513cc607ebfd3bdc02d186bfd.jpg",
  "https://images.unsplash.com/photo-1602752250015-52934bc45613",
  "https://images.unsplash.com/photo-1588444650700-6b6f3f2f2f0c",
  "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
  "https://images.unsplash.com/photo-1617038220319-276d3cfab638"
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {images.map((img, i) => (
        <div
          key={i}
          className={`slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}