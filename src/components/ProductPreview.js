import React, { useEffect, useState } from "react";
import "./ProductPreview.css";

const ProductPreview = ({ product, onPreviewClick }) => {
  const handleClick = (id) => {
    onPreviewClick(product.id);
  };

  const [rating, setRating] = useState(0);

  useEffect(() => {
    let ratingSum = 0;
    product.ratings.forEach((rating) => {
      ratingSum += rating;
    });
    ratingSum /= product.ratings.length;
    setRating(Math.floor(ratingSum * 10) / 10);
  }, []);

  return (
    <div className="product-preview" onClick={handleClick}>
      <div className="preview-image-container">
        <img
          className="preview-image"
          src={product.image}
          alt={product.title}
        />
        <div className="product-rating">{rating}★</div>
      </div>
      <div className="preview-info">
        <div className="preview-title">{product.title}</div>
        <div className="preview-subtitle">
          {product.type} / {product.degree}도
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
