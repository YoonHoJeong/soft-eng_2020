import React, { useState } from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  width: 100%;

  margin-top: 40px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px 0px;
`;
const FilterList = styled.div`
  height: 50px;
  padding: 16px 0px;

  font-size: 17px;

  display: flex;
  align-items: center;
`;
const ListTitle = styled.div`
  font-weight: 800;
  margin-right: 20px;
`;

const FilterItem = styled.div`
  width: fit-content;

  padding: 8px 14px;
  font-weight: 700;
  background-color: white;

  cursor: pointer;

  border-radius: 9999px;
  border: 1px solid rgba(0, 0, 0, 0.24);

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
const FilterListContainer = ({ adjustFilter }) => {
  const [filters, setFilters] = useState([]);

  const handleFilter = (e) => {
    const elem = e.target;
    const selected = elem.selected;
    const tmpFilter = parseInt(e.target.getAttribute("value"));

    elem.selected = !selected;
    if (selected) {
      // 해제할 때
      elem.style =
        "background-color: white; color: black; border: 1px solid rgba(0,0,0,0.24);";
      adjustFilter(filters.filter((filter) => tmpFilter !== filter));
      setFilters(filters.filter((filter) => tmpFilter !== filter));
    } else {
      // 필터를 선택할 때,
      elem.style = "background-color: grey; color: white; border:none;";
      setFilters(filters.concat([tmpFilter]));
      adjustFilter(filters.concat([tmpFilter]));
    }
  };

  return (
    <FilterContainer>
      <FilterList>
        <ListTitle>도수</ListTitle>

        <FilterItem
          selected={false}
          value={1}
          onClick={handleFilter.bind(this)}
        >
          음료수(0 ~ 10도)
        </FilterItem>
        <FilterItem
          selected={false}
          value={2}
          onClick={handleFilter.bind(this)}
        >
          알콜램프(10도 ~ )
        </FilterItem>
      </FilterList>
      <FilterList>
        <ListTitle>평점</ListTitle>

        <FilterItem
          selected={false}
          value={3}
          onClick={handleFilter.bind(this)}
        >
          0점대
        </FilterItem>
        <FilterItem
          selected={false}
          value={4}
          onClick={handleFilter.bind(this)}
        >
          1점대
        </FilterItem>
        <FilterItem
          selected={false}
          value={5}
          onClick={handleFilter.bind(this)}
        >
          2점대
        </FilterItem>
        <FilterItem
          selected={false}
          value={6}
          onClick={handleFilter.bind(this)}
        >
          3점대
        </FilterItem>
        <FilterItem
          selected={false}
          value={7}
          onClick={handleFilter.bind(this)}
        >
          4점대
        </FilterItem>
        <FilterItem
          selected={false}
          value={8}
          onClick={handleFilter.bind(this)}
        >
          5점
        </FilterItem>
      </FilterList>
    </FilterContainer>
  );
};

export default FilterListContainer;
