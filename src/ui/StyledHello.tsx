import styled from "styled-components"
import { useUser } from "../features/auth/useUser"

const StyleHello = styled.div`
   color: var(--color-purple--2) !important;
   font-weight:600;
   font-size:1.3rem;
   display:flex;
   align-items:center;
   justify-content: space-around;
   padding:1rem !important;
   
   & span{
        font-weight:400 ;
        font-size:1rem ;
   }
   & img{
        height:2.3rem;
        border-radius:2rem;
   }
`

const StyledHello = () => {
    const { user } = useUser();
    const name = user?.user_metadata.fullName.split(' ')[0]
    const avatar = user?.user_metadata.avatar

    return (
        <StyleHello>
            <span>Welcome back,</span>
            {name}
            <img src={avatar} alt="img" />
        </StyleHello>
    )
}

export default StyledHello