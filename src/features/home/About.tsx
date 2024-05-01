import styled from "styled-components";

const StyledAbout = styled.div`
  margin: 2rem 2vw;
  display: flex;
  align-items: center;
  gap: 15vw;

  & p {
    font-size: 1.2rem;
    line-height: 1.8rem;
  }

  & span {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-orange);
  }

  @media (max-width: 1000px) {
    margin: 2rem 0;
    gap: 5rem;

    & p {
      font-size: 1rem;
      line-height: 1.5rem;
    }

    & span {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 560px) {
    margin: 0 3rem;
    gap: 2rem;
    flex-direction: column;

    & p {
      font-size: 0.8rem;
      line-height: 1.2rem;
    }

    & span {
      font-size: 1rem;
    }
  }

`
const Cards = styled.div`
  & :first-child {
    position: absolute;
    width: 25rem;
  }

  & :last-child {
    position: relative;
    top: 1rem;
    left: 1.9rem;
    width: 25rem;
  }

  @media (max-width: 1000px) {
    & :first-child {
      width: 15rem;
    }

    & :last-child {
      top: 0.8rem;
      left: 1rem;
      width: 15rem;
    }
  }

  @media (max-width: 560px) {
    & :first-child {
      width: 12rem;
    }

    & :last-child {
      top: 0.5rem;
      left: 0.7rem;
      width: 12rem;
    }
  }
`

function About() {
    return (
        <StyledAbout>
            <Cards>
                <img src="/purple_card.png" alt="card"/>
                <img src="/black_card.png" alt="card"/>
            </Cards>
            <p><span>Banker</span> - is an innovative financial service that makes financial management easy and
                convenient for all users. Our bank combines advanced technology with a high level of service,
                providing customers with the opportunity to manage their finances quickly and efficiently.</p>
        </StyledAbout>
    );
}

export default About;