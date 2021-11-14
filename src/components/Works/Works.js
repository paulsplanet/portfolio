import React from "react";
import { portfolios} from "./Data";
import styled from "styled-components";
import Momentum from "./assets/Momentum.JPG";
import MoviePlanet from "./assets/MoviePlanet.JPG";
import NewsViewer from "./assets/NewsViewer.JPG";
import PlanetBlog from "./assets/PlanetBlog.JPG";
import StarTalk from "./assets/StarTalk.JPG";
import TravelPlanet from "./assets/TravelPlanet.JPG";

import react from "../Icons/react.svg";
import axios from "../Icons/axios.svg";
import css from "../Icons/css.svg";
import html from "../Icons/html.svg";
import javascript from "../Icons/javascript.svg";
import mongodb from "../Icons/mongodb.svg";
import nodejs from "../Icons/nodejs.svg";
import redux from "../Icons/redux.svg";

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
    
    @media (max-width: 428px) {
        width: 100%;
    }
`;

const HoverWrapper = styled.div`
    position: absolute;
    top: 0px;
    width: 360px;
    height: 290px;
    display: flex;
    justify-content: center;
    align-items: center;

    .react { background-image: url(${react}) }
    .axios { background-image: url(${axios}); width: 90px }
    .css { background-image: url(${css}) }
    .html { background-image: url(${html}) }
    .javascript { background-image: url(${javascript}) }
    .mongodb { background-image: url(${mongodb}) }
    .nodejs { background-image: url(${nodejs}); width: 90px }
    .redux { background-image: url(${redux}) }

    @media (max-width: 428px) {
        width: 100%;
    }
`;

const SkillsHover = styled.div`
    position: absolute;
    top: 0px;
    width: 360px;
    height: 290px;
    background-color: #1C2133;
    opacity: 0;
    transition: opacity 0.2s linear;
    z-index: 1;
`;

const SkillsWrapper = styled.div`
    display: flex;
    width: 180px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

const Skill = styled.div`
    height: 50px;
    width: 50px;
    margin: 0 5px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    z-index: 10;
    opacity: 0;
    transition: opacity 0.2s linear;
`;

const Thumbnail = styled.div`
    width: 360px;
    height: 290px;
    background-size: cover;
    transition: opacity 0.2s linear; 

    @media (max-width: 428px) {
        width: 100%;
    }
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
            opacity: 0.5;
        }; 
        ${Thumbnail} {
            opacity: 0.5;
        };
        ${Skill} {
            opacity: 1;
        }
    } 
`;


const Works = () => {

    return (
       
       portfolios.map((portfolio, index) => (
           <PortfolioWrapper id={index}>
               <Anchor href={portfolio.address} target="_blank" rel="noreferrer noopener">
                   <Thumbnail className={portfolio.name} />
                   <SkillsHover />
                   <HoverWrapper>
                        <SkillsWrapper>
                            {portfolio.skills.map(skill => 
                                    (<Skill className={skill} />) 
                                )}
                        </SkillsWrapper>
                    </HoverWrapper>
               </Anchor>
               <WorkTitle>{portfolio.name}</WorkTitle>
               <Content>{portfolio.content}</Content>
           </PortfolioWrapper>
       ))

    )
}

export default Works;