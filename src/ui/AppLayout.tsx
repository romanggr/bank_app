import styled from "styled-components"
import StyledHello from "./StyledHello";
import Logo from "./Logo";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const StyledAppLayout = styled.div`
    background-color:var(--color-light--2);
    height:100vh;
    display:grid;   
    grid-template-columns:1fr 2fr 5fr 2fr; 
    grid-template-rows:3.5rem 2fr 1fr 5fr;
    gap:1rem;
    padding:0.5rem;

    &>div{
        background-color:var(--color-light--1);
        border-radius:2rem;
        padding:2rem;
    }

`



const AppLayout = () => {
    return (
        <StyledAppLayout>
            <Logo />
            <StyledHello />
            <Header />
            <Outlet />
        </StyledAppLayout>
    )
}

export default AppLayout;