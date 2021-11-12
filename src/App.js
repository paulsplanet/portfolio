import React from "react";
import styled from "styled-components";
import Intro from "./components/Introduction/Intro";
import Skills from "./components/Skills";
import Footer from "./components/Works/Footer";
import Portfolio from "./components/Works/Portfolio";

const Background = styled.div`
  width: 100vw;
  
  display: flex;
  justify-content: center;
  padding: 100px 0;
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
        <Skills />
        <Footer />
      </Frame>
    </Background>
  )
}

export default App;