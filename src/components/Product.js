import React from "react";
import "./Product.css";

// product detail
const Product = ({ product, onBGToggle }) => {
  return (
    <div className="product">
      <div className="product-image-container">
        <img
          className="product-image"
          src={product.image}
          alt={product.title}
        />
        <div>
          <h4>
            {product.title} / {product.type} / {product.degree}도
          </h4>
        </div>
        <div className="tags">
          {product.tags.map((tag) => (
            <span className="tag">#{tag}</span>
          ))}
        </div>
      </div>

      <div className="product-info">
        <h4>술 먹고 쓴 리뷰들</h4>
        <ul className="review-list">
          <li className="review-item">
            <div className="review-author">
              <strong>준식</strong>
            </div>
            <div className="review-content">준식식 아무무 출동~!@</div>
          </li>
          <li className="review-item">
            <div className="review-author">
              <strong>준식</strong>
            </div>
            <div className="review-content">준식식 아무무 출동~!@</div>
          </li>
          <li className="review-item">
            <div className="review-author">
              <strong>준식</strong>
            </div>
            <div className="review-content">준식식 아무무 출동~!@</div>
          </li>
        </ul>
      </div>
      <button onClick={onBGToggle}>x</button>
    </div>
  );
};

export default Product;
