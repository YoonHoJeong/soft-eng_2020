import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import SearchBar from "components/SearchBar";

const Header = () => {
  const location = useLocation();
  const style = { color: "white" };
  const headerStyle = { padding: "0px 120px" };
  return (
    <div
      className="header"
      style={location.pathname === "/" ? null : headerStyle}
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
