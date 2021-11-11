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
    height: 370px;

    .TravelPlanet{ background-image: url(${TravelPlanet}) }
    .Momentum{ background-image: url(${Momentum}) }
    .MoviePlanet{ background-image: url(${MoviePlanet}) }
    .NewsViewer{ background-image: url(${NewsViewer}) }
    .PlanetBlog{ background-image: url(${PlanetBlog}) }
    .StarTalk{ background-image: url(${StarTalk}) }
    
`;

const Thumbnail = styled.div`
    width: 360px;
    height: 290px;
    background-size: cover;
    
`;


const Works = () => {

    return (
       portfolios.map((portfolio, index) => (
           <PortfolioWrapper id={index}>
               <a href={portfolio.address}><Thumbnail className={portfolio.name} /></a>
               <span>{portfolio.name}</span>
           </PortfolioWrapper>
       ))
    )
}

export default Works;