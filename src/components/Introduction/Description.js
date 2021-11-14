import React from "react";
import styled from "styled-components";

const AboutMe = styled.div`
   width: 630px;
   font-size: 16px;
   color: #B0B3BD;  
   line-height: 26px; 
   margin-bottom: 62px;

   @media (max-width: 428px) {
       width: 100%;
   }
`;

const ButtonLinkedin = styled.button`
    width: 178px;
    height: 48px;
    border-radius: 8px;
    font-weight: 800;
    font-size: 16px;

    background-color: white;
    color: #151928;
    margin-right: 8px;

    &:hover {
        background-color: #EEE;
    }

    @media (max-width: 428px) {
        width: 140px;
    }
`;

const ButtonEmail = styled.button`
    width: 178px;
    height: 48px;
    border-radius: 8px;
    font-weight: 800;
    font-size: 16px;

    background-color: #1C2133;
    color: white;
    border: 1px solid white;

    &:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }

    @media (max-width: 428px) {
        width: 140px;
    }
`;

const Description = () => {

    return(
        <div>
            <AboutMe>
                I'm Paul. I create different types of websites. <br />
                I love to learn everything about <span style={{ color: "white" }}>Web Development</span>, specially on Javascript.<br />
                Right now, I'm learning JS &amp; React and looking forward on creating Web Applications sometimes in the future. <br />
                I love playing tennis with buddies. I enjoy to go to the Musemum as well.
            </AboutMe>
            <div> 
                <a href="https://www.linkedin.com/in/paulsplanet/" target="_blank" rel="noreferrer noopner">  
                    <ButtonLinkedin>LinkedIn</ButtonLinkedin>
                </a>
                
                <a href="mailto:paulsplanet612@gmail.com">
                    <ButtonEmail>Email me</ButtonEmail>
                </a>     
            </div>
        </div>
    )
}

export default Description;