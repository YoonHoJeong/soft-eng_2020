import React, { useEffect, useRef, useState } from "react";
import "./Product.css";
import styled from "styled-components";

const BackScreen = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.56);
  overflow-x: hidden;
  overflow-y: scroll;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// product detail
const Product = ({ product, onBGToggle }) => {
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          onBGToggle(false);
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
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };

  useEffect(() => {
    /* 평점 계산 */
    // let ratingSum = 0;
    // product.ratings.forEach((rating) => {
    //   ratingSum += rating;
    // });
    // ratingSum /= product.ratings.length;
    // setRating(Math.floor(ratingSum * 10) / 10);
  }, []);

  return (
    <BackScreen>
      <div ref={wrapperRef} className="product">
        <div className="product-image-container" style={bgStyle}>
          <div className="tags">
            {/* {product.tags.map((tag, index) => (
            <span key={index} className="tag">
              #{tag}
            </span>
          ))} */}
            tags
          </div>
        </div>

        <div className="product-info">
          <h4 className="product-title">{product.title}</h4>
          <div className="product-subtitle">
            {product.type} · {product.degree}도 · 점
            <div className="product-stars">{}</div>
          </div>

          <ul className="reviews">
            <h4>Reviews</h4>
            <li className="review-item">
              <div className="review-image-container">
                <img src="" alt="" />
              </div>
              <div className="review-author">아무개</div>
              <div className="review-content">아무개의 리뷰입니다.</div>
            </li>
            <li className="review-item">
              <div className="review-image-container">
                <img src="" alt="" />
              </div>
              <div className="review-author">아무개</div>
              <div className="review-content">아무개의 리뷰입니다.</div>
            </li>
            <li className="review-item">
              <div className="review-image-container">
                <img src="" alt="" />
              </div>
              <div className="review-author">아무개</div>
              <div className="review-content">아무개의 리뷰입니다.</div>
            </li>
          </ul>
        </div>
        <button
          onClick={() => {
            onBGToggle(false);
          }}
        >
          x
        </button>
      </div>
    </BackScreen>
  );
};

export default Product;
