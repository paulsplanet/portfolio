import React from "react";
import styled from "styled-components";
import Intro from "./components/Introduction/Intro";
import Portfolio from "./components/Works/Portfolio";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 140px 0;
`;

const Frame = styled.div`
  width: 1140px;
  margin: 0 auto;
`;

const App = () => {

  return (
    <Background>
      <Frame>
        <Intro />
        <Portfolio />
      </Frame>
    </Background>
  )
}

export default App;