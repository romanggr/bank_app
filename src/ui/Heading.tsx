import { ReactNode } from "react"
import styled from "styled-components"

const StyledHeading = styled.h3`
    font-size:3rem;
    font-weight:600;
    color:var(--color-black);
    text-align:center;
    margin:2rem 0;
`

const Heading = ({ children }: { children: ReactNode }) => {
    return (
        <StyledHeading>{children}</StyledHeading>
    )
}

export default Heading