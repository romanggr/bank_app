import styled, { css } from "styled-components"
import { copyToClipboard, numberForCard } from "../helpers/helpers"


const StyledCard = styled.div<{ size: "large" | "medium", current: "yes" | "no", variation: string | "purple" | "peach" | "black" }>`
    height: 13rem;
    width: 22rem;
    padding: 2rem;
    color: white;
    background-color: black;
    border:3px solid transparent;
    border-radius: 2rem;
    display: grid;
    grid-template-rows: 2fr 1fr 1fr;
    position: relative;

    * {
        color: white;
    }

    ${(props) => (props.variation === "purple" && {
        backgroundColor: "var(--color-purple--2)",

    })
    };
    ${(props) => (props.variation === "peach" && {
        backgroundColor: "var(--color-peach--2)",

    })
    };

    ${(props) => (props.size === "large" && {
        width: "25rem",
        height: "15rem"
    })
    };

    ${(props) => (props.size === "medium" && {
        width: "23rem",
        height: "13rem",
        gap: "1.5rem",

    })};

    ${(props) =>
        props.current === "yes" &&
        css`
       border: 3px dotted var(--color-light--1);
      

      &::after {
        content: "Selected";
        color:var(--color-black);
        font-size:1.3rem;
        font-weight:600;
        position:absolute;
        transform: rotate(90deg);
        right:-4rem;
        top:5rem;
        
        
      }
    `}



    & p{
    letter-spacing: ${(props) => (props.size === "medium" && "0.1rem")};
}



`;


const StyledDouble = styled.div`
justify-content: space-between;
align-items: flex-start;
display: flex;

    &p{
    color: white;
    font-size: 1.3rem;
    letter-spacing: 0.1rem;

}

    &div{
    border: 3px solid white;
    padding: 0.5rem;
    border-radius: 1rem;
    letter-spacing: 0.2rem;
}
`


const StyledNumber = styled.p`
font-size: 1.4rem;
letter-spacing: 0.15rem;
cursor: pointer;

`
interface CardProps {
    current?: "yes" | "no",
    size?: "medium" | "large",
    name: string,
    style: "black" | "purple" | "peach" | string,
    number: number,
    date: string,
    onClick?: () => void
}

const Card = ({ name, style = "black", number, date, size = "medium", current = "no", onClick }: CardProps) => {
    return (
        <StyledCard onClick={onClick} color={style} current={current} size={size} variation={style}>
            <StyledDouble>
                <p>{name}</p>
                <img src="/mastercard.png" alt="mastercard" />
            </StyledDouble>
            <StyledNumber onClick={() => copyToClipboard(numberForCard(number), "Number successfully copied")}>{numberForCard(number)}</StyledNumber>
            <StyledDouble>
                <p>{date}</p>
                <div>CVV</div>
            </StyledDouble>
        </StyledCard>
    )
}

export default Card;

