import React, { useEffect, useRef, useState } from "react";
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

  const [rating, setRating] = useState(0);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const bgStyle = {
    backgroundImage: `url(${product.image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  useEffect(() => {
    let ratingSum = 0;
    product.ratings.forEach((rating) => {
      ratingSum += rating;
    });
    ratingSum /= product.ratings.length;
    setRating(Math.floor(ratingSum * 10) / 10);
  }, []);

  return (
    <div ref={wrapperRef} className="product">
      <div className="product-image-container" style={bgStyle}></div>

      <div className="product-info">
        <h4 className="product-title">{product.title}</h4>
        <div className="product-subtitle">
          {product.type} · {product.degree}도 · {rating}점
          <div className="product-stars">{}</div>
        </div>

        <ul className="reviews">
          <h4>Reviews</h4>
          <br />
          <li className="review-item">
            <div className="review-author">준식</div>
            <div className="review-content">준식식 아무무 출동~!@</div>
          </li>
          <li className="review-item">
            <div className="review-author">준식</div>
            <div className="review-content">준식식 아무무 출동~!@</div>
          </li>
          <li className="review-item">
            <div className="review-author">준식</div>
            <div className="review-content">준식식 아무무 출동~!@</div>
          </li>
        </ul>
        <div className="tags">
          {product.tags.map((tag, index) => (
            <span key={index} className="tag">
              #{tag}
            </span>
          ))}
        </div>
      </div>
      <button onClick={onBGToggle}>x</button>
    </div>
  );
};

export default Product;
