import styled from "styled-components"
import Card from "./PlasticCard"
import { CiEdit } from "react-icons/ci";
import { PiPassword } from "react-icons/pi";
import { CiCreditCard1 } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import Button from "./Button";
import Modal from "./Modal";
import ModalAddCard from "../features/cards/ModalAddCard";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCard } from "../features/cards/useCard";
import Spinner from "./Spinner";




const StyledSideBar = styled.div`
    grid-column: span 2;
    grid-row: span 3;
    padding:1rem 2rem !important;
    
`

const StyledContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:1rem;
    
    & :last-child{
        cursor: pointer;
        transition:0.2s;
        padding:1rem;
        border-radius:2rem;

        &:hover{
            background-color:var(--color-light--2); 

        }
    }
`
const HalfCard = styled.div`
    overflow: hidden;
    position:relative;
    width:110%;
    height: 10rem;
`

const StyledOptions = styled.ul`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    gap:0.5rem;

    margin-top:1rem;
    list-style-type: none;
    
    
    & li{
        cursor: pointer;
        padding:1rem;
        font-size:1.2rem; 
        font-weight:500;
        border-radius:2rem;
        width:100%;
        display:flex;
        align-items:center;
        justify-content: space-between;
        transition:0.2s;
        
        & div{
            display:flex;
            gap:1rem;
            align-items:center;
        }

        & button{
            border:none;
            background-color:transparent;
        }

        &:hover{
            background-color:var(--color-light--2); 
        }
    }
`

const StyledBtns = styled.div`
    margin:1rem 0;
    display:flex;
    justify-content:center;
    gap:1rem;
`



const SideBar = () => {

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const { data, isLoading } = useCard();
    if (!data) return null;

    if (isLoading) return <Spinner />

    return (
        <StyledSideBar>
            <StyledContainer>
                <p>Cards</p>
                <p onClick={() => navigate("/app/cards")}>Show all cards</p>
            </StyledContainer>
            <HalfCard>
                <Card size="large" number={data.number} name={data.fullName} style={data.style} date={data.date} />
            </HalfCard>
            <StyledOptions>
                <li>
                    <div>
                        <CiCreditCard1 />
                        <p>Show card details</p>
                    </div>
                    <button>
                        <IoIosArrowForward />
                    </button>
                </li>
                <li>
                    <div>
                        <PiPassword />
                        <p>Your PIN</p>
                    </div>
                    <button>
                        <IoIosArrowForward />

                    </button>
                </li>
                <li>
                    <div>
                        <CiUnlock />
                        <p>Security code</p>
                    </div>
                    <button>
                        <IoIosArrowForward />

                    </button>
                </li>
                <li>
                    <div>
                        <CiEdit />
                        <p>Edit limits</p>
                    </div>
                    <button>
                        <IoIosArrowForward />
                    </button>
                </li>
            </StyledOptions>
            <StyledBtns>
                <Modal>
                    <Modal.Open opens="add">
                        <Button variation="purple" size="medium">Add card</Button>
                    </Modal.Open>
                    <Modal.Window name="add">
                        <ModalAddCard />
                    </Modal.Window>
                </Modal>
                <Button variation="peach" size="medium" onClick={() => {
                    navigate("/app/settings")
                    setSearchParams(searchParams)
                }
                }>Import card</Button>
            </StyledBtns>
        </StyledSideBar >
    )
}

export default SideBar