import {ReactNode} from "react";
import styled, {css} from "styled-components";

const StyledButton = styled.button<IProps>`
  //base
  border: none;
  cursor: pointer;
  transition: 0.2s;
  display: flex;
  align-items: center;
  gap: 0.3rem;

${props=>props.size === "medium" && css`
  padding: 1rem 1.8rem;
  border-radius: 2rem;
  font-size: 1.2rem;

  & svg {
    font-size: 1.4rem;
  }
`}

${props=>props.color === "purple" && css`
  background: var(--color-purple-light);
  color: var(--color-white-light);

  & svg {
    stroke: var(--color-white-light);
    color: var(--color-white-light);
    fill: var(--color-white-light);
    
  } 
  &:hover {
      background: #8c5eab;
    }
`}

${props=>props.color === "orange" && css`
  background: var(--color-orange-light);
  color: var(--color-orange-font);
  font-weight: 500;
  
  & svg{
    stroke: var(--color-orange-font);
    color: var(--color-orange-font);
    fill: var(--color-orange-font);
    
  }
  &:hover {
    background: #ffa796;

  }
`}

${props=>props.color === "grey" && css`
  background: var(--color-white-dark);
  color: var(--color-dark-font);
  font-weight: 500;

  & svg {
    stroke: var(--color-dark-font);
    color: var(--color-dark-font);
    fill: var(--color-dark-font);
  }

  &:hover {
    background: #cbc7c1;

  }
`}
  
  
 
  

  

 


`

interface IProps {
    children?: ReactNode,
    size?: "big" | "medium" | "small",
    color?: "purple" | "orange" | "grey",
}

const Button = ({children, size = "medium", color = "purple"}: IProps) => {
    return (
        <StyledButton size={size} color={color}>
            {children}
        </StyledButton>
    );
};

export default Button;