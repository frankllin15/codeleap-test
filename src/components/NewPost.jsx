import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAuth } from "../context/AuthContext/AuthProvider";
import { createPost } from "../actions/postActions";
import { Button, Title } from "./Styles";
import { useMutation } from "../hooks/useMutation";
import { PostForm } from "./PostForm";
import { SpinnerIcon } from "./icons/SpinnerIcon";
import { usePost } from "../context/PostContext/PostProvider";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  border: solid 1px #cccc;
  padding: 28px 32px 14px 32px;
`;

export const NewPost = () => {
  const { user } = useAuth();
  const defaultPostForm = {
    title: "",
    content: "",
  };
  const [postForm, setPostForm] = useState(defaultPostForm);
  const { refetch } = usePost();
  const [createPostMutation, { data, loading, reset }] = useMutation(
    createPost,
    {
      variables: {
        post: { ...postForm, username: user.name },
      },
    }
  );

  const handleChange = (e) => {
    setPostForm({
      ...postForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    createPostMutation();
  };

  useEffect(() => {
    if (data) {
      refetch();
      reset();
      setPostForm(defaultPostForm);
    }
  }, [data]);

  return (
    <Wrapper style={{ marginBottom: "35px" }}>
      <Title>What’s on your mind?</Title>
      <PostForm postForm={postForm} onChange={handleChange} />
      {loading ? (
        <SpinnerIcon style={{ alignSelf: "flex-end" }} />
      ) : (
        <Button
          onClick={handleSubmit}
          disabled={postForm.content == "" || postForm.title == ""}
          color="white"
        >
          Create
        </Button>
      )}
    </Wrapper>
  );
};
