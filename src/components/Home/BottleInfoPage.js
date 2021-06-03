import React from "react";
import styled from "styled-components";

const BottleInfoPage = () => {
  return (
    <>
      <BottleInfoContanier></BottleInfoContanier>
    </>
  );
};

export default BottleInfoPage;

export const BottleInfoContanier = styled.div`
  grid-area: bottle;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 0 1rem;
  color: #000;
`;
