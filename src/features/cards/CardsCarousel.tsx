import { useRef, useState } from "react"
import styled from "styled-components";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Card from "../../ui/PlasticCard";
import { useCards } from "./useCards";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import { useSearchParams } from "react-router-dom";



const StyledSlider = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: start;
    height:100%;
   

    & svg{
        font-size:4rem;
        transition: 0.2s;
        &:hover{
            fill:var(--color-purple--1);
        }
    }
`
const StyledButton = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

const StyledSlides = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items:center; */
    padding-left:1rem;
    gap: 1rem;
    width:105%;
    height: calc(100%-4rem);
    overflow: auto;
    
    &::-webkit-scrollbar{
         display : none ; 
        }
    
`;


const CardsCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const { data, isLoading } = useCards();


    if (isLoading) return <Spinner />
    if (!data) return <Empty message="Cards list is empty" />

    const toggleCard = (index: number) => {
        setCurrentSlide(index);
        searchParams.set("cardId", data[index].id.toString())
        setSearchParams(searchParams)
    };

    const scrollUp = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                top: -150,
                behavior: "smooth",
            });
        }
    };

    const scrollDown = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                top: 150,
                behavior: "smooth",
            });
        }
    };



    return (
        <StyledSlider>
            <StyledButton onClick={scrollUp}>
                <IoIosArrowUp />
            </StyledButton>
            <StyledSlides ref={scrollContainerRef}>
                {data?.map((card, index) => (
                    <Card
                        onClick={() => toggleCard(index)}
                        date={card.date}
                        key={card.number}
                        name={card.fullName}
                        number={card.number}
                        current={index === currentSlide ? "yes" : "no"}
                        style={card.style}
                    />
                ))}
            </StyledSlides>
            <StyledButton onClick={scrollDown}>
                <IoIosArrowDown />
            </StyledButton>
        </StyledSlider>
    );
};

export default CardsCarousel;