import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Search.css";
import qs from "qs";

import SearchBar from "components/SearchBar";

const Search = () => {
  const location = useLocation();
  const [category, setCategory] = useState("all");
  const [text, setText] = useState("");

  useEffect(() => {
    const { c, t } = qs.parse(location.search, { ignoreQueryPrefix: true });
    setCategory(c);
    setText(t);
  }, [location]);

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
