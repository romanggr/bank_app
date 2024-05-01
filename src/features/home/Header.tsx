import styled from "styled-components";
import Logo from "../../ui/Logo.tsx";
import {useNavigate} from "react-router-dom";


const StyledHeader = styled.header`
  padding: 1rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > nav {
    display: flex;
    justify-content: flex-end;
    gap: 3.6rem;
    align-items: center;

    & > a {
      font-size: 1.4rem;
      font-weight: 500;
      cursor: pointer;
      text-decoration: none;
      transition: 0.3s;
      color: var(--color-purple-light);

      &:hover {
        transform: scale(1.2);

      }
    }
  }

  @media (max-width: 1000px) {
    & > nav {
      gap: 2rem;

      & > a {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;

    & > nav {
      gap: 1.2rem;

      & > a {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 560px) {
    padding: 0.5rem;
    & > nav {
      gap: 0.8rem;

      & > a {
        font-size: 0.8rem;
      }
    }
  }
`

const Login = styled.a`
  padding: 0.5rem 2rem;
  border-radius: 2rem;
  border: 2px solid var(--color-purple-light);
  margin-right: -2rem;

  @media (max-width: 1100px) {
    margin-right: -0.5rem;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }

  @media (max-width: 560px) {
    padding: 0.5rem;
    
  }
`

const Register = styled.a`
  background: var(--color-purple-light);
  color: var(--color-white-light)!important;
  padding: 0.5rem 2rem;
  border-radius: 2rem;
  border: 2px solid var(--color-purple-light);

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
  
  @media (max-width: 560px) {
    padding: 0.5rem;
  }
`

function Header() {
    const navigate = useNavigate();
    return (
        <StyledHeader>
            <Logo size={"big"}/>
            <nav>
                <a href={"#section-tariffs"}>Tariffs</a>
                <a href={"#section-getCard"}>Card</a>
                <Login href={""} onClick={() => navigate("/login")}>Login</Login>
                <Register href={""} onClick={() => navigate("/registration")}>Register</Register>
            </nav>
        </StyledHeader>
    );
}

export default Header;