import styled from "styled-components"
import Calculator from "../ui/Calculator"
import SideBar from "../ui/SideBar"
import { useEffect } from "react"
import { useCards } from "../features/cards/useCards"
import Spinner from "../ui/Spinner"
import { useSearchParams } from "react-router-dom"


const StyledBalnce = styled.div`
    
`

const StyledContacts = styled.div`
    grid-column: span 2;
`
const StyledHistory = styled.div`
    grid-column: span 2;
`

const Dashboard = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { data: cards, isLoading } = useCards();

    useEffect(() => {
        if (!cards) return;
        searchParams.set("cardId", cards[0].id.toString())
        setSearchParams(searchParams)
    }, [cards])

    if (isLoading) return <Spinner />

    return (
        <>
            <SideBar />
            <StyledBalnce>Balance</StyledBalnce>
            <Calculator />
            <StyledContacts>Contacts</StyledContacts>
            <StyledHistory>History</StyledHistory >
        </>
    )
}

export default Dashboard