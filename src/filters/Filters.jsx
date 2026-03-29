import "./Filters.css";

export default function Filters({ filters, setFilters, resetFilters }) {
  return (
    <div className="filters">
      <div className="filters-header">
        <h3>Filters</h3>
        <button className="reset-btn" onClick={resetFilters}>
          Reset
        </button>
      </div>

      {/* CATEGORY */}
      <div className="filter-group">
        <label>Category</label>
        <select
          value={filters.category}
          onChange={(e) =>
            setFilters({ ...filters, category: e.target.value })
          }
        >
          <option value="">All</option>
          <option>Rings</option>
          <option>Necklace</option>
          <option>Earrings</option>
          <option>Bracelets</option>
        </select>
      </div>

      {/* PRICE */}
      <div className="filter-group">
        <label>Price</label>
        <select
          value={filters.price}
          onChange={(e) =>
            setFilters({ ...filters, price: e.target.value })
          }
        >
          <option value="">All</option>
          <option value="250-1000">₹250 - ₹1000</option>
          <option value="1000-2500">₹1000 - ₹2500</option>
          <option value="2500-5000">₹2500 - ₹5000</option>
        </select>
      </div>

      {/* OCCASION */}
      <div className="filter-group">
        <label>Occasion</label>
        <select
          value={filters.occasion}
          onChange={(e) =>
            setFilters({ ...filters, occasion: e.target.value })
          }
        >
          <option value="">All</option>
          <option>Wedding</option>
          <option>Daily Wear</option>
          <option>Festive</option>
          <option>Party</option>
        </select>
      </div>
    </div>
  );
}