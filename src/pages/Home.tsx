import styled from "styled-components"
import Tariffs from "../ui/Tariffs";
import Footer from "../ui/Footer";
import GetCart from "./GetCart";
import HomeHeader from "../ui/HomeHeader";



const StyledHome = styled.div`
    & main{
     margin:0 5rem ;
    }
`

const StyledDescription = styled.div`
    background-color:var(--color-light--2);
    border-radius:2rem;
    padding:3rem 5rem;
    display:flex;
    align-items:center;
    gap:20rem;

    & p{
        font-size:1.2rem;
        line-height:1.8rem;
    }
    & span {
      font-size:1.5rem;
      font-weight: 600;
      color:var(--color-orange);
    }

`

const StyledCards = styled.div`
    & :first-child{
        position: absolute;

    }
    & :last-child{
        position:relative;
        top:1rem;
        left:1.9rem;
    }
`

const Home = () => {
    return (
        <StyledHome>
            <HomeHeader />
            <main>
                <StyledDescription>
                    <StyledCards>
                        <img src="./purple_card.png" alt="card" />
                        <img src="./black_card.png" alt="card" />
                    </StyledCards>
                    <p><span>gBank</span> - is an innovative financial service that makes financial management easy and convenient for all users. Our bank combines advanced technology with a high level of service, providing customers with the opportunity to manage their finances quickly and efficiently.</p>
                </StyledDescription>
                <Tariffs />
                <GetCart />
            </main>
            <Footer />
        </StyledHome>
    )
}

export default Home