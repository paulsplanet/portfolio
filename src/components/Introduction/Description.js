import React from "react";
import styled from "styled-components";

const AboutMe = styled.div`
   width: 690px;
   height: 150px;
   font-size: 18px;
   color: #B0B3BD;  
   line-height: 30px; 
   margin-bottom: 15px;
`;

const Button = styled.button`
    width: 178px;
    height: 48px;
    border-radius: 8px;
    font-weight: 800;
    font-size: 16px;
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
                <Button style={{ backgroundColor: "white", color: "#151928", marginRight: "8px" }}>LinkedIn</Button>
                <Button style={{ backgroundColor: "#1C2133", color: "white", border: "1px solid white"}}>Email me</Button>
            </div>
        </div>
    )
}

export default Description;