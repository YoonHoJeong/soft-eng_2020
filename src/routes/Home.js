import Header from "components/Header";
import React from "react";
import SearchBar from "components/SearchBar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home-image-container">
        <div className="home-image"></div>
        <div className="home-image-cover"></div>
      </div>
      <SearchBar />
    </div>
  );
};

export default Home;
