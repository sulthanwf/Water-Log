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
        <TripleCircleContainer>
          <Circle size="20px" />
          <Circle size="20px" />
          <Circle size="20px" />
        </TripleCircleContainer>
      </BottleInfoContanier>
    </>
  );
};

export default BottleInfoPage;

export const BottleInfoContanier = styled.div`
  grid-area: bottle;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 0 1rem;
  color: #000;
`;

export const BottleInfoContent = styled.div``;
