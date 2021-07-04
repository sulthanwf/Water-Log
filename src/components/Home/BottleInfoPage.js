import React from "react";
import styled from "styled-components";
import { Title, TripleCircleContainer, Circle } from "./MainPage";

const BottleInfoPage = () => {
  return (
    <>
      <BottleInfoContanier>
        <BottleInfoContent>
          <Title>Bottle Info Page</Title>
        </BottleInfoContent>
        {/* <TripleCircleContainer>
          <Circle size="20px" />
          <Circle size="20px" />
          <Circle size="20px" />
        </TripleCircleContainer> */}
      </BottleInfoContanier>
    </>
  );
};

export default BottleInfoPage;

export const BottleInfoContanier = styled.div`
  scroll-snap-align: start;
  grid-area: bottle;
  display: inline-block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 0 1rem;
  color: #000;
`;

export const BottleInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 10;
  height: 100vh;
  place-items: center;
`;
