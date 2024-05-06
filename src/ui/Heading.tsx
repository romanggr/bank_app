import {ReactNode} from 'react';
import styled, {css} from "styled-components";

const StyledHeading = styled.p<{color:string}>`
  color: var(--color-light-font);
  font-size: 1.4rem;
  font-weight: 500;

  ${props=>props.color === "white" && css`
    color: var(--color-white-dark) !important;
  `}
`
const Heading = ({children, color=""}: { children: ReactNode, color?: string }) => {
    return (
        <StyledHeading color={color}>
            {children}
        </StyledHeading>
    );
};

export default Heading;