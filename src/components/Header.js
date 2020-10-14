import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "components/SearchBar";
import styled from "styled-components";

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;

  width: 100%;
  height: 80px;

  padding: 10px 40px;

  display: flex;
  z-index: 100;

  align-items: center;
  background-color: white;
`;

const Logo = styled.div`
  height: 100%;

  font-size: 45px;
  font-weight: 600;
  color: rgba(0, 0, 0);
  margin-right: 60px;
`;

const Navigation = styled.nav`
  display: flex;
`;

const OtherDrinks = styled.div`
  margin-right: 50px;
`;

const Reviews = styled.div`

`;

const Header = () => {
  const location = useLocation();
  const [isCategoryLoaded, setIsCategoryLoaded] = useState(false);

  const handleHover = (e) => {
    // 마우스가 올라오면 술 카테고리 창이 나오고
    console.log("mouse over");
    setIsCategoryLoaded(true);
  }

  const handleLeave = (e) => {
    // 마우스가 카테고리 창에서 벗어나면 카테고리 창이 없어지도록
    console.log("mouse leave");
    setIsCategoryLoaded(false);
  }


  return (
    <HeaderContainer>
      <Link to="/">
        <Logo>
          ALLA
        </Logo>
      </Link>

      <Navigation>
        <OtherDrinks onMouseOver={handleHover} onMouseLeave={handleLeave}>other drinks</OtherDrinks>
        <Reviews>Reviews</Reviews>
      </Navigation>


      {location.pathname === "/" && <SearchBar />}
    </HeaderContainer>
  );
};

export default Header;
