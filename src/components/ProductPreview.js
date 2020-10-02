import React from "react";
import "./ProductPreview.css";

const ProductPreview = ({ product, onPreviewClick }) => {
  const handleClick = (id) => {
    onPreviewClick(product.id);
  };

  return (
    <div className="preview" onClick={handleClick}>
      <img className="preview-image" src={product.image} alt={product.title} />
      <div className="preview-info">
        <div className="preview-title">{product.title}</div>
        <div className="preview-content">
          {product.type} / {product.degree}도
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
