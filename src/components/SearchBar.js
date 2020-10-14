import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const location = useLocation();
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // const defaultCates = useSelector((state) => state.categories);

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
    <div
      className="search-bar"
    >
      {/* <div className="search-bar__cate">
        <select name="category" id="category" onChange={onChange}>
          <option value="all">All</option>
          {defaultCates.map((cate, index) => (
            <option key={index} value={cate}>
              {cate}
            </option>
          ))}
        </select>
      </div> */}
      <div className="search-bar__input">
        <input
          name="searchTerm"
          type="text"
          onChange={onChange}
          autoComplete="off"
          value={searchTerm}
        />

        <Link to={`/search?c=${category}&t=${searchTerm}`}>
          <SearchIcon className="search-icon" />
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
