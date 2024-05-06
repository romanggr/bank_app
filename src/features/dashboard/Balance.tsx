import styled from "styled-components"
import { formatBalance } from "../../helpers/helpers"
import Heading from "../../ui/Heading.tsx";
import Button from "../../ui/Button.tsx";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";

const Container = styled.div`
  padding: 1.5rem;
  background: var(--color-white-light);
  border-radius: 2rem;
  
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  

  & > div {
    display: flex;
    align-items: baseline;
    gap: 1rem;
  }
`

const Value = styled.h3`
  font-size: 2.8rem;
  font-weight: 500;
`

const Currency = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
`



const Balance = ({ balance }: { balance: number }) => {
    return (
        <Container>
            <Heading>Cards Balance</Heading>
            <div>
                <Value>{formatBalance(balance)}</Value>
                <Currency>USD</Currency>
            </div>
            <div>
                <Button size={"medium"} color={"purple"}>Send <FaArrowUpLong/></Button>
                <Button size={"medium"} color={"grey"}>Deposit <FaArrowDownLong/></Button>

            </div>
        </Container>
    )
}

export default Balance