import React from "react";
import Works from "./Works";
import styled from "styled-components";

const PortfolioWrapper =styled.div`
    width: 100%;
    margin-bottom: 100px;

    @media (max-width: 428px) {
        margin-bottom: 60px;
    }
`;

const WorksTitle = styled.div`
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 2rem;
`;

const WorksWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Portfolio = () => {

    return (
        <PortfolioWrapper>
            <WorksTitle>Works</WorksTitle>
            <WorksWrapper>
                <Works />
            </WorksWrapper>
        </PortfolioWrapper>
    )
}

export default Portfolio;
