import styled from "styled-components"
import Button from "./Button"
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";

const StyledHeader = styled.header`
        padding:1rem 5rem ; 
        border-bottom:1px solid var(--color-light--2);
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-bottom:5rem;

        & div{
            display:flex;
            gap:1rem;
            align-items:center;

            & h2{
                font-size:2.5rem;
            }
        }
`

const Header = () => {
    const navigate = useNavigate();
    return (
        <StyledHeader>
            <Logo />
            <div>
                <Button onClick={() => navigate("/login")} variation="purpleBorder">Login</Button>
                <Button onClick={() => navigate("/registration")} variation="purple">Register</Button>
            </div>
        </StyledHeader>
    )
}

export default Header