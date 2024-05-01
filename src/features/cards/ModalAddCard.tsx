import styled from "styled-components"
import AuthFormRow from "../auth/AuthFormRow.tsx"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import Button from "../../ui/Button"
import { cardStringToNum, generateNumber, numberForCard } from "../../helpers/helpers"
import { useState } from "react"
import { useUser } from "../auth/useUser"
import { useCreateCard } from "./useCreateCard"

const StyledForm = styled.form`
    display:flex;
    flex-direction:column;
    gap:1rem;

& h2{
    font-size:2rem;
    text-align:center;
    margin-bottom:2rem;
}

& input{
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
    }
`
const StyledStyleContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  & input {
    display: none;
  }

  & label {
    width: 2.5rem;
    height: 2.5rem;
   
    border-radius: 2rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  & input:checked + label {
    border:4px dotted var(--color-light--1);
  }

 
`;

const StyledBlack = styled.label`
  background: var(--color-black);
`;

const StyledPurple = styled.label`
  background: var(--color-purple--1);
`;

const StyledPeach = styled.label`
  background: var(--color-orange--light);
`;

const BtnContainer = styled.div`
    display:flex;
    gap:1rem;
    justify-content:center;
    margin-top:1rem;
`

const ModalAddCard = () => {
    const [style, setStyle] = useState<string>("black")
    const { createCard } = useCreateCard()
    const { user } = useUser();
    const { formState, register, handleSubmit } = useForm({
        defaultValues: {
            fullName: user?.user_metadata.fullName,
            numberForm: numberForCard(generateNumber()),
            pin: "",
        }
    });
    const { errors } = formState

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const { fullName, numberForm, pin } = data;
        const number = cardStringToNum(numberForm)

        createCard({ fullName, number, pin, style }, {
            onSuccess: () => {

            }
        })
    }

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <h2>Create card</h2>
            <AuthFormRow label="Name on card" error={typeof errors.fullName?.message === 'string'
                ? errors.fullName?.message : undefined}>
                <input type="text" required {...register("fullName", { required: "Name is required" })} />
            </AuthFormRow>
            <AuthFormRow label="Card number" error={typeof errors.numberForm?.message === 'string'
                ? errors.numberForm?.message : undefined}>
                <input type="text" readOnly {...register("numberForm")} />
            </AuthFormRow>
            <AuthFormRow label="Pin code" error={typeof errors.pin?.message === 'string'
                ? errors.pin?.message : undefined}>
                <input type="password" required
                    {...register("pin", {
                        required: "Pin is required",
                        validate: (value) => value.length === 4 || "Pin length must be equal 4"
                    })} />
            </AuthFormRow>
            <AuthFormRow label="Card style">

                <StyledStyleContainer>
                    <input id="black" type="checkbox" checked={"black" === style} value={"black"} onChange={(e) => setStyle(e.target.value)} />
                    <StyledBlack htmlFor="black"></StyledBlack>
                    <input id="purple" type="checkbox" checked={"purple" === style} value={"purple"} onChange={(e) => setStyle(e.target.value)} />
                    <StyledPurple htmlFor="purple"></StyledPurple>
                    <input id="peach" type="checkbox" checked={"peach" === style} value={"peach"} onChange={(e) => setStyle(e.target.value)} />
                    <StyledPeach htmlFor="peach"></StyledPeach>
                </StyledStyleContainer>



            </AuthFormRow>
            <BtnContainer>
                <Button>Reset</Button>
                <Button variation="purpleBorder">Create</Button>
            </BtnContainer>
        </StyledForm>
    )
}

export default ModalAddCard