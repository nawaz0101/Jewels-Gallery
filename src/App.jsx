import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import MainLayout from "./layout/MainLayout";

export default function App() {
  const [search, setSearch] = useState("");
  const [scrollToProducts, setScrollToProducts] = useState(null);

  return (
    <MainLayout
      search={search}
      setSearch={setSearch}
      scrollToProducts={scrollToProducts}
    >
      <Routes>
        <Route path="/" element={<Home search={search} setScrollFn={setScrollToProducts}  />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </MainLayout>
  );
}
