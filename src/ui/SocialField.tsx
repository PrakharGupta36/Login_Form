import { styled } from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";
import { IconContext } from "react-icons";

const Container = styled.div`
  display: grid;
  gap: 1rem;
  width: 300px;
  place-items: center;
`;

const Button = styled.button`
  background-color: white;
  color: black;
  width: 300px;
  text-align: center;
  padding: 0.75rem 0rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
  border: 1px solid black;
  cursor: pointer;
`;

export default function SocialField() {
  const arr = [
    { id: 1, text: "Continue with Google", icon: <FcGoogle /> },
    { id: 2, text: "Continue with Apple", icon: <AiFillApple /> },
    { id: 3, text: "Continue with Meta", icon: <BsFacebook /> },
  ];
  return (
    <Container>
      {arr.map((e) => {
        return (
          <Button key={e.id}>
            <IconContext.Provider value={{ size: "25" }}>
              {e.icon}
            </IconContext.Provider>
            <span> {e.text} </span>
          </Button>
        );
      })}
    </Container>
  );
}
