import { useState } from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "../features/homepage/ProductCard";
import Pagination from "../features/homepage/Pagination";

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 20;
  const skip = (currentPage - 1) * limit;
  const { products, loading, error } = useProducts(limit, skip);
  const totalPages = Math.ceil(194 / limit);

  if (loading)
    return (
      <div className="min-w-60 flex items-center justify-center">
        Loading...
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="py-12 px-6 lg:px-16 max-w-screen-2xl mx-auto">
      <h1 className="text-2xl lg:text-4xl font-semibold text-center pb-6">
        Product Listing
      </h1>

      <div className="product-list grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ProductsPage;
