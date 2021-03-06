import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ProductPreview from "components/ProductPreview";
import Pagination from "components/Pagination";

import FilterListContainer from "components/FilterListContainer";

const Container = styled.div`
  padding-bottom: 50px;
`;

const ResultContainer = styled.div`
  width: 100%;

  padding: 0px 50px;

  list-style: none;
  display: grid;
  grid-gap: 36px;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  justify-items: center;

  margin-top: 60px;
`;

const Results = ({ drinks }) => {
  return (
    <ResultContainer>
      {drinks?.map((drink, idx) => (
        <ProductPreview key={idx} product={drink} />
      ))}
    </ResultContainer>
  );
};

const SearchResult = ({ drinks }) => {
  const [showDrinks, setShowDrinks] = useState(drinks);
  const [currentPage, setCurrentPage] = useState(1); // pagination
  const [postsPerPage] = useState(8);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    setCurrentPage(1);
  }, [drinks, showDrinks]);

  const adjustFilter = (filters) => {
    let tmpDrinks = [];
    let tmpDrinksRating = [];
    let tmpDrinksABV = [];

    if (filters.length) {
      filters.forEach((filter) => {
        switch (filter) {
          case 0:
            tmpDrinksABV = tmpDrinksABV.concat(
              drinks.filter((drink) => drink.ABV >= 0 && drink.ABV < 10)
            );
            break;
          case 1:
            tmpDrinksABV = tmpDrinksABV.concat(
              drinks.filter((drink) => drink.ABV <= 10)
            );
            break;
          case 2:
            tmpDrinksABV = tmpDrinksABV.concat(
              drinks.filter((drink) => drink.ABV > 10)
            );
            break;
          case 3:
            tmpDrinksRating = tmpDrinksRating.concat(
              drinks.filter((drink) => drink.rating >= 0 && drink.rating < 1)
            );
            break;
          case 4:
            tmpDrinksRating = tmpDrinksRating.concat(
              drinks.filter((drink) => drink.rating >= 1 && drink.rating < 2)
            );
            break;
          case 5:
            tmpDrinksRating = tmpDrinksRating.concat(
              drinks.filter((drink) => drink.rating >= 2 && drink.rating < 3)
            );
            break;
          case 6:
            tmpDrinksRating = tmpDrinksRating.concat(
              drinks.filter((drink) => drink.rating >= 3 && drink.rating < 4)
            );
            break;
          case 7:
            tmpDrinksRating = tmpDrinksRating.concat(
              drinks.filter((drink) => drink.rating >= 4 && drink.rating < 5)
            );
            break;
          case 8:
            tmpDrinksRating = tmpDrinksRating.concat(
              drinks.filter((drink) => drink.rating >= 5)
            );
            break;
          default:
            tmpDrinks = drinks;
            break;
        }
      });
    } else {
      tmpDrinks = drinks;
    }
    // const filteredArray = array1.filter(value => array2.includes(value));
    const ratings = [3, 4, 5, 6, 7, 8];
    const ABVs = [1, 2];

    console.log();
    if (filters.filter((filter) => ABVs.includes(filter)).length === 0) {
      tmpDrinksABV = drinks;
    }
    if (filters.filter((filter) => ratings.includes(filter)).length === 0) {
      tmpDrinksRating = drinks;
    }
    // setShowDrinks(tmpDrinks);
    setShowDrinks(
      tmpDrinksABV.filter((drink) => tmpDrinksRating.includes(drink))
    );
  };

  return (
    <Container>
      <FilterListContainer adjustFilter={adjustFilter} />

      <Results
        drinks={showDrinks.slice(
          (currentPage - 1) * postsPerPage,
          currentPage * postsPerPage
        )}
      />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={showDrinks.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </Container>
  );
};

export default SearchResult;
