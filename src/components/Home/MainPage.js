import React from "react";
import styled from "styled-components";

const MainPage = () => {
  return (
    <>
      <MainPageContainer>
        <MainPageContent>
          <Circle>
            <Title>Finished a Bottle!</Title>
          </Circle>
          <TripleCircleContainer>
            <Circle size="30px" />
            <Circle size="30px" />
            <Circle size="30px" />
          </TripleCircleContainer>
        </MainPageContent>
      </MainPageContainer>
    </>
  );
};

export default MainPage;

export const MainPageContainer = styled.div`
  grid-area: main;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
  padding: 0 1rem;
  color: #fff;

  /* ::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 100%,
        rgba(0, 0, 0, 0.2) 0%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  } */
`;

export const MainPageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 10;
  height: 100vh;
  place-items: center;
`;

export const Circle = styled.div`
  display: flex;
  border: 2px #000 solid;
  border-radius: 50%;
  width: ${({ size }) => (size ? size : "300px")};
  height: ${({ size }) => (size ? size : "300px")};
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  align-self: center;
  color: #000;
  font-size: 2rem;
  font-family: "Montserrat", sans-serif;
`;

export const TripleCircleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`;
