import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

const SearchBar = ({ searchPos }) => {
  const [input, setInput] = useState({ category: "all", text: "" });
  const [pos, setPos] = useState("");

  useEffect(() => {
    setPos(searchPos);
  }, []);

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const randomGen = () => uuid();

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
        <Link
          to={{
            pathname: "/search",
            state: { ...input },
          }}
        >
          <SearchIcon className="search-icon" />
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
