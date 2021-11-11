import React from "react";
import { portfolios} from "./Data";
import styled from "styled-components";
import Momentum from "./assets/Momentum.JPG";
import MoviePlanet from "./assets/MoviePlanet.JPG";
import NewsViewer from "./assets/NewsViewer.JPG";
import PlanetBlog from "./assets/PlanetBlog.JPG";
import StarTalk from "./assets/StarTalk.JPG";
import TravelPlanet from "./assets/TravelPlanet.JPG";

const PortfolioWrapper = styled.div`
    width: 360px;
    height: 440px;
    position: relative;

    .TravelPlanet{ background-image: url(${TravelPlanet}) }
    .Momentum{ background-image: url(${Momentum}) }
    .MoviePlanet{ background-image: url(${MoviePlanet}) }
    .NewsViewer{ background-image: url(${NewsViewer}) }
    .PlanetBlog{ background-image: url(${PlanetBlog}) }
    .StarTalk{ background-image: url(${StarTalk}) }
    
`;

const SkillsHover = styled.div`
    position: absolute;
    top: 0px;
    width: 360px;
    height: 290px;
    background-color: #1C2133;
    opacity: 0;
    transition: opacity 0.2s linear;
`;

const Thumbnail = styled.div`
    width: 360px;
    height: 290px;
    background-size: cover;
    transition: opacity 0.2s linear; 
`;

const WorkTitle = styled.div`
    font-size: 18px;
    font-weight: 800;
    margin: 1.3rem 0 0.7rem 0;
`;

const Content = styled.div`
    font-size: 14px;
    color: #B0B3BD;
`;

const Anchor = styled.a`
   &:hover {
        ${SkillsHover} {
            opacity: 0.6;
        }; 
        ${Thumbnail} {
            opacity: 0.6;
        }
    } 
`;



const Works = () => {

    return (
       portfolios.map((portfolio, index) => (
           <PortfolioWrapper id={index}>
               <Anchor href={portfolio.address} target="_blank" rel="noreferrer noopener">
                   <Thumbnail className={portfolio.name} />
                   <SkillsHover>AAA</SkillsHover>
               </Anchor>
               <WorkTitle>{portfolio.name}</WorkTitle>
               <Content>{portfolio.content}</Content>
           </PortfolioWrapper>
       ))
    )
}

export default Works;