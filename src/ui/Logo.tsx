import styled from "styled-components"
import { PiPiggyBank } from "react-icons/pi";

const StyledLogo = styled.div`
            display:flex;
            gap:0.5rem;
            align-items:center;
            background-color: var(--color-purple--1) !important;
            border:2px solid var(--color-purple--2);
            color: white !important;
            padding:0.5rem !important;
            & *{
                font-weight:500;
                font-size:1.5rem;
                color: white;
            }
        
`

const Logo = () => {
    return (
        <StyledLogo>
            <PiPiggyBank size={"2.5rem"} />
            <h2>gBank</h2>
        </StyledLogo>
    )
}

export default Logo