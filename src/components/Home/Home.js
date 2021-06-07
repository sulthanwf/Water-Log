import React from "react";
import styled from "styled-components";
import BottleInfoPage from "./BottleInfoPage";
import MainPage, { Circle } from "./MainPage";
import StatsPage from "./StatsPage";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <MainPage />
        {/* <StatsPage />
        <BottleInfoPage /> */}
        <TripleCircleContainer>
          <Circle size="20px" />
          <Circle size="20px" />
          <Circle size="20px" />
        </TripleCircleContainer>
      </HomeContainer>
    </>
  );
};

export default Home;

export const HomeContainer = styled.div`
  display: grid;
  grid-template-areas: "stats main bottle";
`;

export const TripleCircleContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 calc((100vw - 200px) / 2);
  flex-direction: row;
  justify-content: space-around;
  position: absolute;
  bottom: 15%;
`;
