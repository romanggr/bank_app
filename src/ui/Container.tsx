import styled from "styled-components";
import {ReactNode} from "react";


const StyledContainer = styled.div`
  background: var(--color-white-light);
  border-radius: 2rem;
 

`
const Container = ({children}:{children:ReactNode}) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    );
};

export default Container;