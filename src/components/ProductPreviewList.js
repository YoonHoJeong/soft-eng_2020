import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import ProductPreview from "./ProductPreview";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const itemLength = 230;
const slideCount = 4;
const wrapperPadding = 50;

const SliderWrapper = styled.div`
  position: relative;
  width: ${slideCount * (itemLength + 20) - 20}px;
  height: 280px;

  margin: 0px auto;
`;

const SliderShowArea = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const Slider = styled.ul`
  position: absolute;
  top: 0;
  left: ${wrapperPadding};
  width: ${(props) => props.count * (itemLength + 20) - 20}px;

  transition: left 0.5s;
`;
const PreviewItem = styled.li`
  width: 230px;
  float: left;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const Button = styled.button`
  position: absolute;
  ${(props) => (props.name === "prev" ? "left:-60px;" : "right:-60px;")}
  top: 90px;

  width: 50px;
  height: 50px;

  background-color: white;
  border-radius: 50%;
  border: none;

  outline: none;

  transition: all 0.2s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

const ProductPreviewList = ({ products }) => {
  const [productCount, setProductCount] = useState();
  const [currentIdx, setCurrentIdx] = useState(0);
  const slider = useRef();

  const moveSlide = (num) => {
    slider.current.style = `left: ${num * -250}px`;
    setCurrentIdx(num);
  };

  const handleClickPrev = (e) => {
    moveSlide(currentIdx - 1);
    if (currentIdx <= 0) {
      moveSlide(0);
    }
  };
  const handleClickNext = (e) => {
    moveSlide(currentIdx + 1);
    if (currentIdx + 4 >= productCount) {
      moveSlide(0);
    }
  };

  useEffect(() => {
    setProductCount(products.length);
  }, [products]);

  return (
    <SliderWrapper>
      <Button name="prev" onClick={handleClickPrev}>
        <ChevronLeftIcon fontSize="large" />
      </Button>
      <Button name="next" onClick={handleClickNext}>
        <ChevronRightIcon fontSize="large" />
      </Button>
      <SliderShowArea>
        <Slider ref={slider} count={productCount}>
          {products.map((product) => (
            <PreviewItem>
              <ProductPreview product={product}></ProductPreview>
            </PreviewItem>
          ))}
        </Slider>
      </SliderShowArea>
    </SliderWrapper>
  );
};

export default ProductPreviewList;
