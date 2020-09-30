import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

const SearchBar = () => {
  const [input, setInput] = useState({ category: "all", text: "" });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div className="search-bar">
      <div className="search-bar__cate">
        <select name="category" id="category" onChange={onChange}>
          <option value="all">All</option>
          <option value="beer">Beer</option>
          <option value="soju">Soju</option>
          <option value="wine">Wine</option>
        </select>
      </div>
      <div className="search-bar__input">
        <input name="text" type="text" onChange={onChange} autoComplete="off" />
        <Link to={`/search?c=${input.category}&t=${input.text}`}>
          <SearchIcon className="search-icon" />
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
