import styled from "styled-components"
import CardsCarousel from "../features/cards/CardsCarousel"
import TotalBalace from "../ui/TotalBalace"
import CardControlling from "../features/cards/CardControlling"
import { useCards } from "../features/cards/useCards"
import Spinner from "../ui/Spinner"
import Empty from "../ui/Empty"
import { useSearchParams } from "react-router-dom"


const StyledSideBar = styled.div`
    grid-column: span 2;
    grid-row: span 3;
    padding:0rem 2rem !important;
    justify-items:center;
    align-items:center;

    
    
`



const StyledMenu = styled.div`
    grid-column: span 2;
    grid-row: span 3;
    background-color:var(--color-light--2) !important;
    padding:0rem !important;

    display:grid;
    grid-template-columns:1.5fr 1fr;
    grid-template-rows:1fr 4fr;
    gap:1rem;

    &>div{
        background-color:var(--color-light--1);
        border-radius:2rem;
        padding:1rem;
        
    }
`
const StyledHistory = styled.div`
    grid-row: span 2;
    padding:2rem 1rem 1rem 3rem !important;

    display:flex;
    flex-direction:column;
    justify-content:space-between;
`


const StyledPagination = styled.div`
    text-align:center;
`



const Cards = () => {
    const { data: cards, isLoading: cardsLoading } = useCards();
    const [searchParams, setSearchParams] = useSearchParams();

    if (!cards) return <Empty message="Cards don't found" />

    let cardId: number;
    if (!searchParams.get("cardId")) {
        searchParams.set("cardId", cards[0].id.toString())
        setSearchParams(searchParams);
        cardId = cards[0].id;
    } else {
        cardId = Number(searchParams.get("cardId"))
    }

    const card = cards.filter(item => item.id === cardId)[0];

    if (cardsLoading) return <Spinner />
    return (
        <>
            <StyledSideBar>
                <CardsCarousel />
            </StyledSideBar>
            <StyledMenu>
                <TotalBalace balance={card.balance} />
                <StyledHistory>
                    <p>Last Transaction</p>
                    <StyledPagination>
                        1 2 3 4
                    </StyledPagination>
                </StyledHistory>
                <CardControlling />
            </StyledMenu>
        </>
    )
}

export default Cards