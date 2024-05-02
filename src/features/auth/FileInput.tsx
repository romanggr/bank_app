import styled from "styled-components";
import React from "react";

interface IProps {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    value: any;
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

  &::file-selector-button {
    font-weight: 500;
    padding: 0.8rem 1.5rem;
    margin-right: 1.2rem;
    border: none;
    cursor: pointer;
    background: var(--color-orange-light);
    border-radius: 0.5rem;
  }
  
  @media(max-width: 560px){
    font-size: 1rem;
    
    &::file-selector-button {
      padding: 0.5rem 1rem;
    }
  }
`;


const FileInput = ({ value, onChange }:IProps) => {
    return (
        <StyledInput type="file" value={value} onChange={onChange} />
    );
};

export default FileInput;