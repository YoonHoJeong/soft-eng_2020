import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "components/SearchBar";
import styled from "styled-components";
import DropdownBar from "./DropdownBar";

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;

  width: 100%;
  height: 80px;

  padding: 0px 40px;

  display: flex;
  z-index: 100;

  align-items: center;
  background-color: white;
  font-family: "NanumSquareRound", sans-serif;
`;

const Logo = styled.div`
  height: 100%;

  font-size: 45px;
  font-weight: 800;
  color: rgba(0, 0, 0);
  margin-right: 60px;
`;

const Navigation = styled.nav`
  display: flex;
  height: 100%;
`;

const OtherDrinks = styled.div`
  margin-right: 50px;
  height: 100%;
  width: fit-content;

  display:flex;
  align-items: center;
`;

const Reviews = styled.div`
  display:flex;
  align-items: center;
`;

const Header = () => {
  const location = useLocation();
  const [isCategoryLoaded, setIsCategoryLoaded] = useState(false);

  const handleOver = (e) => {
    // 마우스가 올라오면 술 카테고리 창이 나오고
    console.log("mouse over");
    setIsCategoryLoaded(true);
  }

  const handleLeave = (e) => {
    // 마우스가 카테고리 창에서 벗어나면 카테고리 창이 없어지도록
    setTimeout(() => {
      console.log("mouse leave");
      setIsCategoryLoaded(false);
    }, 200)
    
  }


  return (
    <HeaderContainer>
      <Link to="/">
        <Logo>
          ALLA
        </Logo>
      </Link>

      <Navigation>
        <OtherDrinks onMouseEnter={handleOver} onMouseLeave={handleLeave}>other drinks
          {isCategoryLoaded && <DropdownBar  onMouseEnter={handleOver}/>}
        </OtherDrinks>
        <Reviews>Reviews</Reviews>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
