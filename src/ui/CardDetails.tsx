import styled from "styled-components"

const StyledContainer = styled.div`
    display:flex;
    flex-direction:column;
`
const StyledRow = styled.div`
    display:flex;
`
const CopyBtn = styled.button`
    
`

const CardDetails = () => {
    return (
        <StyledContainer>
            <StyledRow>
                <p>Owner</p>
                <div>xxxx</div>
                <CopyBtn>Copy</CopyBtn>
            </StyledRow>
        </StyledContainer>
    )
}

export default CardDetails