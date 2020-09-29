import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">ALLA</div>
      </Link>
      {/* <Link to="/">Home</Link>
      <Link to="/Search">Search</Link>
      <Link to="/">Category</Link> */}
    </div>
  );
};

export default Header;
