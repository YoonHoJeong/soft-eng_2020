import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ProductPreviewList from "components/ProductPreviewList";
import { drinkApi } from "api";
import mainImage from "images/home/main.jpg";
import mainBGImage from "images/home/main2.jpg";
import Loader from "components/Loader";

const HomeContainer = styled.div`
  // margin-top: 40px;
  padding-bottom: 40px;
  width: 100%;
  background-color: white;

  position: relative;
`;
const AlcoholListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 30px;

  &:not(:last-child) {
    margin-bottom: 45px;
  }
`;
const ListTitle = styled.div`
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 23px;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.3);
`;

const RandomContainer = styled.div`
  position: relative;

  width: 100%;
  height: fit-content;
  background-color: #132743;

  // margin-top: 20px;

  opacity: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
`;

const RandomTitle = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: white;

  position: relative;
`;

const RandomResultContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;

  margin: 18px 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const RandomBG = styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${mainBGImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  font-size: 17px;

  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.4;
`;
const RandomResult = styled.div`
  width: 300px;
  height: 100%;

  background-color: white;
  background-image: url(${mainImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  font-size: 17px;

  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;

  transition: all 0.4s;
`;
const RandomResultTitle = styled.div`
  font-size: 25px;
  font-weight: 800;
  color: white;

  position: absolute;
`;
const RandomButton = styled.div`
  position: relative;

  cursor: pointer;
  font-size: 20px;
  font-weight: 800;
  color: #08d9d6;

  padding: 12px 15px;

  // background-color: #dbf6ff;
  background-color: white;
  border-radius: 9999px;

  &:hover {
    background-color: #08d9d6;
    color: white;
  }

  transition: all 0.4s;
`;

const Home = () => {
  const randomResult = useRef();
  const randomResultTitle = useRef();
  const randomContainer = useRef();
  const [products, setProducts] = useState();
  const [recommend, setRecommend] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const {
      data: { result: result1 },
    } = await drinkApi.getCategory("soju");
    const {
      data: { result: result2 },
    } = await drinkApi.getCategory("beer");
    setRecommend(result2);
    setProducts(result1);
    setIsLoading(false);
  };

  const handleRandom = () => {
    const choices = products?.concat(recommend);

    if (choices) {
      console.log();
      let cnt = 0;
      let intervalId = setInterval(() => {
        const randomElement =
          choices[Math.floor(Math.random() * choices?.length)];
        randomResult.current.style.backgroundImage = `url(${randomElement["image"]})`;
        randomResultTitle.current.innerText = randomElement.name;
        randomContainer.current.style.backgroundImage = `url${randomElement["image"]})`;
        if (cnt++ >= 15) {
          clearInterval(intervalId);
          cnt = 0;
          intervalId = setInterval(() => {
            const randomElement =
              choices[Math.floor(Math.random() * choices?.length)];
            randomResult.current.style.backgroundImage = `url(${randomElement["image"]})`;
            randomResultTitle.current.innerText = randomElement.name;
            randomContainer.current.style.backgroundImage = `url${randomElement["image"]})`;
            if (cnt++ >= 3) {
              clearInterval(intervalId);
              cnt = 0;
              randomResult.current.style.transition = "all 1s";
              intervalId = setInterval(() => {
                const randomElement =
                  choices[Math.floor(Math.random() * choices?.length)];
                randomResult.current.style.backgroundImage = `url(${randomElement["image"]})`;
                randomResultTitle.current.innerText = randomElement.name;
                randomContainer.current.style.backgroundImage = `url${randomElement["image"]})`;
                if (cnt++ >= 1) {
                  cnt = 0;
                  clearInterval(intervalId);
                  randomResult.current.style.transition = "all 0.2s";
                }
              }, 1100);
            }
          }, 800);
        }
      }, 200);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <HomeContainer>
      <RandomContainer ref={randomContainer}>
        <RandomBG></RandomBG>
        <RandomTitle>네가 사는 거라면 나도 끼지</RandomTitle>
        <RandomResultContainer>
          <RandomResult ref={randomResult}></RandomResult>
          <RandomResultTitle ref={randomResultTitle}></RandomResultTitle>
        </RandomResultContainer>

        <RandomButton onClick={handleRandom}>돌려돌려~~ 돌림판~!</RandomButton>
      </RandomContainer>

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <AlcoholListContainer>
            <ListTitle>이번 주 BEST 알콜</ListTitle>
            <ProductPreviewList products={products} isSlider={false} />
          </AlcoholListContainer>
          <AlcoholListContainer>
            <ListTitle>#뇌세포가 죽어가는 당신에게 #5도 이하</ListTitle>
            <ProductPreviewList products={recommend} />
          </AlcoholListContainer>
        </>
      )}
    </HomeContainer>
  );
};

export default Home;
