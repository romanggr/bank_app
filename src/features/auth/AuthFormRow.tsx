import {ReactNode} from "react"
import styled from "styled-components"

const StyledFormRow = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns:1fr 0.55fr;
  gap: 0.7rem;

  
`


const StyledLabel = styled.label`
  font-size: 1.3rem;
  font-weight: 300;
  grid-column: span 2;
`


const StyledError = styled.div`
  color: red;
  font-weight: 400;
  font-size: 1.1rem;
`


function AuthFormRow({children, label, error}: { children: ReactNode, label?: string, error?: string }) {
    return (
        <StyledFormRow>
            <StyledLabel htmlFor={label}>{label}</StyledLabel>
            {children}
            <StyledError>{error}</StyledError>
        </StyledFormRow>
    )
}

export default AuthFormRow