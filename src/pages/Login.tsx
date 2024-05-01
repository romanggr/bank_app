import styled from "styled-components";
import Header from "../features/home/Header.tsx";
import AuthFormRow from "../features/auth/AuthFormRow.tsx";
import {useState} from "react";
import {IAuth} from "../helpers/types.ts";


const Container = styled.div`
  height: 100%;
  width: 50rem;
  margin: 7rem auto;
  padding-left: 12rem;

  & > h2 {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }

`;

const Form = styled.form`
  //border: 4px solid black;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;

`

const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 3px solid var(--color-dark-font);
  font-size: 1.2rem;
  font-weight: 500;
  padding-bottom: 0.2rem;
  outline: none;
`


const Btn = styled.button`
  background: black;
  color: var(--color-white-light);
  border: none;
  font-size: 1.4rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
`


const Login = () => {
    const [email, setEmail] = useState<IAuth>({
        data: "",
        error: ""

    })
    const [password, setPassword] = useState<IAuth>({
        data: "",
        error: ""
    })


    return (
        <>
            <Header/>
            <Container>
                <h2>Login</h2>
                <Form>
                    <AuthFormRow label={"Email"} error={email.error}>
                        <Input
                            type={"text"}
                            value={email.data}
                            onChange={(e) =>
                                setEmail(prev => ({...prev, data: e.target.value}))}/>
                    </AuthFormRow>
                    <AuthFormRow label={"Password"} error={password.error}>
                        <Input
                            type={"password"}
                            value={password.data}
                            onChange={(e) =>
                                setPassword(prev => ({...prev, data: e.target.value}))}/>
                    </AuthFormRow>
                    <AuthFormRow>
                        <Btn>Continue</Btn>
                    </AuthFormRow>

                </Form>
            </Container>
        </>
    )
}

export default Login