import React from "react";
import styled from "styled-components";
import BottleInfoPage from "./BottleInfoPage";
import MainPage from "./MainPage";
import StatsPage from "./StatsPage";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <StatsPage />
        <MainPage />
        <BottleInfoPage />
      </HomeContainer>
    </>
  );
};

export default Home;

export const HomeContainer = styled.div`
  display: grid;
  grid-template-areas: "stats main bottle";
`;
