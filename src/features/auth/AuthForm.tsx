import styled from "styled-components";
import React, {ReactNode} from "react";
import AuthFormRow from "./AuthFormRow.tsx";


const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;

`

const Btn = styled.button`
  background: black;
  border: 3px solid black;
  color: var(--color-white-light);
  font-size: 1.4rem;
  font-weight: 500;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: transparent;
    color: black;
  }
`

interface IProps {
    children: ReactNode,
    buttonName: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const AuthForm = ({children, buttonName, onClick}: IProps) => {
    return (
        <Form>
            {children}
            <AuthFormRow>
                <Btn type={"button"} onClick={onClick}>{buttonName}</Btn>
            </AuthFormRow>
        </Form>
    );
};

export default AuthForm;