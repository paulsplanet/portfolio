import React from "react";
import styled, { keyframes } from "styled-components";

const TypeTexting = keyframes`
    50%{
        left: 108%
    }
    100%{
            left: 0%;
        }
`;

const Escalating = keyframes`
    33%{
        top: -70px;
        }
    66%{
        top: -140px;
        }
    100%{
        top: -210px;
    }
`;

const MobileEscalating = keyframes`
    33%{
        top: -60px;
        }
    66%{
        top: -120px;
        }
    100%{
        top: -180px;
    }
`;

const IntroBox = styled.div`
    width: 555px;
    height: 220px;
    font-size: 55px;
    font-weight: 800;
    margin-bottom: 62px;

    @media (max-width: 428px) {
    width: 100%;
    font-size: 35px;
    height: 130px;
    margin-bottom: 20px;
  }
`;

const CyonColor = styled.span`
    color: #5AFFC4;
    overflow: hidden;
`;

const TypeBoxWrapper = styled.div`
    height: 70px;
    line-height: 70px;
    overflow: hidden;
    position: relative;

    @media (max-width: 428px) {
        height: 60px;
        line-height: 60px;
    }
    
`;

const TypeBox = styled.span`
    position: relative;
    animation: ${Escalating} 6s steps(1) infinite;
    @media (max-width: 428px) {
        animation: ${MobileEscalating} 6s steps(1) infinite;
    }
    
    &:after {
        content: "";
        position: absolute;
        background-color: #1C2133;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        border-left: 3px solid white;
        animation: ${TypeTexting} 2s steps(15) infinite;
    }
`;

const Typing = () => {

    return(
        <IntroBox>
            
                <CyonColor>&lt;b&gt;</CyonColor>Hello<CyonColor>&lt;b&gt;</CyonColor><br />
                <CyonColor>I'm Paul</CyonColor>,<br />
                <TypeBoxWrapper>
                    <TypeBox>Web developer</TypeBox><br />
                    <TypeBox>Tennis Lover</TypeBox><br />
                    <TypeBox>Self developing</TypeBox><br />
                </TypeBoxWrapper>

        </IntroBox>
    )
}

export default Typing;