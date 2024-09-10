import React from "react";
import { FcRating } from "react-icons/fc";

const ReviewCard = ({ review }) => {
  return (
    <div className="border border-rose-500 rounded-xl p-4">
      <div className="flex justify-center mb-4">
        <img
          src="https://avatar.iran.liara.run/public/20"
          className="w-16  h-16 rounded-full"
          alt="Reviewer"
        />
      </div>
      <div className="flex flex-col pb-4">
        <p>By {review?.reviewerName}</p>
        <p>{review?.reviewerEmail}</p>
      </div>
      <div className="flex space-x-2 items-center justify-start">
        <FcRating />
        <p>{review?.rating} stars</p>
      </div>
      <h4>{review?.comment}</h4>
    </div>
  );
};

export default ReviewCard;
