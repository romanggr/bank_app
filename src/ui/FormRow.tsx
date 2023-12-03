import { ReactNode } from "react"
import styled from "styled-components"

const StyledLabel = styled.label`
        color:var(--color-dark--2);
        margin-left:2rem;
        font-size:1.3rem;
        font-weight:600;
`

const StyledFormRow = styled.div`
    display:grid;
    grid-template-columns:1fr 1.5fr 1fr;
    align-items: center;
`
const StyledError = styled.div`
    padding-left:2rem;
    color:var(--color-orange);
    font-weight:600;
    font-size:1rem;
`

function FormRow({ children, label, error }: { children: ReactNode, label: string, error?: string }) {
    return (
        <StyledFormRow>
            <StyledLabel htmlFor={label}>{label}</StyledLabel>
            {children}
            <StyledError>{error}</StyledError>
        </StyledFormRow>
    )
}

export default FormRow