import { useEffect, useState } from "react"
import styled from "styled-components"


const StyledCalculator = styled.div`
    display:flex;
    flex-direction: column;
   
   
`
const StyledInput = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:1rem;

    & input{
    outline:none;
    border-radius:2rem;
    border-top-left-radius:0;
    border-bottom-left-radius:0;
    border:2px solid var(--color-black);
    border-left:1px solid var(--color-black);
    background-color:var(--color-light--1);
    font-size:1rem;
    padding:0.5rem 0.7rem; 
    
    width:60%;
    height:2.2rem;
    &::placeholder{
        color:var(--color-black);
    }   
    &:focus{
        border:2px solid var(--color-peach--1);
    }
    }

    & select{
        border:2px solid var(--color-black);
        border-right:1px solid var(--color-black);
        background-color:var(--color-light--1);
        font-size:1rem;
        outline:none;
        border-radius:2rem;
        border-top-right-radius:0;
        border-bottom-right-radius:0;
        padding:0.5rem 0 0.5rem 0.5rem; 
        height:2.2rem;
    }
`

const Calculator = () => {
    const [firstValue, setFirstValue] = useState<number>(1);
    const [secondValue, setSecondValue] = useState<string>("");

    const [firstCurrency, setFirstCurrency] = useState("EUR");
    const [secondCurrency, setSecondCurrency] = useState("UAH");


    useEffect(() => {
        async function convert() {
            if (!firstValue) return;

            const response = await fetch(`https://v6.exchangerate-api.com/v6/d3a35a1910a7ae6e94fa67b8/latest/${firstCurrency}`);
            const data = await response.json();

            if (data.conversion_rates && data.conversion_rates[secondCurrency]) {
                const convertedValue = (Number(data.conversion_rates[secondCurrency] * firstValue)).toFixed(2);
                setSecondValue(convertedValue);
            }
        }

        convert()
    }, [firstValue, secondValue, firstCurrency, secondCurrency])

    return (
        <StyledCalculator>
            <p>Exchange calculator</p>
            <StyledInput>
                <select onChange={(e) => setFirstCurrency(e.target.value)} value={firstCurrency}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="AUD">AUD</option>
                    <option value="AWG">AWG</option>
                    <option value="BGN">BGN</option>
                    <option value="BSD">BSD</option>
                    <option value="COP">COP</option>
                    <option value="HUF">HUF</option>
                    <option value="HTG">HTG</option>
                    <option value="UAH">UAH</option>
                </select>
                <input
                    placeholder="Type here..."
                    type="number"
                    value={firstValue}
                    onChange={(e) => setFirstValue(parseFloat(e.target.value))} />
            </StyledInput>

            <StyledInput>
                <select onChange={(e) => setSecondCurrency(e.target.value)} value={secondCurrency}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="AUD">AUD</option>
                    <option value="AWG">AWG</option>
                    <option value="BGN">BGN</option>
                    <option value="BSD">BSD</option>
                    <option value="COP">COP</option>
                    <option value="HUF">HUF</option>
                    <option value="HTG">HTG</option>
                    <option value="UAH">UAH</option>
                </select>
                <input
                    type="text"
                    value={secondValue}
                    onChange={(e) => setSecondCurrency(e.target.value)}
                    readOnly
                />
            </StyledInput>
        </StyledCalculator>
    )
}

export default Calculator