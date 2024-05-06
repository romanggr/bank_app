import {useLocation} from "react-router-dom";
import styled from "styled-components";


const StyledHeader = styled.div`
  grid-column: span 2;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  background: var(--color-white-light);
  border-radius: 2rem;
`;

const StyledItem = styled.a<{ active: string, windowSize: number }>`
  border-radius: 3rem;
  padding: 0.7rem 2rem;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    background-color: var(--color-white-dark);
  }

  ${(props) => (props.active === "active" && 'font-weight: 600;')}
  ${(props) => (props.windowSize <= 1140 && props.windowSize > 425 && "padding: 0.7rem 1rem !important;")}

`;


const Header = () => {
    const location = useLocation();
    const windowWidth = window.innerWidth;
    const isActive = (path: string) => location.pathname === path ? "active" : "";

    return (
        <StyledHeader>
            <StyledItem windowSize={windowWidth} href="/app/dashboard" active={isActive("/app/dashboard")}>
                Dashboard
            </StyledItem>
            <StyledItem windowSize={windowWidth} href="/app/cards" active={isActive("/app/cards")}>
                {windowWidth > 1400 ? "Cards Management" : "Cards"}
            </StyledItem>
            <StyledItem windowSize={windowWidth} href="/app/contacts" active={isActive("/app/contacts")}>
                Contacts
            </StyledItem>
            <StyledItem windowSize={windowWidth} href="/app/history" active={isActive("/app/history")}>
                {windowWidth > 1400 ? "Transactions History" : "History"}
            </StyledItem>
            <StyledItem windowSize={windowWidth} href="/app/settings" active={isActive("/app/settings")}>
                Settings
            </StyledItem>
        </StyledHeader>
    );
};

export default Header;
