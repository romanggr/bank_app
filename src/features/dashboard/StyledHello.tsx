import styled from "styled-components"


const StyledHello = styled.div`
  color: var(--color-purple--2);
  font-weight: 600;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  background: var(--color-white-light);
  border-radius: 2rem;
  

  & span {
    font-weight: 400;
    font-size: 1rem;
  }

  & img {
    height: 2.3rem;
    border-radius: 2rem;
  }
`

const Hello = () => {
    const name = "Roman"
    const avatar = "/man-icon.png"

    return (
        <StyledHello>
            <span>Welcome back,</span>
            {name}
            <img src={avatar} alt="img" />
        </StyledHello>
    )
}

export default Hello