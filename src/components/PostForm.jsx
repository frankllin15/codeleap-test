import React from "react";
import styled from "styled-components";
import { Button, Label, TextArea, TextInput } from "./Styles";

const Form = styled.form`
  width: 100%;
  margin: 34px 0;
`;

export const PostForm = ({ onChange, onSubmit, postForm, ...props }) => {
  console.log("postForm", postForm);
  return (
    <Form style={{ width: "100%" }} {...props} onSubmit={(e) => onSubmit(e)}>
      {/* <Wrapper> */}
      <Label htmlFor="title">Title</Label>
      <TextInput
        value={postForm.title}
        placeholder="Hello World"
        type="text"
        name="title"
        onChange={onChange}
      />
      <Label htmlFor="title">Content</Label>
      <TextArea
        value={postForm.content}
        placeholder="Content here"
        type="text"
        name="content"
        onChange={onChange}
      />

      {/* </Wrapper> */}
    </Form>
  );
};
