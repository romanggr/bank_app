import styled from "styled-components"
import Tariffs from "../features/home/Tariffs.tsx";
import GetCard from "../features/home/GetCard.tsx";
import Header from "../features/home/Header.tsx";
import About from "../features/home/About.tsx";



const Main = styled.main`
  background: var(--color-white-light);
  padding: 2rem 6rem;
  
  @media(max-width: 1000px){
    padding: 2rem;
  }

  @media(max-width: 560px){
    padding: 2rem 0.5rem;
  }
`


const Home = () => {

    return (
        <div>
            <Header />
            <Main>
                <About />
                <GetCard/>
                <Tariffs/>
            </Main>
        </div>
    )
}

export default Home