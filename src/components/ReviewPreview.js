import React from "react";

const ReviewPreview = ({ review }) => {
  return (
    <div className="review-preview">
      <div className="preview-image-container">
        <img className="preview-image" src={review.image} alt={review.author} />
      </div>
      <div className="preview-info">
        <div className="preview-author">{review.author}</div>
        <div className="preview-subtitle">
          {review.content} {review.rating}
        </div>
      </div>
    </div>
  );
};

export default ReviewPreview;
