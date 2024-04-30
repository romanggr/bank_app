import styled, { css } from "styled-components";
import { ReactNode, MouseEventHandler } from "react";

const sizes = {
  small: css`
      font-size: 1.2rem;
      padding: 0.4rem 0.8rem;
      font-weight: 600;
      text-align: center;
      border-radius: 2rem;
    `,
  medium: css`
      font-size: 1.4rem;
      padding: 1rem 1.6rem;
      font-weight: 500;
      border-radius: 2rem;
    `,
  large: css`
      font-size: 1.4rem;
      padding: 1rem 2.4rem;
      font-weight: 400;
      border-radius:4rem;
    `
};

const variations = {
  purple: css`
    border: 3px solid var(--color-purple--2);
    background-color: var(--color-purple--1);
    color:var(--color-light--1);
    &:hover {
      background-color: var(--color-light--1);
      color: var(--color-purple--1);
    }
  `,
  purpleBorder: css`
    border: 3px solid var(--color-purple--2);
    background-color: var(--color-light--1);
    color:var(--color-purple--1);
    &:hover {
      background-color: var(--color-purple--1);
      color: var(--color-light--1);
    }
  `,


  peach: css`
  background-color: var(--color-orange--light);
  border:none;
  color: var(--color-orange--dark);

  &:hover {
    background-color: var(--color-orange);
    color: var(--color-light--1);
  }
`,


  grey: css`
    border:2px solid var(--color-peach--2);
    background-color: var(--color-peach--1);
    &:hover {
      background-color: var(--color-light--1);
      color: var(--color-dark--3);
    }
  `,
}

interface StyledButtonProps {
  size: 'small' | 'medium' | 'large';
  variation: 'purple' | 'peach' | 'grey' | 'purpleBorder';
}

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: 'small' | 'medium' | 'large';
  variation?: 'purple' | 'peach' | 'grey' | 'purpleBorder';
  type?: 'submit' | 'reset' | 'button';
}


const StyledButton = styled.button<StyledButtonProps>`
    cursor: pointer;
    transition: background-color 0.3s, color 0.2s;

    ${props => sizes[props.size]}
    ${props => variations[props.variation]}
`


const Button = ({ children, size = "medium", variation = "grey", onClick, type }: ButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick} variation={variation} size={size}>{children}</StyledButton>
  )
}

export default Button