import React from "react";
import styled from "styled-components";
import Intro from "./components/Introduction/Intro";
import Skills from "./components/Skills";
import Footer from "./components/Works/Footer";
import Portfolio from "./components/Works/Portfolio";

const Background = styled.div`
  width: 100%; 
  display: flex;
  justify-content: center;
  padding: 100px 0;

  @media (max-width: 428px) {
    padding: 40px 24px;
  }
`;

const Frame = styled.div`
  width: 1140px;
   
  @media (max-width: 428px) {
    width: 100%;
    
  }
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