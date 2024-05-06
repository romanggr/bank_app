import styled, {css} from "styled-components"
import {PiPiggyBank} from "react-icons/pi";

interface LogoSize {
    size?: "big" | "small"
}

const StyledLogo = styled.div<LogoSize>`
  display: flex;
  align-items: center !important;
  background-color: var(--color-purple-light);
  border-radius: 3rem;
  
  ${props=>props.size === "big" && css`
    gap: 0.5rem;
    padding: 0.5rem 2rem;

    & > h2 {
      font-weight: 500;
      font-size: 1.5rem;
      color: var(--color-white-light);
    }

    & > svg {
      font-size: 3rem;
      fill: var(--color-white-light);
    }
    
    @media(max-width: 1000px){
      padding: 0.5rem 1rem;

      & > h2 {
        font-size: 1rem;
      }

      & > svg {
        font-size: 2rem;
      }
    }

    @media(max-width: 768px) {
      padding: 0.5rem 1rem;

      & > h2 {
        font-size: 1rem;
      }

      & > svg {
        font-size: 1.6rem;
      }
    }
    
    @media(max-width: 560px) {
      padding: 0.5rem;
      
      & > h2 {
        font-size: 0.8rem;
      }

      & > svg {
        font-size: 1.4rem;
      }
    }
  `}

  
  ${props=>props.size === "small" && css`
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    

    & > h2 {
      font-weight: 500;
      font-size: 1.2rem;
      color: var(--color-white-light);
    }

    & > svg {
      font-size: 2.5rem;
      fill: var(--color-white-light);
    }
  `}

`

const Logo = ({size = "small"}: LogoSize) => {
    return (
        <StyledLogo size={size}>
            <PiPiggyBank/>
            <h2>Banker</h2>
        </StyledLogo>
    )
}

export default Logo