export const filterProducts = (products, filters) => {
  return products.filter((product) => {
    const matchCategory =
      !filters.category || product.category === filters.category;

    const matchOccasion =
      !filters.occasion || product.occasion === filters.occasion;

    let matchPrice = true;

    if (filters.price === "250-1000") {
      matchPrice = product.price >= 250 && product.price <= 1000;
    } else if (filters.price === "1000-2500") {
      matchPrice = product.price >= 1000 && product.price <= 2500;
    } else if (filters.price === "2500-5000") {
      matchPrice = product.price >= 2500 && product.price <= 5000;
    }

    return matchCategory && matchOccasion && matchPrice;
  });
};