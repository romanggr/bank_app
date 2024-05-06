import styled, {css} from "styled-components";
import Heading from "../../ui/Heading.tsx";
import Link from "../../ui/Link.tsx";
import { formatBalance, formatDays, formatTime} from "../../helpers/helpers.tsx";

const Container = styled.div`
  grid-column: span 2;
  padding: 1rem 1.5rem;

  background: var(--color-white-light);
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
`

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const List = styled.div`
  margin-top: 1.6rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2.4rem;
`

const Item = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 1fr auto;
  align-items: start;
  gap: 1rem;
`

const Img = styled.div<{ color: "orange" | "black" }>`
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  border-radius: 50%;

  ${props => props.color === "orange" && css`
    background: var(--color-orange-light);
    color: var(--color-orange-font);
  `}

  ${props => props.color === "black" && css`
    background: var(--color-white-dark);
  `}
`

const FromAndComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  &>h3{
    font-weight: 500;
    font-size: 1.1rem;
  }
  
  &>p{
    color: var(--color-light-font);
    font-size: 0.9rem;
  }
`

const DateAndTime = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;


  &>h3{
    font-weight: 500;
    font-size: 1.1rem;
  }

  &>p{
    color: var(--color-light-font);
  }
`

const Amount = styled.div<{ color: "orange" | "black" }>`
  font-weight: 600;
  font-size: 1.2rem;

  
  &>span{
    font-weight: 500;
  }
  
  ${props => props.color === "orange" && css`
    color: var(--color-orange-font);
    
    &>span{
      color: var(--color-orange-font);
      
    }
  `}
`

interface IData {
    amount: number,
    from: string,
    date: string,
    comment: string,
    transactionId: number
}

const data: IData[] = [
    {
        amount: 20,
        from: "Tom Crat",
        date: "01.09.2024 19:34",
        comment: "For products dcas",
        transactionId: 1
    },
    {
        amount: -20,
        from: "Tom Crat",
        date: "01.08.2024 19:34",
        comment: "For products sdcasc ascdsc",
        transactionId: 2
    },
    {
        amount: 80,
        from: "Tom Crat",
        date: "01.07.2024 19:34",
        comment: "For prodasdcsacucts",
        transactionId: 3

    },
    {
        amount: 420.17,
        from: "Tom Crat",
        date: "01.03.2024 19:34",
        comment: "Foradfas",
        transactionId: 4

    },

]


const History = () => {
    return (
        <Container>
            <Head>
                <Heading>Transactions History</Heading>
                <Link to={"history"}>Show Full History</Link>
            </Head>
            <List>
                {data.map((item) =>
                    <Item key={item.transactionId}>
                        <Img color={item.amount > 0 ? "black" : "orange"}>{item.from.charAt(0).toUpperCase()}</Img>
                        <FromAndComment>
                            <h3>{item.from}</h3>
                            <p>{item.comment}</p>
                        </FromAndComment>
                        <DateAndTime>
                            <h3>{formatDays(item.date)}</h3>
                            <p>{formatTime(item.date)}</p>
                        </DateAndTime>
                        <Amount color={item.amount > 0 ? "black" : "orange"}>{formatBalance(item.amount)}<span>USD</span></Amount>
                    </Item>)}
            </List>
        </Container>
    );
};

export default History;