import { useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.div`
    grid-column: span 2;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding:1rem !important;
`;

interface StyledItemProps {
    active: string;
}

const StyledItem = styled.a<StyledItemProps>`
    border-radius: 3rem;
    padding: 1rem 3rem;
    text-decoration: none;

    &:hover {
        background-color: var(--color-light--2);
    }

    ${(props) => (props.active === "active" && 'font-weight: 600;')}
`;

const Header: React.FC = () => {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path ? "active" : "";

    return (
        <StyledHeader>
            <StyledItem href="/app/dashboard" active={isActive("/app/dashboard")}>
                Dashboard
            </StyledItem>
            <StyledItem href="/app/cards" active={isActive("/app/cards")}>
                Cards managment
            </StyledItem>
            <StyledItem href="/app/contacts" active={isActive("/app/contacts")}>
                Contacts
            </StyledItem>
            <StyledItem href="/app/history" active={isActive("/app/history")}>
                History
            </StyledItem>
            <StyledItem href="/app/settings" active={isActive("/app/settings")}>
                Settings
            </StyledItem>
        </StyledHeader>
    );
};

export default Header;
