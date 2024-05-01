import styled from "styled-components";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthFormRow from "../features/auth/AuthFormRow.tsx";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

import { useSingUp } from "../features/auth/useSingUp";



const StyledRegistration = styled.div`
  padding:2rem;
  background-color: var(--color-light--2);
  width: 70%;
  
  border-radius: 1rem;
  margin: 5% auto;

  & p{
    text-align:center;
    font-size:1.8rem;
    font-weight:600;
    color:var(--color-black);
    margin-top:1rem;
}
 

  & form{
        margin-top:2rem;
        display:flex;
        flex-direction:column;
        gap:1rem;
  }
 
`;

const StyledInput = styled.input`
    outline:none;
    border-radius:2rem;
    width:100%;
    border:2px solid var(--color-black);
    background-color:var(--color-light--1);
    font-size:1rem;
    padding:0.5rem 1rem; 
    &::placeholder{
        color:var(--color-black);
    }   
    &:focus{
        border:2px solid var(--color-peach--1);
    }
`

const StyledBtnContainer = styled.div`
    & div{
        margin-top:2rem;
        display:flex;
        flex-direction:column;
        align-items:center;
        & a{
            padding-top:0.5rem;
            &:hover{
                color:var(--color-orange);
            }
        }
    }
`


const Registration = () => {



    return (
        <StyledRegistration>
            <p>Personal data</p>


        </StyledRegistration>
    );
};

export default Registration;
