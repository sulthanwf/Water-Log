import React from "react";
import styled from "styled-components";
import { Title, TripleCircleContainer, Circle } from "./MainPage";

const StatsPage = () => {
  return (
    <>
      <StatsContainer>
        <StatsContent>
          <Title>Statistic Page</Title>
        </StatsContent>
        {/* <TripleCircleContainer>
          <Circle size="20px" />
          <Circle size="20px" />
          <Circle size="20px" />
        </TripleCircleContainer> */}
      </StatsContainer>
    </>
  );
};

export default StatsPage;

export const StatsContainer = styled.div`
  grid-area: stats;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 0 1rem;
  color: #fff;
`;

export const StatsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 10;
  height: 100vh;
  place-items: center;
`;
