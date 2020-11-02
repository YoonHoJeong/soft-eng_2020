import React from "react";
import styled from "styled-components";
import ProductPreview from "./ProductPreview";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PreviewList = styled.ul`
  display: flex;
  padding: 0 55px;
  justify-content: center;
`;
const PreviewItem = styled.li`
  margin: 0px 10px;
`;

const settings = {
  // 아래 dots 줄 것인가
  dots: true,
  // 좌우 화살표 줄 것인가
  arrows: true,
  // 마지막 슬라이드에서 처음 슬라이스로
  infinite: true,
  speed: 300,
  // 한 번에 스크롤 몇 개 보여줄 건가(대개 1을 사용함)
  slidesToShow: 4,
  // 스크롤 할 때마다 몇 장씩 넘길 것인가
  slidesToScroll: 1,
  variableWidth: true,
  // 자동 넘김을 할 것인가. 한다면 스피드는?
  //   autoplay: false,
  //   autoplaySpeed: 4000,
  // 화면에 올리면 슬라이더가 자동으로 넘어가지 않음
  //   pauseOnHover: true,
  // 슬라이더를 넘기지 않고 fade in/out 하는 식으로 트랜지션 됨
  //   fade: true,
  // 레이지 로딩할 거야?
  lazyLoad: true,
};

const ProductPreviewList = ({ products }) => {
  return (
    <PreviewList>
      <Slider {...settings}>
        {products.map((product) => (
          <PreviewItem>
            <ProductPreview product={product} />
          </PreviewItem>
        ))}
      </Slider>
    </PreviewList>
  );
};

export default ProductPreviewList;
