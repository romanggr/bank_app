import styled from "styled-components";
import FormRow from "../ui/FormRow";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import { useLogin } from "../features/auth/useLogin";
import HomeLogo from "../ui/HomeLogo";

const StyledLogin = styled.div`
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

const Login = () => {
    const { login, isPending } = useLogin()

    const { handleSubmit, register, formState } = useForm();
    const { errors } = formState;

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const { email, password } = data;
        login({ email, password })
    };

    return (
        <StyledLogin>
            <HomeLogo />
            <p>Login</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormRow label="Email" error={typeof errors.email?.message === 'string'
                    ? errors.email?.message : undefined}>
                    <StyledInput required type="text" id="Email" placeholder="Type here..."
                        {...register("email", {
                            required: "This field is required",
                        })} />
                </FormRow>
                <FormRow label="Password" error={typeof errors.password?.message === 'string'
                    ? errors.password?.message : undefined}>
                    <StyledInput required type="password" id="Password" placeholder="Type here..."
                        {...register("password", {
                            required: "This field is required"
                        })} />
                </FormRow>
                <StyledBtnContainer>
                    <div>
                        <Button size="large" variation="peach">Submit</Button>
                        <Link to={"/register"}>Don't you have an account yet?</Link>
                    </div>
                </StyledBtnContainer>
            </form>
        </StyledLogin >
    )
}

export default Login