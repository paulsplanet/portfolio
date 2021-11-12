import React from "react";
import styled from "styled-components";
import Description from "./Description";
import Typing from "./Typing";
import topimage from "../Icons/topimage.png";

const IntroWrapper = styled.div`
    padding-bottom: 180px;
    position: relative;
`;

const Profile = styled.div`
    width: 585px;
    height: 525px;
    background-image: url(${topimage});
    position: absolute;
    right: 0;
    top: 0;

    @media (max-width: 768px) {
        display: none;
    }
`;


const Intro = () => {

    return(
        <IntroWrapper>
            <Typing />
            <Description />
            <Profile />
        </IntroWrapper>
    )
};

export default Intro;