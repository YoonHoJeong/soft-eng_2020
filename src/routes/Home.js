import Header from "components/Header";
import React from "react";
import styled from "styled-components";
import ProductPreview from "components/ProductPreview";
import { drinkApi } from "api";

const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
`;
const AlcoholList = styled.ul``;
const AlcoholItem = styled.li``;
const ListTitle = styled.div``;

const Home = () => {
  const products = drinkApi.getBest();

  return (
    <HomeContainer>
      <Header />
      <AlcoholList>
        <ListTitle>이번 주 BEST 알콜</ListTitle>
        {products.map((product) => (
          <AlcoholItem>
            <ProductPreview product={product} />
          </AlcoholItem>
        ))}

        <AlcoholItem></AlcoholItem>
        <AlcoholItem></AlcoholItem>
      </AlcoholList>
      <AlcoholList>
        <ListTitle>이번 주 BEST 알콜</ListTitle>
        <AlcoholItem></AlcoholItem>
        <AlcoholItem></AlcoholItem>
        <AlcoholItem></AlcoholItem>
      </AlcoholList>
    </HomeContainer>
  );
};

export default Home;
