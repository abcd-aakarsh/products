import React, { useEffect } from "react";

const FeaturedProducts = () => {
  const getProducts = async () => {
    const productslist = await fetch("https://dummyjson.com/products");
    const result = await productslist.json();
    console.log(result.products);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="w-full bg-gray-100">
      <div className="max-w-[1420px] mx-auto   py-8 lg:py-28 lg:px-32 px-4">
        <div className="text-black text-center pb-8 lg:pb-16 ">
          <h3 className="text-2xl lg:text-4xl font-semibold">
            Featured Products
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
