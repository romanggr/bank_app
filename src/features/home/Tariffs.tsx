import styled from "styled-components"


const StyledTariffs = styled.div`
  margin: 5rem 0;
  border-radius: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-white-dark);

  & table {
    width: 80%;
  }

  & > h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding: 2rem 0.5rem;

    & table {
      width: 100%;
    }
  }
`

const StyledTableHeader = styled.th`
  font-size: 1.6rem;
  text-align: center;
  padding-bottom: 1rem;
  
  &:nth-child(2) {
    color: var(--color-purple-light);
  }

  &:nth-child(3) {
    color: green;
  }

  &:nth-child(4) {
    color: var(--color-orange-font);
  }

  @media (max-width: 560px) {
    font-size: 1.2rem;
    padding-bottom: 0.8rem;
  }
`

const StyledTableRow = styled.tr`
  text-align: center;

  & td {
    padding: 0.5rem;
    border-top: 1px solid var(--color-white-light);
    border-left: 1px solid var(--color-white-light);

    &:first-child {
      font-weight: 600;
      text-align: start;
      border-left: none;
    }
  }

  @media (max-width: 560px) {
    & td {
      padding: 0.5rem 0;
      font-size: 0.8rem;
    }
  }
`;

const Tariffs = () => {
    return (
        <StyledTariffs id={"section-tariffs"}>
            <h2>Tariffs</h2>
            <table>
                <thead>
                <StyledTableRow>
                    <StyledTableHeader></StyledTableHeader>
                    <StyledTableHeader>Banker</StyledTableHeader>
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