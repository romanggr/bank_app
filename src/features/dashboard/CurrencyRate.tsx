import styled from "styled-components";
import Heading from "../../ui/Heading.tsx";

const Container = styled.div`
  padding: 1.5rem;
  background: #272727;
  border-radius: 2rem;

  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  & * {
    color: var(--color-white-dark);
  }
`

const Head = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
`

const Item = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
  &>p{
    font-weight: 500;
  }
`

const Currency = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.8rem;
  
  & > img {
    width: 1.8rem;
  }
`

interface IList {
    flag: string,
    name: string
    buyPrice: number,
    sellPrice: number
}

const currencyList: IList[] = [
    {flag: "uah.png", name: "UAH", buyPrice: 0.025, sellPrice: 0.024},
    {flag: "pln.png", name: "PLN", buyPrice: 0.27, sellPrice: 0.26},
    {flag: "euro.png", name: "EUR", buyPrice: 1.08, sellPrice: 1.08},
];

const CurrencyRate = () => {
    return (
        <Container>
            <Heading color={"white"}>Currency Rate</Heading>
            <div></div>

            <Head>
                <p>Currency</p>
                <p>Buy</p>
                <p>Sell</p>
            </Head>
            {
                currencyList.map((el,index) => (
                    <Item key={index}>
                        <Currency>
                            <img src={`/currencies/${el.flag}`} alt="flag"/>
                            <h3>{el.name}</h3>
                        </Currency>
                        <p>{el.buyPrice}</p>
                        <p>{el.sellPrice}</p>
                    </Item>
                ))
            }

        </Container>
    );
};

export default CurrencyRate;