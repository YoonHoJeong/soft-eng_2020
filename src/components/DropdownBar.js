import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import makgeolliImage from "images/icons/메뉴_막걸리.jpg";

const DropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;

  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: center;

  font-family: "NanumSquare", sans-serif;
`;

const MenuList = styled.ul`
  display: flex;

  width: 1140px;

  background-color: white;
  padding: 17px 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  cursor: initial;
`;
const MenuItem = styled.li`
  margin-right: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  font-size: 19px;
`;

const MenuImage = styled.div`
  width: 150px;
  height: 120px;
  background-size: cover;
  background-image: url(${(props) => props.imgUrl});
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;

  &:hover {
    opacity: 0.7;
  }
`;

const MenuTitle = styled.div`
  margin: 0px auto;
  margin-top: 5px;
  font-size: 14px;
  font-weight: 600;
`;

const SLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const DropdownBar = ({ onMouseOver }) => {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    function importAll(r) {
      return r.keys().map(r);
    }

    const tmpIcons = importAll(
      require.context("images/icons/", false, /\.(png|jpe?g|svg)$/)
    );

    setIcons(tmpIcons);
  }, []);

  return (
    <DropdownContainer onMouseOver={onMouseOver}>
      <MenuList>
        <MenuItem>
          <SLink to="/category/beer">
            <MenuImage imgUrl="https://user-images.githubusercontent.com/22267559/95967606-6b43bb80-0e47-11eb-980d-72762c6df73d.jpg"></MenuImage>
            <MenuTitle>맥주</MenuTitle>
          </SLink>
        </MenuItem>
        <MenuItem>
          <SLink to="/category/soju">
            <MenuImage imgUrl="https://user-images.githubusercontent.com/22267559/95967615-6c74e880-0e47-11eb-98aa-34b86e3d5b6f.jpg"></MenuImage>
            <MenuTitle>소주</MenuTitle>
          </SLink>
        </MenuItem>
        <MenuItem>
          <SLink to="/category/makgeolli">
            <MenuImage imgUrl={makgeolliImage}></MenuImage>
            <MenuTitle>막걸리</MenuTitle>
          </SLink>
        </MenuItem>
      </MenuList>
    </DropdownContainer>
  );
};

export default DropdownBar;
