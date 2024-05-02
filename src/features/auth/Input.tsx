import styled from "styled-components";
import React from "react";

interface IProps {
    type?: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    value: string
}

const StyledInput = styled.input`
  background: transparent;
  border: none;
  border-bottom: 3px solid var(--color-dark-font);
  font-size: 1.2rem;
  font-weight: 500;
  padding-bottom: 0.2rem;
  outline: none;
  width: 100%;
  
  @media(max-width: 560px){
    font-size: 1rem;
    
  }
`

const Input = ({type = "text", value: value, onChange: onChange}: IProps) => {
        return <StyledInput type={type} value={value} onChange={onChange}/>
    }
;

export default Input;