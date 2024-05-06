import styled from "styled-components";
import Heading from "../../ui/Heading.tsx";
import Link from "../../ui/Link.tsx";

const Container = styled.div`
  grid-column: span 2;

  padding: 0.5rem 1.5rem;
  background: var(--color-white-light);
  border-radius: 2rem;
`

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const List = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 3.5rem;
`

const AddImg = styled.div`
  border: 2px dashed black;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.15);
  }

`

const Img = styled.img`
  max-width: 5rem;
  height: 4rem;
  border-radius: 50%;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.15);
  }
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  & > p {
    font-size: 1.1rem;
    font-weight: 600;
  }

`



interface IData {
    name: string,
    img: string
}

const data: IData[] = [
    {name: "Roman", img: "/man-icon.png"},
    {name: "Roman", img: "/man-icon.png"},
    {name: "Roman", img: "/man-icon.png"},
    {name: "Roman", img: "/man-icon.png"},
    {name: "Roman", img: "/man-icon.png"},
    {name: "Roman", img: "/man-icon.png"},
]


const Contacts = () => {
    return (
        <Container>
            <Head>
                <Heading>Contacts</Heading>
                <Link to={"contacts"}>Show All Contacts</Link>
            </Head>

            <List>
                <Item>
                    <AddImg>+</AddImg>
                    <p>Add</p>
                </Item>
                {
                    data.map((item,index) => <Item key={index}>
                        <Img src={item.img} alt={"Image"}/>
                        <p>{item.name}</p>
                    </Item>)
                }

            </List>
        </Container>
    );
};

export default Contacts;