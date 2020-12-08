import React, { useEffect, useState } from "react";
import StarIcon from "@material-ui/icons/Star";
import styled from "styled-components";
import Product from "./Product";
import { useSelector } from "react-redux";

const PreviewContainer = styled.div`
  width: fit-content;
`;

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
  font-size: 14px;
`;

const StatsRating = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3px;
`;
const StatData = styled.span`
  margin-left: 1px;
`;

const DrinkThumbnail = styled.div`
  width: 230px;
  height: 230px;

  background-color: white;

  background-image: url("${(props) => props.image}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

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
  const config = useSelector((store) => store.config);

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
            <PreviewTitle>{product.name}</PreviewTitle>
            <PreviewSubtitle>{product.ABV}도</PreviewSubtitle>
          </PreviewInfo>
          <Stats>
            <StatsRating>
              <StarIcon
                fontSize="small"
                className="grey icon"
                onMouseOver={handleHover}
              />
              <StatData>{product.rating}</StatData>
            </StatsRating>
          </Stats>
        </InfoContainer>
      </PreviewContainer>
      {bgOn && <Product product={product} onBGToggle={handleClick} />}
    </>
  );
};

export default ProductPreview;
