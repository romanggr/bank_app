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
      font-size: 1.6rem;
      padding: 1rem 6rem;
      font-weight: 600;
      border-radius:4rem;
    `
};

const variations = {
  purple: css`
    border: 3px solid var(--color-purple);
    background-color: var(--color-purple);
    color:var(--color-light--1);
    &:hover {
      background-color: var(--color-light--1);
      color: var(--color-purple);
    }
  `,
  purpleBorder: css`
    border: 3px solid var(--color-purple);
    background-color: var(--color-light--1);
    color:var(--color-purple);
    &:hover {
      background-color: var(--color-purple);
      color: var(--color-light--1);
    }
  `,
  peach: css`
  border: 3px solid var(--color-purple);
  background-color: var(--color-dark--1);
  &:hover {
    background-color: var(--color-purple);
    border: 3px solid var(--color-purple);
    color: var(--color-light--1);
  }
`,
  grey: css`
    border: 3px solid #ff5722;
    background-color: var(--color-dark--1);
    &:hover {
      background-color: #d66847;
      color: var(--color-dark--3);
    }
  `,
}

interface StyledButtonProps {
  size: 'small' | 'medium' | 'large';
  variation: 'purple' | 'peach' | 'grey' | 'purpleBorder';
}

interface ButtonProps {
  children: ReactNode,
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  size?: 'small' | 'medium' | 'large';
  variation?: 'purple' | 'peach' | 'grey' | 'purpleBorder';
}


const StyledButton = styled.button<StyledButtonProps>`
    cursor: pointer;
    transition: background-color 0.3s, color 0.2s;

    ${props => sizes[props.size]}
    ${props => variations[props.variation]}
`


const Button = ({ children, size = "medium", variation = "grey", onClick }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} variation={variation} size={size}>{children}</StyledButton>
  )
}

export default Button