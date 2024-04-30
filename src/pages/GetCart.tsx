import { IoMdDownload } from "react-icons/io";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import styled from "styled-components";
import Heading from "../ui/Heading";
import { Link } from "react-router-dom";

const StyledHowGet = styled.div`
    background-color:var(--color-light--2);
    border-radius:2rem;
    margin:5rem 0;
    padding:3rem 5rem;

    & div{
        display:flex;
        justify-content:center;
        gap:5rem;
    }
`
const StyledItem = styled.div`
    margin-top:3rem;
    display:flex;
    flex-direction:column;
    
    & p{
        font-size:1.5rem;
        font-weight:500;
        text-align:center;

        & a{
            color:var(--color-orange);

            &:hover{
                color: #bd7b00;
            }
        }
    }
`

const StyledIcon = styled.div`
        
    & *{
        font-size:10rem;
        background-color:var(--color-orange);
        border-radius:5rem;
        padding:2rem;

    }

 `

const GetCart = () => {
    return (
        <StyledHowGet>
            <Heading>How to get a virtual card</Heading>
            <div>
                <StyledItem>
                    <StyledIcon>
                        <IoMdDownload />
                    </StyledIcon>
                    <p>First, you need to go to the <Link to={"/registration"}>registration page</Link></p>
                </StyledItem>
                <StyledItem>
                    <StyledIcon>
                        <MdDriveFileRenameOutline />
                    </StyledIcon>
                    <p>Secondly, you must provide your data there</p>
                </StyledItem>
                <StyledItem>
                    <StyledIcon>
                        <CiCreditCard1 />
                    </StyledIcon>
                    <p>In the end, you will receive a virtual card</p>
                </StyledItem>
            </div>
        </StyledHowGet>
    )
}

export default GetCart