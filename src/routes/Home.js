import Header from "components/Header";
import React from "react";
import SearchBar from "components/SearchBar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <ul className="category-container">
        <li className="category">Beer</li>
        <li className="category">Wine</li>
        <li className="category">Champagne</li>
      </ul>
      <div className="home-image-container">
        <div className="home-image"></div>
        <div className="home-image-cover"></div>
        <SearchBar />
      </div>
    </div>
  );
};

export default Home;
