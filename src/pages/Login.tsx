import styled from "styled-components";
import Header from "../features/home/Header.tsx";
import AuthFormRow from "../features/auth/AuthFormRow.tsx";
import {useState} from "react";
import {IAuth} from "../helpers/types.ts";
import AuthForm from "../features/auth/AuthForm.tsx";
import Input from "../features/auth/Input.tsx";


const Container = styled.div`
  height: 100%;
  width: 30rem;
  margin: 7rem auto;

  & > h2 {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
  
  @media(max-width: 768px){
    width: 80vw;

    & > h2 {
      font-size: 2rem;
    }
  }

`;



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
                <AuthForm buttonName={"Continue"}>
                    <AuthFormRow  label={"Email"} error={email.error}>
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
                </AuthForm>
            </Container>
        </>
    )
}

export default Login