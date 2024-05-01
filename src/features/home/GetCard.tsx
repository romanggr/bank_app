import {IoMdDownload} from "react-icons/io";
import {MdDriveFileRenameOutline} from "react-icons/md";
import {CiCreditCard1} from "react-icons/ci";
import styled from "styled-components";
import { useNavigate} from "react-router-dom";

const Wrapper = styled.div`
  margin: 9rem 2rem;
  padding: 5rem 0;

  & > h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 3rem;
  }


  @media (max-width: 768px) {
    margin: 7rem 0.5rem 5rem;
  }

  @media (max-width: 560px) {
    margin: 5rem 0.5rem;
    padding: 1rem 0;

    & > h2 {
      font-size: 1.4rem;
    }
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  
  @media(max-width: 760px){
    gap: 2rem;
    
  }
`

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
  gap: 1rem;

  & p {
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
  }
  
  & span {
    color: var(--color-orange-font);
    text-decoration: none;
    transition: 0.2s;
    font-size: 1.4rem;
    cursor: pointer;

    &:hover {
      font-weight: 600;
      font-size: 1.5rem;
    }
  }

  & svg{
    font-size: 10rem;
    background-color: var(--color-orange-font);
    border-radius: 5rem;
    padding: 2rem;
  }

  @media(max-width: 768px){
    & p {
      font-size: 1.2rem;
    }

    & span {
      font-size: 1.2rem;
    }
    
    & svg{
      font-size: 8rem;
      padding: 1.4rem;
    }

  }

  @media(max-width: 560px){
    & p {
      font-size: 1rem;
    }

    & span {
      font-size: 1rem;
      
      &:hover{
        font-size: 1.2rem;
      }
    }

    & svg{
      font-size: 5rem;
      padding: 1rem;
    }

  }
`


const GetCard = () => {
    const navigate = useNavigate()
    return (
        <Wrapper id={"section-getCard"}>
            <h2>How to get a virtual card</h2>
            <Container>
                <StyledItem>
                    <IoMdDownload/>
                    <p>Go to the <span onClick={()=>navigate("registration")}>registration </span>page</p>
                </StyledItem>
                <StyledItem>
                    <MdDriveFileRenameOutline/>
                    <p>Provide your data</p>
                </StyledItem>
                <StyledItem>
                    <CiCreditCard1/>
                    <p>Get a virtual card</p>
                </StyledItem>
            </Container>
        </Wrapper>
    )
}

export default GetCard