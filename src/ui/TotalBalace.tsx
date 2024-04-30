import styled from "styled-components"
import { formatBalance } from "../helpers/helpers"

const StyledBalance = styled.div`
    padding:1.5rem 0 1rem 3rem !important;
    display:flex;
    flex-direction:column;
    gap:1rem;

    & p{
        color:var(--color-grey);
    }

    & h3{
        font-size:3rem;
        font-weight:500;
    }

    &>div{
        display:flex;
        align-items: baseline;
        gap:1rem;

    }
`

const TotalBalace = ({ balance }: { balance: number }) => {
    return (
        <StyledBalance>
            <p>Card Balance</p>
            <div>
                <h3>{formatBalance(balance)}</h3>
                <p>USD</p>
            </div>
        </StyledBalance>
    )
}

export default TotalBalace