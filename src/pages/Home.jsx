import { useState, useRef, useEffect } from "react";
import Hero from "../components/Hero/Hero";
import Filters from "../filters/Filters";
import ProductGrid from "../components/product/ProductGrid";
import products from "../data/product";
import { filterProducts } from "../utils/filterUtils";
import NewCollections from "../components/newCollections/NewCollections";

export default function Home({search, setScrollFn}) {
  const [filters, setFilters] = useState({
    category: "",
    price: "",
    occasion: ""
  });

  const resetFilters = () => {
    setFilters({
      category: "",
      price: "",
      occasion: ""
    });
  };

const filteredProducts = filterProducts(products, filters).filter((product) =>
  product.name.toLowerCase().includes(search.toLowerCase())
);
  const productSectionRef = useRef(null);

  const scrollToProducts = () => {
    productSectionRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  };

  // 👇 expose to App
useEffect(() => {
  setScrollFn(() => scrollToProducts);
}, []);

  return (
    <>
      <Hero onExploreClick={scrollToProducts} />

      <NewCollections/>

      <div ref={productSectionRef} className="shop-section">
        <Filters
          filters={filters}
          setFilters={setFilters}
          resetFilters={resetFilters}
        />

        <ProductGrid products={filteredProducts} />
      </div>
    </>
  );
}