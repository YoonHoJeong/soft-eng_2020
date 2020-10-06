import Header from "components/Header";
import React, { useState } from "react";
import SearchBar from "components/SearchBar";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const categories = ["맥주", "와인", "소주", "샴페인"];

  return (
    <div className="home">
      <Header />

      <div className="home-image-container">
        <div className="home-image"></div>
        <div className="home-image-cover"></div>
        <SearchBar />
        <ul className="category-container">
          {categories.map((category) => (
            <Link to={`/search?c=${category}&t=`}>
              <li className="category">
                <p>{category}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
