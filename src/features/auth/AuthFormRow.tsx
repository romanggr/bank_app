import {ReactNode} from "react"
import styled, {css} from "styled-components"

const StyledFormRow = styled.div<{ iserror: string }>`
  display: grid;
  width: 100%;
  gap: 0.7rem;


  ${(props) => props.iserror === "true" && css`
    grid-template-columns:1fr 15rem;

    @media (max-width: 560px) {
      grid-template-columns:1fr 0.3fr;
    }
  `}

  ${(props) => props.iserror === "false" && css`
    grid-template-columns:1fr;
  `}
`


const StyledLabel = styled.label`
  font-size: 1.3rem;
  font-weight: 300;
  grid-column: span 2;

  @media (max-width: 560px) {
    font-size: 1rem;
    
  }

`


const StyledError = styled.div`
  color: red;
  font-weight: 400;
  font-size: 1.1rem;

  @media (max-width: 560px) {
    font-size: 0.8rem;

  }
`


function AuthFormRow({children, label, error}: { children: ReactNode, label?: string, error?: string }) {
    return (
        <StyledFormRow iserror={(error === undefined || error === "") ? "false" : "true"}>
            <StyledLabel htmlFor={label}>{label}</StyledLabel>
            {children}
            <StyledError>{error}</StyledError>
        </StyledFormRow>
    )
}

export default AuthFormRow