import { useState } from "react";
import useProducts from "../../hooks/useProducts";
import ProductCard from "../homepage/ProductCard";
import Pagination from "../homepage/Pagination";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 8;
  const skip = (currentPage - 1) * limit;
  const { products, loading, error } = useProducts(limit, skip);
  const totalPages = Math.ceil(194 / limit);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-full bg-gray-200  py-8 lg:py-28 lg:px-32 px-4">
      <div className="text-black text-center pb-8 lg:pb-16 ">
        <h3 className="text-2xl lg:text-4xl font-semibold">
          Featured Products
        </h3>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
