import styled from "styled-components";
import { Container } from "../components/Styles";

const Title = styled.h1`
  font-size: 4rem;
  color: #000;
`;

const Text = styled.p`
  font-size: 1.5rem;
`;

const Link = styled.a`
  color: #107ef1;
  font-size: 1.2rem;
`;

export const NotFound = () => {
  return (
    <Container style={{ minHeight: "100vh" }}>
      <Title>404</Title>
      <Text>Sorry, we couldn't find this page.</Text>
      <Link href="/">Go back to home</Link>
    </Container>
  );
};
