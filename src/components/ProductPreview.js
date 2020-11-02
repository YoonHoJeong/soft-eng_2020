import React, { useEffect, useState } from "react";
import MessageIcon from "@material-ui/icons/Message";
import StarIcon from "@material-ui/icons/Star";
import styled from "styled-components";
import Product from "./Product";

const PreviewContainer = styled.div``;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 5px;
  padding: 0px 7px;
`;

const PreviewInfo = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  margin-top: 3px;
`;

const PreviewTitle = styled.h2`
  font-size: 17px;
  font-weight: 700;
`;

const PreviewSubtitle = styled.h3`
  font-size: 11px;
  opacity: 0.6;
  margin-top: 5px;
`;

const Stats = styled.div`
  display: flex;
  font-size: 0.8em;
`;
const StatsComment = styled.div`
  display: flex;
  align-items: center;
`;
const StatsRating = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3px;
`;

const DrinkThumbnail = styled.div`
  width: 230px;
  height: 230px;

  background-image: url("${(props) => props.image}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 8px;

  transition: box-shadow 0.3s;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
    // box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
`;

const ProductPreview = ({ product }) => {
  const [bgOn, setbgOn] = useState(false);

  const handleClick = () => {
    setbgOn(!bgOn);
  };

  const handleHover = (e) => {};

  useEffect(() => {}, []);

  return (
    <>
      <PreviewContainer>
        <DrinkThumbnail
          image={product.image}
          onClick={handleClick}
        ></DrinkThumbnail>
        <InfoContainer>
          <PreviewInfo>
            <PreviewTitle>{product.title}</PreviewTitle>
            <PreviewSubtitle>
              {product.category} / {product.degree}도
            </PreviewSubtitle>
          </PreviewInfo>
          <Stats>
            <StatsComment>
              <MessageIcon
                fontSize="small"
                className="grey icon"
                onMouseOver={handleHover}
              />
              <span>0</span>
            </StatsComment>
            <StatsRating>
              <StarIcon
                fontSize="small"
                className="grey icon"
                onMouseOver={handleHover}
              />
              <span>123</span>
            </StatsRating>
          </Stats>
        </InfoContainer>
      </PreviewContainer>
      {bgOn && <Product product={product} onBGToggle={handleClick} />}
    </>
  );
};

export default ProductPreview;
