import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useProductDetails from "../hooks/useProductDetails";
import { FiTruck } from "react-icons/fi";
import { FaBalanceScaleLeft, FaMedapps } from "react-icons/fa";
import { PiMoneyWavy } from "react-icons/pi";
import ReviewCard from "../features/productdetailspage/ReviewCard";
const ProductDetailsPage = () => {
  const { id } = useParams();
  const { product, loading, error } = useProductDetails(id);
  const [mainImage, setMainImage] = useState(product?.thumbnail);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const discountedPrice = (
    product?.price -
    (product?.price * product?.discountPercentage) / 100
  ).toFixed(2);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };
  console.log(product);

  return (
    <div className="max-w-7xl mx-auto lg:py-20 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
        <div>
          <img
            src={mainImage || product?.thumbnail}
            alt={product?.title}
            className="w-full p-4 h-auto border-4 border-black rounded-lg shadow-lg mb-4"
          />
          <div className="flex space-x-4">
            {product?.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className="w-16 h-16 rounded-lg cursor-pointer object-cover border-4 border-gray-300 hover:border-blue-500 transition duration-300"
                onClick={() => handleThumbnailClick(img)}
              />
            ))}
          </div>
        </div>

        <div className=" p-4">
          <h1 className="text-xl lg:text-3xl  font-bold text-gray-800 mb-8">
            {product?.title} (
            <span>{`${product?.dimensions?.width} x ${product?.dimensions?.height} x ${product?.dimensions?.depth} cm`}</span>
            )
          </h1>
          <div className="flex items-center space-x-4 mb-4">
            <p className="text-lg lg:text-2xl font-bold text-blue-600">
              New price : ${discountedPrice}
            </p>
            <p className=" text-sm lg:text-lg text-gray-500 line-through">
              <span className="text-xs lg:text-base text-gray-400">Mrp : </span>
              ${product?.price}
            </p>
            <p className="text-sm text-gray-500">Rating: {product?.rating} ★</p>
          </div>
          <p className="text-gray-800 text-base lg:text-lg mb-4">
            {product?.description}
          </p>
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-4  items-center justify-center lg:py-4">
            <div className="text-sm lg:text-base text-gray-500 mb-2 flex flex-col items-center gap-1">
              <FaBalanceScaleLeft className="inline-block mr-1 text-lg text-purple-600" />
              <span>Weight {product?.weight}g</span>
            </div>
            <div className="text-sm lg:text-base text-gray-500 mb-2 flex flex-col items-center gap-1">
              <FiTruck className="inline-block mr-1 text-lg text-green-600" />

              <span>{product?.shippingInformation}</span>
            </div>
            <div className="text-sm lg:text-base lg:text-center text-gray-500 mb-2 flex flex-col items-center gap-1">
              <PiMoneyWavy className="inline-block mr-1 text-lg text-red-600" />
              <span>{product?.returnPolicy}</span>
            </div>
            <div className="text-sm lg:text-base text-gray-500 mb-2 flex flex-col items-center gap-1">
              <FaMedapps className="inline-block mr-1 text-lg text-blue-600" />

              <span>{product?.warrantyInformation}</span>
            </div>
          </div>
          <div className="text-center py-8">
            <button className="bg-blue-500  text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="border-y-2 w-full p-4">
        <h3 className=" text-lg lg:text-2xl font-medium text-center">
          Reviews
        </h3>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
          {product?.reviews?.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
