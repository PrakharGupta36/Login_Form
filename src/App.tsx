import { styled } from "styled-components";
import Divide from "./components/Divide";
import FormField from "./ui/FormField";
import SocialField from "./ui/SocialField";

const PageContainer = styled.main`
  text-align: center;
  display: grid;
  place-items: center;
  height: 100vh;
  @media (max-width: 950px) {
    padding-top: 3rem;
    padding-bottom: 7rem;
  }
`;

const InfoDiv = styled.div`
  margin-top: 3rem;
  display: grid;
  gap: 1rem;
`;

const Page = styled.section`
  display: grid;
  place-items: center;

  h1 {
    position: relative;

    @media (min-width: 950px) {
      left: 20px;
      margin-bottom: 3rem;
    }
  }

  p {
    margin: 0;

    @media (min-width: 950px) {
      left: 20px;
      position: relative;
      cursor: pointer;
    }
  }

  .info {
    opacity: 0.5;
    width: 80%;
    margin: 0 auto;
    cursor: text;
  }
`;

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  /* height: 100vh; */

  margin: 0 auto;

  @media (min-width: 950px) {
    width: 800px;
  }

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    height: 600px;
    /* margin-top: 8rem; */
  }
`;

export default function Main() {
  return (
    <PageContainer>
      <Page>
        <h1> Log into Aimed Labs </h1>
        <Container>
          <FormField />
          <Divide />
          <SocialField />
        </Container>
        <InfoDiv>
          <p> Can’t log in? </p>
          <p className='info'>
            This is an example website, no server is made, you can't login
          </p>
        </InfoDiv>
      </Page>
    </PageContainer>
  );
}
