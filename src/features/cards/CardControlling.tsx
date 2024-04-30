import styled from "styled-components"
import { PiPassword } from "react-icons/pi";
import { CiCreditCard1 } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { VscSymbolColor } from "react-icons/vsc";
import { MdDeleteOutline } from "react-icons/md";
import Modal from "../../ui/Modal";
import CardDetails from "../../ui/CardDetails";
import CardDelete from "../../ui/CardDelete";
import CardDesighn from "../../ui/CardDesighn";
import CardPin from "../../ui/CardPin";


const StyledCardControlling = styled.div`
padding:2rem 3rem 0 1rem !important;

&>p{
    margin: 0 0 2rem 2rem !important;
}

    & ul{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:0.5rem;
        list-style-type: none;
        
        
        & li{
        cursor: pointer;
        padding:0.9rem 1rem ;
        font-size:1.2rem; 
        font-weight:500;
        border-radius:2rem;
        width:100%;
        display:flex;
        align-items:center;
        justify-content: space-between;
        
        transition:0.2s;
        
        & div{
            width:100%;
            height:100%;
            display:flex;
            gap:1rem;
            align-items:center;
            justify-content:space-between;
        }
        
        & button{
            border:none;
            background-color:transparent;
        }
        
        &:hover{
            background-color:var(--color-light--2); 
        }
        & svg{
            font-size:1.5rem;
        }
    }
}
    `

const CardControlling = () => {

    return (
        <StyledCardControlling>
            <p>Card Controlling</p>
            <ul>
                <li>
                    <Modal>
                        <Modal.Open opens="details">
                            <div>
                                <CiCreditCard1 />
                                <div>
                                    <p>Show card details</p>
                                    <button>
                                        <IoIosArrowForward />
                                    </button>
                                </div>
                            </div>
                        </Modal.Open>
                        <Modal.Window name="details">
                            <CardDetails />
                        </Modal.Window>
                    </Modal>
                </li>
                <li>
                    <Modal>
                        <Modal.Open opens="design">
                            <div>
                                <VscSymbolColor />
                                <div>
                                    <p>Change design</p>
                                    <button>
                                        <IoIosArrowForward />
                                    </button>
                                </div>
                            </div>
                        </Modal.Open>
                        <Modal.Window name="design">
                            <CardDesighn />
                        </Modal.Window>
                    </Modal>
                </li>
                <li>
                    <Modal>
                        <Modal.Open opens="pin">
                            <div>
                                <PiPassword />
                                <div>
                                    <p>Your PIN</p>
                                    <button>
                                        <IoIosArrowForward />
                                    </button>
                                </div>
                            </div>
                        </Modal.Open>
                        <Modal.Window name="pin">
                            <CardPin />
                        </Modal.Window>
                    </Modal>
                </li>
                <li>
                    <Modal>
                        <Modal.Open opens="delete">
                            <div>
                                <MdDeleteOutline />
                                <div>
                                    <CardDelete />
                                    <button>
                                        <IoIosArrowForward />
                                    </button>
                                </div>
                            </div>
                        </Modal.Open>
                        <Modal.Window name="delete">
                            <p>content</p>
                        </Modal.Window>
                    </Modal>
                </li>
            </ul>


        </StyledCardControlling>
    )
}

export default CardControlling