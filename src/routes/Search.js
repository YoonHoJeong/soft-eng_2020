import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Search.css";
import qs from "qs";

import SearchBar from "components/SearchBar";
import ProductPreviewList from "components/ProductPreviewList";

// import ReviewPreview from "components/ReviewPreview";
import Loader from "components/Loader";
import { drinkApi } from "api";
import styled from "styled-components";
import ProductPreview from "components/ProductPreview";

const PreviewContainer = styled.div`
  background-color: white;
  padding: 10px 14px;
  border-radius: 10px;
`;

const NoResult = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: white;
`;

const Search = () => {
  const location = useLocation();
  // const [category, setCategory] = useState("all");
  const [text, setText] = useState("");

  // const [reviews, setReviews] = useState([]);

  const [products, setProducts] = useState([]);
  const [showProducts, setShowProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  // const [categoryList, setCategoryList] = useState([]);

  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  const getData = async () => {
    const {
      data: { result: result1 },
    } = await drinkApi.getCategory("soju");
    const {
      data: { result: result2 },
    } = await drinkApi.getCategory("beer");

    setProducts(result1.concat(result2));

    setShowProducts(
      result1.concat(result2).filter((drink) => drink.name.includes(text))
    );
    setIsLoading(false);
    // const {data:{result}} = await getCategory("makgeolli");
  };

  useEffect(() => {
    const { c, t } = qs.parse(location.search, { ignoreQueryPrefix: true });
    // setCategory(c);
    setText(t);

    getData();
  }, [location, text]);

  const Container = styled.div`
    position: relative;

    background-color: white;
    width: 100%;
    height: 100%;

    margin-top: 90px;
    padding-top: 50px;

    display: flex;
    flex-direction: column;
    font-family: "NanumSquareRound", sans-serif;
  `;

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="search-bar-container">
            <SearchBar className="search-bar" />
          </div>

          <div className="products-container">
            <h1 className="container-title">검색 결과</h1>
            <span className="container-subtitle">
              총 {showProducts.length}건의 {text} 결과
            </span>
            <div className="products search-result">
              {showProducts.length ? (
                showProducts.map((product, idx) => (
                  <PreviewContainer>
                    <ProductPreview key={idx} product={product} />
                  </PreviewContainer>
                ))
              ) : (
                <NoResult>"{text}"에 대한 검색 결과가 없습니다.</NoResult>
              )}
              {/* <ProductPreviewList products={showProducts} /> */}
            </div>
          </div>
          <div className="products-container">
            <h1 className="container-title">#이런 술은 어때요?</h1>
            <div className="products">
              <ProductPreviewList products={shuffle(products)} />
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default Search;
