import styled from "styled-components";
import Header from "../features/home/Header.tsx";
import AuthFormRow from "../features/auth/AuthFormRow.tsx";
import React, {useState} from "react";
import {IAuth, IAuthDateOfBirth, IAuthPhoto} from "../helpers/types.ts";
import Input from "../features/auth/Input.tsx";
import FileInput from "../features/auth/FileInput.tsx";
import AuthForm from "../features/auth/AuthForm.tsx";
import {validateEmail, validatePassword} from "../helpers/helpers.tsx";

const Container = styled.div`
  height: 100%;
  width: 30rem;
  margin: 3rem auto;

  & > h2 {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    width: 80vw;
    margin: 4rem auto 3rem;

    & > h2 {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }

`;


const Registration = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const [email, setEmail] = useState<IAuth>({
        data: "",
        error: ""

    })
    const [phone, setPhone] = useState<IAuth>({
        data: "+",
        error: ""

    })
    const [name, setName] = useState<IAuth>({
        data: "",
        error: ""

    })
    const [surname, setSurname] = useState<IAuth>({
        data: "",
        error: ""

    })
    const [nationality, setNationality] = useState<IAuth>({
        data: "",
        error: ""

    })
    const [photo, setPhoto] = useState<IAuthPhoto>({
        data: "",
        error: ""

    })
    const [dateOfBirth, setDateOfBirth] = useState<IAuthDateOfBirth>({
        data: new Date(),
        error: ""
    })
    const [password, setPassword] = useState<IAuth>({
        data: "",
        error: ""
    })
    const [passwordConfirmation, setPasswordConfirmation] = useState<IAuth>({
        data: "",
        error: ""
    })


    const handleRegisterContactData = () => {
        setEmail(prev => ({...prev, error: ""}))
        setPhone(prev => ({...prev, error: ""}))
        setPassword(prev => ({...prev, error: ""}))
        setPasswordConfirmation(prev => ({...prev, error: ""}))


        if (!validateEmail(email.data)) {
            setEmail(prev => ({...prev, error: "Provide a valid email"}))
            return
        }
        if (phone.data.length < 8) {
            setPhone(prev => ({...prev, error: "Provide a valid phone number"}))
            return
        }
        if (!validatePassword(password.data)) {
            setPassword(prev => ({...prev, error: "The password must contain letters and numbers length > 8"}))
            return
        }
        if (password.data !== passwordConfirmation.data) {
            setPasswordConfirmation(prev => ({...prev, error: "Passwords must be the same"}))
            return
        }

        setIsOpen(true)
    }

    const handleRegister = () => {
        setName(prev => ({...prev, error: ""}))
        setSurname(prev => ({...prev, error: ""}))
        setNationality(prev => ({...prev, error: ""}))
        setDateOfBirth(prev => ({...prev, error: ""}))

        if (name.data.length < 2) {
            setName(prev => ({...prev, error: "Provide a valid name"}))
            return
        }
        if (surname.data.length < 2) {
            setSurname(prev => ({...prev, error: "Provide a valid surname"}))
            return
        }
        if (nationality.data.length < 4) {
            setNationality(prev => ({...prev, error: "Provide a valid nationality"}))
            return
        }
        if (2024 - (new Date(dateOfBirth.data).getFullYear()) < 18) {
            setDateOfBirth(prev => ({...prev, error: "You must be over 18 years old"}))
            return
        }
        if (!photo.data) {
            setPhoto(prev => ({...prev, error: "Provide your photo"}))
            return
        }
    }


    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const enteredDate = e.target.value;
        const enteredYear = enteredDate.split("-")[0];

        // Check if the entered year has more than 4 characters
        if (enteredYear.length > 4) {
            setDateOfBirth((prev) =>
                ({...prev, error: "Year should not exceed 4 characters"}))
            return;
        }
        setDateOfBirth((prev) => ({...prev, data: new Date(enteredDate)}));
    };


    return (
        <>
            <Header/>
            <Container>
                <h2>{!isOpen ? "Registration" : "Personal data"}</h2>
                {!isOpen ? (
                    <AuthForm buttonName={"Continue"} onClick={handleRegisterContactData}>
                        <AuthFormRow label={"Email"} error={email.error}>
                            <Input
                                type={"text"}
                                value={email.data}
                                onChange={(e) =>
                                    setEmail((prev) => ({...prev, data: e.target.value}))
                                }
                            />
                        </AuthFormRow>
                        <AuthFormRow label={"Phone with country code"} error={phone.error}>
                            <Input
                                type={"text"}
                                value={phone.data}
                                onChange={(e) =>
                                    setPhone((prev) => ({...prev, data: e.target.value}))
                                }
                            />
                        </AuthFormRow>
                        <AuthFormRow label={"Password"} error={password.error}>
                            <Input
                                type={"password"}
                                value={password.data}
                                onChange={(e) =>
                                    setPassword((prev) => ({...prev, data: e.target.value}))
                                }
                            />
                        </AuthFormRow>
                        <AuthFormRow label={"Password Confirmation"} error={passwordConfirmation.error}>
                            <Input
                                type={"password"}
                                value={passwordConfirmation.data}
                                onChange={(e) =>
                                    setPasswordConfirmation((prev) => ({...prev, data: e.target.value}))
                                }
                            />
                        </AuthFormRow>
                    </AuthForm>
                ) : (
                    <AuthForm buttonName={"Register"} onClick={handleRegister}>
                        <AuthFormRow label={"Name"} error={name.error}>
                            <Input
                                type={"text"}
                                value={name.data}
                                onChange={(e) =>
                                    setName((prev) => ({...prev, data: e.target.value}))
                                }
                            />
                        </AuthFormRow>
                        <AuthFormRow label={"Surname"} error={surname.error}>
                            <Input
                                type={"text"}
                                value={surname.data}
                                onChange={(e) =>
                                    setSurname((prev) => ({...prev, data: e.target.value}))
                                }
                            />
                        </AuthFormRow>
                        <AuthFormRow label={"Nationality"} error={nationality.error}>
                            <Input
                                type={"text"}
                                value={nationality.data}
                                onChange={(e) =>
                                    setNationality((prev) => ({...prev, data: e.target.value}))
                                }
                            />
                        </AuthFormRow>
                        <AuthFormRow label={"Date of birth"} error={dateOfBirth.error}>
                            <Input
                                type={"date"}
                                value={dateOfBirth.data.toISOString().slice(0, 10)}
                                onChange={(e) => handleDateChange(e)}
                            />
                        </AuthFormRow>
                        <AuthFormRow label={"Your photo"} error={photo.error}>
                            <FileInput
                                value={photo.data}
                                onChange={(e) =>
                                    // setPhoto((prev) =>
                                    //     ({...prev, data: e.target.files && e.target.files[0]}))
                                    console.log(e.target.files)
                                }/>
                        </AuthFormRow>
                    </AuthForm>
                )}

            </Container>
        </>
    )
        ;
};


export default Registration;