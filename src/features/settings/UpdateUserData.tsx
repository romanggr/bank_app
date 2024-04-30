import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import FormRow from "../../ui/FormRow"
import { useUser } from "../auth/useUser";
import Empty from "../../ui/Empty";
import { useState } from "react";
import styled from "styled-components";
import Button from "../../ui/Button";
import { useUpdateUserData } from "./useUpdateUserData";


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
const StyledInputImage = styled.input`
    width:80%;
    padding:0.5rem 1rem; 
    border-radius:2rem;
`
const StyledBtnContainer = styled.div`
        margin-top:1rem;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:1rem;
`

const UpdateUserData = () => {
    const { updateUser } = useUpdateUserData();
    const { user } = useUser();
    const [avatar, setAvatar] = useState<any>(null);

    if (!user) return <Empty message="Can't find profile data" />

    const { email } = user;
    const { phone, adress, fullName, avatar: lastAvatarPath } = user?.user_metadata;

    const { handleSubmit, register, formState, reset } = useForm({
        defaultValues: { phone, email, adress, fullName }
    });
    const { errors } = formState;

    const handleReset = () => {
        reset()
    }

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const { fullName, adress, phone } = data;
        updateUser({ fullName, adress, phone, avatar: avatar || lastAvatarPath })
    }
    return (
        <div>
            <h2>Update user data</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormRow label="Email" error={typeof errors.email?.message === 'string'
                    ? errors.email?.message : undefined}>
                    <StyledInput type="text" readOnly {...register("email", {
                        required: "This field is required",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Please provide a valid email address",
                        },
                    })} />
                </FormRow>
                <FormRow label="Full name" error={typeof errors.fullName?.message === 'string'
                    ? errors.fullName?.message : undefined}>
                    <StyledInput type="text" id="Full name" {...register("fullName", { required: "Full name is required" })} />
                </FormRow>
                <FormRow label="Phone" error={typeof errors.phone?.message === 'string'
                    ? errors.phone?.message : undefined}>
                    <StyledInput type="text" id="Phone"  {...register("phone", { required: "Phone is required" })} />
                </FormRow>
                <FormRow label="Adress" error={typeof errors.adress?.message === 'string'
                    ? errors.adress?.message : undefined}>
                    <StyledInput type="text" id="Adress" {...register("adress", { required: "Adress is required" })} />
                </FormRow>
                <FormRow label="Avatar">
                    <StyledInputImage type="file" accept="image/*"
                        onChange={(e) => setAvatar(e.target.files ? e.target.files[0] : null)} />
                </FormRow>
                <StyledBtnContainer>
                    <Button type="button" onClick={() => handleReset()} variation="peach">Reset</Button>
                    <Button variation="purpleBorder">Update data</Button>
                </StyledBtnContainer>
            </form>
        </div>
    )
}

export default UpdateUserData