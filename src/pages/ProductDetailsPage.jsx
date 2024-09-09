import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useProductDetails from "../hooks/useProductDetails";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { product, loading, error } = useProductDetails(id);
  const [mainImage, setMainImage] = useState(product?.images[0]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const discountedPrice = (
    product?.price -
    (product?.price * product?.discountPercentage) / 100
  ).toFixed(2);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={mainImage}
            alt={product?.title}
            className="w-full h-auto rounded-lg shadow-lg mb-4"
          />
          <div className="flex space-x-4">
            {product?.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className="w-16 h-16 rounded-lg cursor-pointer object-cover border border-gray-300 hover:border-blue-500 transition duration-300"
                onClick={() => handleThumbnailClick(img)}
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {product?.title}
          </h1>
          <div className="flex items-center space-x-4 mb-4">
            <p className="text-2xl font-bold text-blue-600">
              ${discountedPrice}
            </p>
            <p className="text-lg text-gray-500 line-through">
              ${product?.price}
            </p>
            <p className="text-sm text-gray-500">Rating: {product?.rating} ★</p>
          </div>
          <p className="text-gray-700 mb-4">{product?.description}</p>

          <p className="text-sm text-gray-500 mb-2">
            <strong>Category:</strong> <span>{product?.category}</span>
          </p>
          <p className="text-sm text-gray-500 mb-2">
            <strong>Brand:</strong> <span>{product?.brand}</span>
          </p>
          <p className="text-sm text-gray-500 mb-2">
            <strong>SKU:</strong> <span>{product?.sku}</span>
          </p>
          <p className="text-sm text-gray-500 mb-2">
            <strong>Weight:</strong> <span>{product?.weight}g</span>
          </p>
          <p className="text-sm text-gray-500 mb-2">
            <strong>Dimensions:</strong>{" "}
            <span>{`${product?.dimensions?.width} x ${product?.dimensions?.height} x ${product?.dimensions?.depth} cm`}</span>
          </p>
          <p className="text-sm text-gray-500 mb-2">
            <strong>Warranty:</strong>{" "}
            <span>{product?.warrantyInformation}</span>
          </p>
          <p className="text-sm text-gray-500 mb-2">
            <strong>Return Policy:</strong> <span>{product?.returnPolicy}</span>
          </p>
          <p className="text-sm text-gray-500 mb-2">
            <strong>Shipping Info:</strong>{" "}
            <span>{product?.shippingInformation}</span>
          </p>
          <p className="text-sm text-gray-500 mb-2">
            <strong>Availability:</strong>{" "}
            <span
              className={`font-semibold ${
                product?.availabilityStatus === "Low Stock"
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {product?.availabilityStatus}
            </span>
          </p>

          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
