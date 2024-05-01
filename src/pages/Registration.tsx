import styled from "styled-components";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import FormRow from "../ui/FormRow";
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
    const { singUp } = useSingUp();
    const { handleSubmit, register, formState, getValues, reset } = useForm();
    const { errors } = formState;

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const { email, password, name, surname, phone, adress } = data;
        singUp({ email, password, name, surname, phone, adress }, {
            onSuccess: () => {
                reset()
            }
        })

    };



    return (
        <StyledRegistration>
            <p>Personal data</p>
            <form onSubmit={handleSubmit(onSubmit)}>

                <FormRow label="Name" error={typeof errors.name?.message === 'string'
                    ? errors.name?.message : undefined}>
                    <StyledInput required placeholder="Type here..."
                        id="Name" type="text"
                        {...register("name", { required: "Name is required" })} />
                </FormRow>

                <FormRow label="Surname" error={typeof errors.surname?.message === 'string'
                    ? errors.surname?.message : undefined}>
                    <StyledInput required placeholder="Type here..."
                        id="Surname" type="text"
                        {...register("surname", { required: "Surname is required" })} />
                </FormRow>

                <FormRow label="Adress" error={typeof errors.adress?.message === 'string'
                    ? errors.adress?.message : undefined}>
                    <StyledInput required placeholder="Type here..."
                        id="Adress" type="text" {...register("adress", { required: "Adress is required" })} />
                </FormRow>

                <p>Contact details</p>

                <FormRow label="Phone" error={typeof errors.phone?.message === 'string'
                    ? errors.phone?.message : undefined}>
                    <StyledInput required placeholder="Type here..."
                        id="Phone" type="tel"
                        {...register("phone", { required: "Phone is required" })} />
                </FormRow>

                <FormRow label="Email" error={typeof errors.email?.message === 'string'
                    ? errors.email?.message : undefined}>
                    <StyledInput required type="email" id="Email" placeholder="Type here..."
                        {...register("email", {
                            required: "This field is required",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Please provide a valid email address",
                            },
                        })} />
                </FormRow>

                <p>Password</p>
                <FormRow label="Password" error={typeof errors.password?.message === 'string'
                    ? errors.password?.message : undefined}>
                    <StyledInput required type="password" id="Password" placeholder="Type here..."
                        {...register("password", {
                            required: "This field is required", minLength: {
                                value: 8,
                                message: "Password must have min 8 characters"
                            }
                        })} />
                </FormRow>

                <FormRow label="Password confirmation" error={typeof errors.passwordConfirmation?.message === 'string'
                    ? errors.passwordConfirmation?.message : undefined}>
                    <StyledInput
                        placeholder="Type here..."
                        type="password"
                        id="Password confirmation"
                        {...register("passwordConfirmation", {
                            required: "This field is required",
                            validate: (value) =>
                                getValues().password === value || "Passwords need to match",
                        })}
                    />
                </FormRow>
                <StyledBtnContainer>
                    <div>
                        <Button size="large" variation="peach">Submit</Button>
                        <Link to={"/login"}>Do you already have an account?</Link>
                    </div>
                </StyledBtnContainer>
            </form>
        </StyledRegistration>
    );
};

export default Registration;
