import React, { useEffect, useState } from "react";
import "./ProductPreview.css";
import MessageIcon from "@material-ui/icons/Message";
import StarIcon from "@material-ui/icons/Star";
import styled from "styled-components";

const DrinkThunbnail = styled.div`
  width: 220px;
  height: 220px;

  background-image: url("${(props) => props.image}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 10px;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
    transition: all 0.3s;
  }
`;

const ProductPreview = ({ product, onPreviewClick }) => {
  const handleClick = (id) => {
    // onPreviewClick(product.id);
  };

  // const [rating, setRating] = useState(0);

  const handleHover = (e) => {};

  useEffect(() => {
    // let ratingSum = 0;
    // product.ratings.forEach((rating) => {
    //   ratingSum += rating;
    // });
    // ratingSum /= product.ratings.length;
    // setRating(Math.floor(ratingSum * 10) / 10);
  }, []);

  return (
    <div className="product-preview" onClick={handleClick}>
      {/* <div className="preview-image-container">
        <img
          className="preview-image"
          src={product.image}
          alt={product.title}
        />
        <div className="product-rating">{rating}★</div>
      </div> */}
      <DrinkThunbnail image={product.image}></DrinkThunbnail>
      <div className="info-container">
        <div className="preview-info">
          <div className="preview-title">{product.title}</div>
          <div className="preview-subtitle">
            {product.type} / {product.degree}도
          </div>
        </div>
        <div className="preview-statistics">
          <div className="preview-comments">
            <MessageIcon
              fontSize="small"
              className="grey icon"
              onMouseOver={handleHover}
            />
            <div className="font-cnts grey">
              <p>0</p>
            </div>
          </div>
          <div className="preview-ratings">
            <StarIcon
              fontSize="small"
              className="grey icon"
              onMouseOver={handleHover}
            />
            <div className="font-cnts grey">
              <p>54</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
