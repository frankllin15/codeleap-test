import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.38rem;
  color: ${(props) => props.color || "black"};
  font-weight: 700;
  /* margin-bottom: 27px; */

  @media (max-width: 480px) {
    font-size: 1.13rem;
  }
`;

export const Label = styled.label`
  font-size: 1.18rem;
  font-weight: 400;
  margin: 8px 0;
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  text-align: center;
  align-self: flex-end;
  padding: 7px 30px 7px;
  font-weight: 700;
  font-size: 1rem;

  margin: 0;
  border: solid 1px black;
  opacity: ${(props) => (props.disabled ? 0.8 : 1)};
  color: ${({ theme }) => (theme.variant == "outline" ? "black" : "white")};
  background-color: ${({ theme }) =>
    theme.variant == "outline" ? "white" : "black"};
  :hover {
    cursor: pointer;
  }
`;

export const TextInput = styled.input`
  font-size: 0.87rem;
  border-radius: 4px;
  width: 100%;
  border: 1px solid #cccccc;
  margin: 7px 0px 19px;
  padding: 6px 11px 6px;
  :focus {
    outline: none;
    border: 1px solid #c4c4c4bf;
    box-shadow: 0px 0px 5px #c4c4c4bf;
  }
  ::placeholder {
    color: #cccccc;
    opacity: 1;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  height: 80px;
  width: 100%;
  padding: 0 27px;
  margin-bottom: 44px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 100px;

  /* min-height: 100vh; */
  @media (max-width: 768px) {
    padding: 0 40px;
  }
  @media (max-width: 480px) {
    padding: 0 8px;
  }
`;
export const TextArea = styled.textarea`
  font-size: 0.87rem;
  border-radius: 4px;
  width: 100%;
  min-height: 74px;
  border: 1px solid #cccccc;
  margin: 5px 0px 5px;
  padding: 6px 11px 6px;

  :focus {
    outline: none;
    border: 1px solid #c4c4c4bf;
    box-shadow: 0px 0px 5px #c4c4c4bf;
  }

  ::placeholder {
    color: #cccccc;
    opacity: 1;
  }
  resize: none;
`;
