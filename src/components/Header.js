import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import SearchBar from "components/SearchBar";

const Header = () => {
  const location = useLocation();
  const style = { color: "white" };
  const homeHeaderStyle = {
    backgroundColor: "transparent",
    borderBottom: "none",
    padding: "0px 30px",
  };
  return (
    <div
      className="header"
      style={location.pathname === "/" ? homeHeaderStyle : null}
    >
      <Link to="/">
        <div
          className="header__logo"
          style={location.pathname === "/" ? style : null}
        >
          ALLA
        </div>
      </Link>
      {location.pathname !== "/" && <SearchBar />}
    </div>
  );
};

export default Header;
