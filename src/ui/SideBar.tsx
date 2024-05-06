import styled from "styled-components"
import ModalAddCard from "../features/dashboard/ModalAddCard.tsx";
import ModalDeleteCard from "../features/dashboard/ModalDeleteCard.tsx";
import Heading from "./Heading.tsx";
import Link from "./Link.tsx";


const StyledSideBar = styled.div`
  grid-column: span 2;
  grid-row: span 3;
  padding: 1rem 2rem;
  background: var(--color-white-light);
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  
`



const Buttons = styled.div`
    margin:1rem 0;
    display:flex;
    justify-content:space-between;
    gap:1rem;
`



const SideBar = () => {

    return (
        <StyledSideBar>
            <Head>
                <Heading>Cards</Heading>
                <Link to={"cards"}>Show All</Link>
            </Head>


            <Buttons>
                <ModalAddCard />
                <ModalDeleteCard />
            </Buttons>
        </StyledSideBar >
    )
}

export default SideBar