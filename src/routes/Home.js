import Header from "components/Header";
import React, { useState } from "react";
import SearchBar from "components/SearchBar";
import "./Home.css";

const Home = () => {
  const searchPos = useState("below");

  return (
    <div className="home">
      <Header />
      <div className="home-image-container">
        <div className="home-image"></div>
        <div className="home-image-cover"></div>
      </div>
      <SearchBar pos={searchPos} />
    </div>
  );
};

export default Home;
