import { useState } from "react";
import AuthFormRow from "../auth/AuthFormRow.tsx";
import styled from "styled-components";
import Button from "../../ui/Button";
import { useUpdateUserPassword } from "./useUpdateUserPassword";

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
`;



const StyledBtnContainer = styled.div`
    margin-top:1rem;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:1rem;
`;

const UpdatePassword = () => {
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [error, setError] = useState<string | undefined>(undefined);

    const { updatePassword } = useUpdateUserPassword();

    const handleReset = () => {
        setError(undefined);
        setPassword("")
        setConfirmPassword("")
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password.length < 8) {
            setError("Password must be longer than 8 characters");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords must be the same");
            return;
        }

        updatePassword({ password })
    };

    return (
        <div>
            <h2>Update password</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <AuthFormRow label="Password" error={error}>
                    <StyledInput
                        required
                        type="password"
                        id="Password"
                        placeholder="Type here..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </AuthFormRow>
                <AuthFormRow label="Confirm Password">
                    <StyledInput
                        required
                        type="password"
                        id="ConfirmPassword"
                        placeholder="Type here..."
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </AuthFormRow>
                <StyledBtnContainer>
                    <Button type="button" onClick={() => handleReset()} variation="peach">
                        Reset
                    </Button>
                    <Button variation="purpleBorder">
                        Update password
                    </Button>
                </StyledBtnContainer>
            </form>
        </div>
    );
};

export default UpdatePassword;
