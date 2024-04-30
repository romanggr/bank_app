import styled from "styled-components"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import HomeLogo from "./HomeLogo";

const StyledFooter = styled.footer`
    background: #000;
    margin-top:4rem;
    padding:2rem 4rem;
    display:flex;   
    justify-content:space-between;
    align-items: center;
    

& *{
    color:var(--color-light--1);
}

`

const StyledSocial = styled.div`
    display:flex;
    gap:1rem;

`

const StyledFb = styled.button`
    border:none;
    cursor: pointer;
    height:2.5rem;
    width:2.5rem;
    border-radius:2rem;
    background-color:#3b5998;
    & *{
        font-size:1.5rem;
    }
    &:hover{
        background-color:#4d618b;
    }
`

const StyledTw = styled.button`
    border:none;
    cursor: pointer;
    height:2.5rem;
    width:2.5rem;
    border-radius:2rem;
    background-color:#1da1f2;
   
    & *{
        font-size:1.5rem;
    }
    &:hover{
        background-color:#7973df;
    }
`

const StyledInst = styled.button`
    border:none;
    cursor: pointer;
    height:2.5rem;
    width:2.5rem;
    border-radius:2rem;
    background-color:#5851db;
    & *{
        font-size:1.5rem;
    }
    &:hover{
        background-color:#7973df;
    }
`

const StyledLogoContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:1rem;

& p{
    font-size:1rem;
    font-weight:300;
}

`

const Footer = () => {
    const openExternalLink = (url: string) => {
        window.open(url, '_blank');
    };
    return (
        <StyledFooter>
            <StyledLogoContainer>
                <HomeLogo />
                <p>The bank with the fastest account opening, all you need is an Internet connection.</p>
            </StyledLogoContainer>
            <StyledSocial>
                <StyledInst onClick={() => openExternalLink("https://www.instagram.com/")}>
                    <FaInstagram />
                </StyledInst>
                <StyledFb onClick={() => openExternalLink("https://www.facebook.com/")}>
                    <FaFacebook />
                </StyledFb >
                <StyledTw onClick={() => openExternalLink("https://twitter.com/")}>
                    <FaTwitter />
                </StyledTw>
            </StyledSocial>
        </StyledFooter>
    )
}

export default Footer