import React from "react";
import styled from "styled-components";
import BottleInfoPage from "./BottleInfoPage";
import MainPage, { Circle } from "./MainPage";
import StatsPage from "./StatsPage";

const Home = () => {
  const handleClick = () => {
    console.log("Finished a bottle!");
  };

  return (
    <>
      <HomeContainer>
        <MainPage />
        {/* <StatsPage />
        <BottleInfoPage /> */}
        <TripleCircleContainer>
          <Circle size="20px" onClick={handleClick} />
          <Circle size="20px" onClick={handleClick} />
          <Circle size="20px" onClick={handleClick} />
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
  z-index: 11;
`;
