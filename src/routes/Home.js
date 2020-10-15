import Header from "components/Header";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeContainer = styled.div``;

const Home = () => {
  return (
    <HomeContainer>
      <Header />
    </HomeContainer>
  );
};

export default Home;
