import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { drinkApi } from "api";
import ProductPreview from "components/ProductPreview";

const CategoryContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: blue;

  background-color: white;
  width: 100%;
  height: 100%;

  margin-top: 80px;
  padding-top: 50px;
`;

const DrinkList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Category = () => {
  const params = useParams();

  const [drinkType, setDrinkType] = useState("");

  const [drinks, setDrinks] = useState([]);

  const getDrinks = async () => {
    const { data } = await drinkApi.getSoju();
    setDrinks(data);
    console.log(data);
  };

  useEffect(() => {
    setDrinkType(params["drink_type"]);
    getDrinks();
  }, []);

  return (
    <CategoryContainer>
      <DrinkList>
        {drinks.map((drink) => (
          <ProductPreview product={drink}></ProductPreview>
        ))}
      </DrinkList>
    </CategoryContainer>
  );
};

export default Category;
