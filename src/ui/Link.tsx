import {useNavigate} from "react-router-dom";
import {ReactNode} from "react";
import styled from "styled-components";


const StyledLink = styled.div`
  cursor: pointer;
  transition: 0.2s;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 1.2rem;
  color: var(--color-purple-dark);
  
  &:hover {
    transform: scale(1.15);

  }
  
`

interface IProps {
    to: string,
    children: ReactNode
}

const Link = ({children, to}: IProps) => {
    const navigate = useNavigate()
    return (
        <StyledLink onClick={() => navigate(to)}>
            {children}
        </StyledLink>
    );
};

export default Link;