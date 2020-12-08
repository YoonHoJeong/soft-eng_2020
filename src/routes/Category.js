import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { drinkApi } from "api";
import SearchResult from "components/SearchResult";
import sojuImage from "images/search-result/soju.jpg";
import beerImage from "images/search-result/beer.jpg";
import makgeolliImage from "images/search-result/makgeolli.jpg";
import Loader from "components/Loader";

const CategoryContainer = styled.div`
  width: 100%;
  height: 100%;

  background-color: white;
  width: 100%;
  height: 100%;
`;

const TitleContainer = styled.div`
  position: relative;

  width: 100%;
  height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleImageBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  opacity: 0.3;
`;
const TitleImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-image: url(${(props) => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const CategoryTitle = styled.div`
  position: relative;
  font-size: 40px;
  font-weight: 800;

  color: white;
`;

const CategorySubtitle = styled.div`
  position: relative;
  font-size: 15px;
  font-weight: 700;

  color: rgba(255, 255, 255, 0.8);
  margin-top: 5px;
`;

const Category = () => {
  const params = useParams();
  const [drinks, setDrinks] = useState([]);
  const [showDrinks, setShowDrinks] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);

  const [slogans] = useState({
    soju: '"이거 마시면.. 우리.. 사귀는거다?"',
    beer: '"맥주는 12잔까지 워밍업"',
    makgeolli: '"아이보리 매직~ 오 막걸리나"',
  });
  const [sloganAuthors] = useState({
    soju: "내 머리속의 지우개 - 정우성",
    beer: "멜로가 체질 - 천우희",
    makgeolli: "막걸리나 - 장범준",
  });
  const [sloganImages] = useState({
    soju: sojuImage,
    beer: beerImage,
    makgeolli: makgeolliImage,
  });

  const getDrinks = async () => {
    setLoading(true);
    const {
      data: { result },
    } = await drinkApi.getCategory(params["category_title"]);

    setDrinks(result);
    setShowDrinks(result);
    console.log(result);

    setLoading(false);
  };

  useEffect(() => {
    setCategory(params["category_title"]);
    getDrinks();
  }, [params]);

  return (
    <CategoryContainer>
      <TitleContainer>
        <TitleImageBack image={sloganImages[category]}></TitleImageBack>
        <TitleImage image={sloganImages[category]}></TitleImage>
        <CategoryTitle>{slogans[category]}</CategoryTitle>
        <CategorySubtitle>{sloganAuthors[category]}</CategorySubtitle>
      </TitleContainer>

      {loading ? <Loader /> : <SearchResult drinks={showDrinks} />}
    </CategoryContainer>
  );
};

export default Category;
