import React from "react";
import styled, { keyframes } from "styled-components";

const TypeTexting = keyframes`
    100%{
            left: 108%;
        }
`;

const IntroBox = styled.div`
    width: 555px;
    height: 220px;
    font-size: 60px;
    font-weight: 800;
    margin-bottom: 62px;
`;

const CyonColor = styled.span`
    color: #5AFFC4;
`;

const TypeBox = styled.span`
    position: relative;
    
    &:after {
        content: "";
        position: absolute;
        background-color: #1C2133;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        border-left: 3px solid white;
        animation: ${TypeTexting} 1.5s steps(15) infinite;
    }
`;

const Typing = () => {

    return(
        <IntroBox>
            
                <CyonColor>&lt;b&gt;</CyonColor>Hello<CyonColor>&lt;b&gt;</CyonColor><br />
                <CyonColor>I'm Paul</CyonColor>,<br />
                <TypeBox>Web developer</TypeBox>
            
        </IntroBox>
    )
}

export default Typing;