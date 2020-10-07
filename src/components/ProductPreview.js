import React from "react";
import "./ProductPreview.css";

const ProductPreview = ({ product, onPreviewClick }) => {
  const handleClick = (id) => {
    onPreviewClick(product.id);
  };

  return (
    <div className="product-preview" onClick={handleClick}>
      <img className="preview-image" src={product.image} alt={product.title} />
      <div className="preview-info">
        <div className="preview-title">{product.title}</div>
        <div className="preview-content">
          <div className="preview-content__basic">
            {product.type} / {product.degree}도
          </div>
          <div className="preview_content__rating">
            <p>4.5★</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
