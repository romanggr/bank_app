import styled from "styled-components"
import UpdateUserData from "../features/settings/UpdateUserData"
import UpdatePassword from "../features/settings/UpdatePassword"

const StyledSettings = styled.div`
    grid-column: span 4;
    grid-row: span 3;
    background-color:var(--color-light--2) !important;
    display:flex;
    justify-content:space-between;
    gap:1rem;

    &>div{
        background-color:var(--color-light--1);
        padding:2rem;
        border-radius:2rem;
      

            
            &>form{
                margin-top:2rem;
                display:flex;
                flex-direction:column;
                gap:1rem;
            }
        
    }
`

const Settings = () => {
    return (
        <StyledSettings>
            <UpdateUserData />
            <UpdatePassword />
        </StyledSettings>
    )
}

export default Settings