import React from "react";
import styled from "styled-components";

const StatsPage = () => {
  return (
    <>
      <StatsContainer></StatsContainer>
    </>
  );
};

export default StatsPage;

export const StatsContainer = styled.div`
  grid-area: stats;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 0 1rem;
  color: #fff;
`;
