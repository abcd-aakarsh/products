import React from "react";
import { NavLink } from "react-router-dom";

const ProductCard = ({ product }) => {
  const discountedPrice = (
    product?.price -
    (product?.price * product?.discountPercentage) / 100
  ).toFixed(2);

  return (
    <div className="border border-gray-300 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-4 flex flex-col items-center justify-center">
        <img
          src={product?.images[0]}
          className="w-48 h-48 object-cover mb-4"
          alt={product?.title}
          loading="lazy"
        />
        <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">
          {product?.title}
        </h3>

        <div className="text-center mb-4">
          <p className="text-xl font-bold text-blue-600">
            ${discountedPrice}{" "}
            <span className="text-gray-500 line-through">
              ${product?.price}
            </span>
          </p>
          <p className="text-sm text-gray-500">Rating: {product?.rating} ★</p>
        </div>

        <NavLink
          to={`/products/${product?.id}`}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          View Details
        </NavLink>
      </div>
    </div>
  );
};

export default ProductCard;
