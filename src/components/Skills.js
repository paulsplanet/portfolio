import React from "react";
import styled from "styled-components";

import react from "./Icons/react.svg";
import axios from "./Icons/axios.svg";
import css from "./Icons/css.svg";
import html from "./Icons/html.svg";
import javascript from "./Icons/javascript.svg";
import mongodb from "./Icons/mongodb.svg";
import nodejs from "./Icons/nodejs.svg";
import redux from "./Icons/redux.svg";
import sass from "./Icons/sass.svg";
import github from "./Icons/github.svg";

const SkillsWrapper = styled.div`
    margin-bottom: 100px;

    @media (max-width: 428px) {
        margin-bottom: 60px;
    }
`;

const SkillsTitle = styled.div`
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 55px;

    @media (max-width: 428px) {
        font-size: 32px;
    }
`;

const IconWrapper = styled.div`
    width: 750px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 428px) {
        width: 100%;
        justify-content: start;
    }
`;
const SkillBox = styled.div`
    width: 80px;
    height: 110px;
    margin: 0 60px 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    .react { background-image: url(${react}) }
    .axios { background-image: url(${axios}) }
    .css { background-image: url(${css}) }
    .html { background-image: url(${html}) }
    .javascript { background-image: url(${javascript}) }
    .mongodb { background-image: url(${mongodb}) }
    .nodejs { background-image: url(${nodejs}); }
    .redux { background-image: url(${redux}) }
    .sass { background-image: url(${sass}) }
    .github { background-image: url(${github}) }

    @media (max-width: 428px) {
        width: 45px;
        height: 65px;
        margin: 0 35px 15px 0;
    }
`;

const Icon = styled.div`
    width: 80px;
    height: 70px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: 15px;
`;

const SkillName = styled.div`
    font-size: 14px;
    color: #B0B3BD;
`;

const Skills = () => {

    return (
        <SkillsWrapper>
            <SkillsTitle>Skills</SkillsTitle>
            <IconWrapper>

                <SkillBox>
                    <Icon className="html" />
                    <SkillName>Html5</SkillName>
                </SkillBox>
                <SkillBox>
                    <Icon className="css" />
                    <SkillName>Css3</SkillName>
                </SkillBox>
                <SkillBox>
                    <Icon className="sass" />
                    <SkillName>Sass</SkillName>
                </SkillBox>
                <SkillBox>
                    <Icon className="javascript" />
                    <SkillName>Javascript</SkillName>
                </SkillBox>
                <SkillBox>
                    <Icon className="react" />
                    <SkillName>ReactJS</SkillName>
                </SkillBox>
                <SkillBox>
                    <Icon className="redux" />
                    <SkillName>Redux</SkillName>
                </SkillBox>
                <SkillBox>
                    <Icon className="nodejs" />
                    <SkillName>NodeJS</SkillName>
                </SkillBox>
                <SkillBox>
                    <Icon className="axios" />
                    <SkillName>Axios</SkillName>
                </SkillBox>
                <SkillBox>
                    <Icon className="github" />
                    <SkillName>Github</SkillName>
                </SkillBox>
                <SkillBox>
                    <Icon className="mongodb" />
                    <SkillName>MongoDB</SkillName>
                </SkillBox>

            </IconWrapper>
        </SkillsWrapper>
    )
}

export default Skills;