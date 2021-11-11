import React from "react";
import styled from "styled-components";
import Description from "./Description";
import Typing from "./Typing";

const IntroWrapper = styled.div`
    padding-bottom: 240px;
`;


const Intro = () => {

    return(
        <IntroWrapper>
            <Typing />
            <Description />
        </IntroWrapper>
    )
};

export default Intro;