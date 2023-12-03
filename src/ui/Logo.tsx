import styled from "styled-components"
import { PiPiggyBank } from "react-icons/pi";

const StyledLogo = styled.div`
            display:flex;
            gap:1rem;
            align-items:center;

            & h2{
                font-size:2.5rem;
            }
        
`

const Logo = () => {
    return (
        <StyledLogo>
            <PiPiggyBank size={"3rem"} />
            <h2>gBank</h2>
        </StyledLogo>
    )
}

export default Logo