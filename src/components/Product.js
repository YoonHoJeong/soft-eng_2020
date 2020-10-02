import React, { useEffect, useRef } from "react";
import "./Product.css";

// product detail
const Product = ({ product, onBGToggle }) => {
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          onBGToggle();
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div ref={wrapperRef} className="product">
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
        <header className="product-header">
          <h4>술 먹고 쓴 리뷰들</h4>
          <div className="product-stars">★★★</div>
        </header>
        <br />
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
