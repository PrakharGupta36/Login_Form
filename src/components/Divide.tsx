import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 950px) {
    flex-direction: row;
  }
`;

const Line = styled.div`
  width: 1px;
  background-color: black;
  height: 100px;
  opacity: 0.25;

  @media (max-width: 950px) {
    width: 100px;
    height: 1px;
  }
`;

export default function Divide() {
  return (
    <Container>
      <Line></Line>
      <div style={{ opacity: 0.5 }}> OR </div>
      <Line></Line>
    </Container>
  );
}
