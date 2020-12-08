import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: white;

  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  padding: 10px 0px;
  margin-top: 20px;

  display: flex;
  justify-content: center;
`;

const PaginationList = styled.ul`
  display: flex;
`;

const PaginationItem = styled.li`
  width: 35px;
  height: 35px;

  background-color: ${(props) => (props.current ? "#132743" : "white")};
  color: ${(props) => (props.current ? "white" : "black")};
  border-radius: 9999px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px;

  text-align: center;
  vertical-align: middle;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }

  transition: all 0.3s;
`;

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumber = [];

  // Math.ceil: 올림
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <Container>
      <PaginationList>
        {pageNumber.map((pageNum) => (
          <PaginationItem
            key={pageNum}
            current={currentPage === pageNum}
            onClick={() => paginate(pageNum)}
          >
            {pageNum}
          </PaginationItem>
        ))}
      </PaginationList>
    </Container>
  );
};

export default Pagination;
