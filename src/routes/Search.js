import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Search.css";

import SearchBar from "components/SearchBar";

const Search = (props) => {
  const location = useLocation();
  const [category, setCategory] = useState("all");
  const [text, setText] = useState("");

  useEffect(() => {
    const {
      state: { input },
    } = location;

    if (input) {
      const { category: categoryVal, text: textVal } = input;
      setCategory(categoryVal);
      setText(textVal);
    }
    // console.log(searchInput);
    // // setInterval(() => {
    // //   console.log(input);
    // // }, 1000);
  }, [category, text]);

  return (
    <div className="search">
      <header className="search-header">
        {category} / {text} 검색 결과
        <SearchBar />
      </header>
      <main className="search-main"></main>
    </div>
  );
};

export default Search;
