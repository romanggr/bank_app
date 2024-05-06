import styled from "styled-components"
import StyledHello from "../features/dashboard/StyledHello.tsx";
import Logo from "./Logo";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const StyledAppLayout = styled.div`
  background-color: var(--color-white-dark);
  height: 100vh;
  display: grid;
  grid-template-columns:9rem 18rem 1fr 30rem;
  grid-template-rows:3.5rem 13rem 10rem 1fr;
  gap: 1rem;
  padding: 0.5rem;

  
  @media (max-width: 960px) and (min-width: 425px) {
    overflow-x: scroll;
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