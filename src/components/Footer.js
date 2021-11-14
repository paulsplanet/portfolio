import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
    padding-bottom: 70px;
`;

const FooterTitle = styled.div`
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 40px;
`;

const FooterContentWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    justify-content: space-between;
`;

const FooterContent = styled.div`
    width: 40%;
    position: relative;
    display: flex;
    margin-bottom: 22px;

    .nodeco {
        text-decoration: none;
    }
`;

const FooterContentTitle = styled.div`
    color: #B0B3BD;
    font-size: 20px;
`;

const FooterContentInfo = styled.div`
    font-size: 20px;
    font-weight: 600;
    text-decoration: underline;
    position: absolute;
    left: 110px;
`;

const FooterLink =styled.a`
    &:hover{
        color: #5AFFC4;
        cursor: pointer;
    }
`;

const Footer = () => {

    return (
        <FooterWrapper>
            <FooterTitle>Interest me?</FooterTitle>
            <FooterContentWrapper>
                <FooterContent>
                    <FooterContentTitle>Email</FooterContentTitle>
                    <FooterContentInfo className="nodeco">paulsplanet612@gmail.com</FooterContentInfo>
                </FooterContent>
                <FooterContent>
                    <FooterContentTitle>LinkedIn</FooterContentTitle>
                    <FooterLink href="https://www.linkedin.com/in/paulsplanet/" target="_blank" rel="noreferrer noopner">
                        <FooterContentInfo>www.linkedin.com/in/paulsplanet</FooterContentInfo>
                    </FooterLink>
                </FooterContent>
                <FooterContent>
                    <FooterContentTitle>Github</FooterContentTitle>
                    <FooterLink href="https://github.com/paulsplanet" target="_blank" rel="noreferrer noopner">
                        <FooterContentInfo>github.com/paulsplanet</FooterContentInfo>
                    </FooterLink>
                </FooterContent>
                <FooterContent>
                    <FooterContentTitle>Resume</FooterContentTitle>
                    <FooterLink href="" download>
                        <FooterContentInfo>Download</FooterContentInfo>
                    </FooterLink>
                </FooterContent>
            </FooterContentWrapper>
        </FooterWrapper>
    )
}

export default Footer;