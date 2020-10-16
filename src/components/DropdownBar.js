import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  height: fit-content;
  width: 100%;
  background-color: white;
  padding: 17px 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  cursor: initial;
`;

const MenuList = styled.ul`
  display: flex;
`;
const MenuItem = styled.li`
  margin-right: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const MenuImage = styled.div`
  width: 150px;
  height: 120px;
  background-size: cover;
  background-image: url(${(props) => props.imgUrl});
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
`;

const MenuTitle = styled.div`
  margin-top: 5px;
  font-size: 14px;
  font-weight: 600;
`;

const DropdownBar = ({ onMouseOver }) => {
  return (
    <DropdownContainer onMouseOver={onMouseOver}>
      <MenuList>
        <MenuItem>
          <Link to="/category/맥주">
            <MenuImage imgUrl="https://user-images.githubusercontent.com/22267559/95967606-6b43bb80-0e47-11eb-980d-72762c6df73d.jpg"></MenuImage>
            <MenuTitle>맥주</MenuTitle>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/category/소주">
            <MenuImage imgUrl="https://user-images.githubusercontent.com/22267559/95967615-6c74e880-0e47-11eb-98aa-34b86e3d5b6f.jpg"></MenuImage>
            <MenuTitle>소주</MenuTitle>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/category/와인">
            <MenuImage imgUrl="https://user-images.githubusercontent.com/22267559/95967617-6c74e880-0e47-11eb-9fe6-0262a732aaff.png"></MenuImage>
            <MenuTitle>와인</MenuTitle>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/category/샴페인">
            <MenuImage imgUrl="https://user-images.githubusercontent.com/22267559/95967613-6bdc5200-0e47-11eb-81fc-380d64ba019e.jpg"></MenuImage>
            <MenuTitle>샴페인</MenuTitle>
          </Link>
        </MenuItem>
      </MenuList>
    </DropdownContainer>
  );
};

export default DropdownBar;
