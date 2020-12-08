import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "components/SearchBar";
import styled from "styled-components";
import DropdownBar from "./DropdownBar";

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 80px;

  display: flex;
  z-index: 100;

  justify-content: center;
  align-items: center;
  background-color: white;
  font-family: "NanumSquare", sans-serif;

  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

const Logo = styled.div`
  height: 100%;

  font-size: 45px;
  font-weight: 800;
  color: rgba(0, 0, 0);
  margin-right: 60px;

  text-shadow: 2px 2px rgba(0, 0, 0, 0.3);
`;

const Navigation = styled.nav`
  display: flex;
  width: 1140px;
  height: 100%;

  font-size: 17px;
`;

const OtherDrinks = styled.div`
  margin-right: 50px;
  height: 100%;
  width: fit-content;

  font-weight: 700;

  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Reviews = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const SearchBarContainer = styled.div`
  margin-left: auto;
`;

const NavContainer = styled.nav`
  width: 1140px;
  height: 100%;

  display: flex;
  justify-items: center;
  align-items: center;
`;

const Header = () => {
  const [isCategoryLoaded, setIsCategoryLoaded] = useState(false);
  const otherDrinks = useRef();

  const handleOver = (e) => {
    // 마우스가 올라오면 술 카테고리 창이 나오고
    otherDrinks.current.innerText = "나는 알콜 중독자다~! 히히헤헤꼴꼴";
    setIsCategoryLoaded(true);
  };

  const handleLeave = (e) => {
    // 마우스가 카테고리 창에서 벗어나면 카테고리 창이 없어지도록
    setTimeout(() => {
      setIsCategoryLoaded(false);
      otherDrinks.current.innerText = "다른 술들을 찾아보세요";
    }, 200);
  };

  return (
    <HeaderContainer>
      <NavContainer>
        <Link to="/">
          <Logo>ALLA</Logo>
        </Link>

        <Navigation>
          <OtherDrinks onMouseEnter={handleOver} onMouseLeave={handleLeave}>
            <span ref={otherDrinks}> 다른 술들을 찾아보세요 </span>
            {isCategoryLoaded && <DropdownBar onMouseEnter={handleOver} />}
          </OtherDrinks>
          {/* <Reviews>Reviews</Reviews> */}
        </Navigation>

        <SearchBarContainer>
          <SearchBar size="small" />
        </SearchBarContainer>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
