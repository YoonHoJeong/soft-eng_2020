import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";
import styled from "styled-components";

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: ${(props) => (props.size === "small" ? "5px" : "10px")};
  padding-left: ${(props) => (props.size === "small" ? "15px" : "23px")};

  width: ${(props) => (props.size === "small" ? "28vw" : "38vw")};
  max-width: 650px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 7px;

  background-color: white;
`;

const SInput = styled.input`
  border: none;
  outline: none;

  font-family: "NanumSquareRound";
  font-size: ${(props) => (props.size === "small" ? "14px" : "17px")};
  font-weight: 700;

  width: 100%;
`;

const SearchBar = ({ size }) => {
  const location = useLocation();
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const onChange = (e) => {
    const {
      target: { name },
    } = e;
    const {
      target: { value },
    } = e;
    if (name === "searchTerm") {
      setSearchTerm(value);
    } else if (name === "category") {
      setCategory(value);
    }
  };

  useEffect(() => {
    const { c, t } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    setCategory(c);
    setSearchTerm(t);
  }, [location]);

  return (
    <SearchBarContainer size={size}>
      <SInput
        name="searchTerm"
        type="text"
        onChange={onChange}
        autoComplete="off"
        placeholder={searchTerm}
        size={size}
      />

      <Link to={`/search?c=${category}&t=${searchTerm}`}>
        <SearchIcon className="search-icon" />
      </Link>
    </SearchBarContainer>
  );
};

export default SearchBar;
