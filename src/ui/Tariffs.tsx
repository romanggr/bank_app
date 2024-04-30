import styled from "styled-components"
import Header from "./Heading"

const StyledTariffs = styled.div`
    margin-top:5rem;
    border-radius:2rem;
    padding:2rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:var(--color-light--2);
    & table{
        width:80%;
       
    }
`

const StyledTableHeader = styled.th`
    font-size:1.6rem;
    text-align:center;
    padding-bottom:1rem;
    &:nth-child(2){
        color:var(--color-orange);
    }
    &:nth-child(3){
        color:green;
    }
    &:nth-child(4){
        color:black;
    }
`

const StyledTableRow = styled.tr`

text-align:center;

  & td {
    padding:0.5rem;
    border-top:1px solid var(--color-light--1);
    border-left:1px solid var(--color-light--1);

    &:first-child {
      font-weight: 600;
      text-align:start;
      border-left:none;
    }
  }
`;

const Tariffs = () => {
    return (
        <StyledTariffs>
            <Header>Tariffs</Header>
            <table>
                <thead>
                    <StyledTableRow>
                        <StyledTableHeader></StyledTableHeader>
                        <StyledTableHeader>gBank</StyledTableHeader>
                        <StyledTableHeader>Bank1</StyledTableHeader>
                        <StyledTableHeader>Bank2</StyledTableHeader>
                    </StyledTableRow>
                </thead>
                <tbody>

                    <StyledTableRow>
                        <td>Grace period</td>
                        <td>Up to 62 days</td>
                        <td>Up to 55 days</td>
                        <td>Up to 62 days</td>
                    </StyledTableRow>
                    <StyledTableRow>
                        <td>Interest rate per month</td>
                        <td>3,1%</td>
                        <td>3,5%</td>
                        <td>3,33%</td>
                    </StyledTableRow>
                    <StyledTableRow>
                        <td>Cash withdrawal</td>
                        <td>2%</td>
                        <td>3%</td>
                        <td>4%</td>
                    </StyledTableRow>
                    <StyledTableRow>
                        <td>Replenishment</td>
                        <td>Free</td>
                        <td>Free</td>
                        <td>Free</td>
                    </StyledTableRow>
                    <StyledTableRow>
                        <td>Cashback</td>
                        <td>Up to 20% of the total</td>
                        <td>-</td>
                        <td>Up to 20% of the total</td>
                    </StyledTableRow>
                </tbody>
            </table>
        </StyledTariffs>
    )
}

export default Tariffs