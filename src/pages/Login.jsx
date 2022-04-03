import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../context/AuthContext/AuthProvider";
import {
  Button,
  Container,
  Label,
  TextInput,
  Title,
} from "../components/Styles";

const Wrapper = styled.div`
  display: flex;
  width: 500px;
  max-width: 100%;
  flex-direction: column;
  align-items: flex-start;
  border: solid 1px #cccc;
  padding: 28px 32px 14px 32px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Login = () => {
  const { user, login } = useAuth();
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    if (user?.name) {
      navigate("/");
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userName);
  };

  const handleChange = (e) => {
    setUserName(e.target.value);
  };
  return (
    <Container style={{ minHeight: "100vh" }}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Wrapper>
          <Title style={{ marginBottom: "27px" }}>
            Welcome to CodeLeap network!
          </Title>
          <Label>Please enter your username</Label>
          <TextInput onChange={handleChange} type="text" name="username" />
          <Button disabled={userName == ""} color="white">
            Enter
          </Button>
        </Wrapper>
      </form>
    </Container>
  );
};
