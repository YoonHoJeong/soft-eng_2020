import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  width: 200px;
  height: 100%;
  padding: 20px;
  padding-top: 30px;
`;

const SideBarTitle = styled.div`
  font-size: 1.1em;
  font-weight: 600;
`;

const CateList = styled.ul`
  margin-top: 20px;
`;

const CateItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const Category = styled.div`
  margin-left: 10px;
`;

const SInput = styled.input.attrs((props) => ({
  type: "checkbox",
  name: props.name,
}))`
  width: 20px;
  height: 20px;
`;

const SideBar = ({ selectedCate, onChangeCategory }) => {
  const defaultCates = useSelector((state) => state.categories);

  const [checkedList, setCheckedList] = useState([false, false, false]);

  useEffect(() => {
    setCheckedList(defaultCates.map((cate) => cate === selectedCate));
  }, [selectedCate]);

  const handleChange = (e) => {
    const targetIndex = e.target.index;
    setCheckedList(
      checkedList.filter((checked, index) =>
        index === targetIndex ? !checked : checked
      )
    );
    onChangeCategory(e);
  };

  return (
    <Container>
      <SideBarTitle>카테고리</SideBarTitle>
      <CateList className="category-list">
        {defaultCates.map((category, index) => (
          <CateItem key={index}>
            <SInput
              checked={checkedList[index]}
              type="checkbox"
              name={category}
              onChange={handleChange}
              index={index}
            />
            <Category>{category}</Category>
          </CateItem>
        ))}
      </CateList>
    </Container>
  );
};

export default SideBar;
