import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { drinkApi } from "api";
import ProductPreviewList from "components/ProductPreviewList";

import adImage from "images/ads/soju/jinro_rain.jpg";

const CategoryContainer = styled.div`
  width: 100%;
  height: 100%;

  background-color: white;
  width: 100%;
  height: 100%;

  margin-top: 80px;
  padding-top: 50px;
`;

const DrinkList = styled.div`
  width: 100%;

  padding: 0px 50px;

  list-style: none;
  display: grid;
  grid-gap: 36px;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  justify-items: center;
`;

const AdImage = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 500px;

  margin: 0px auto;

  background-image: url("${(props) => props.image}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Category = () => {
  const params = useParams();

  const [category, setCategory] = useState("");

  const [drinks, setDrinks] = useState([]);

  const getDrinks = async () => {
    const { data } = await drinkApi.getSoju(params["category_title"]);
    setDrinks(data);
  };

  useEffect(() => {
    setCategory(params["category_title"]);
    getDrinks();
  }, [params]);

  return (
    <CategoryContainer>
      {/* <AdImage image={adImage} /> */}
      <ProductPreviewList products={drinks} />
    </CategoryContainer>
  );
};

export default Category;
