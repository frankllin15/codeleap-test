import { useEffect, useState } from "react";
import { createPost, updatePostMutation } from "../actions/postActions";
import { useAuth } from "../context/AuthContext/AuthProvider";
import { useMutation } from "../hooks/useMutation";
import { PencilIcon } from "./icons/PencilIcon";
import { PostForm } from "./PostForm";
import { Button, Title } from "./Styles";
import { styled } from "@stitches/react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./AlertDialog";
import { usePost } from "../context/PostContext/PostProvider";
const Flex = styled("div", { display: "flex" });

export const EditItemModal = ({ post }) => {
  const [open, setOpen] = useState(false);
  const [postForm, setPostForm] = useState({ ...post });
  const { refetch } = usePost();

  const [updatePost, { success, loading }] = useMutation(updatePostMutation, {
    post: { title: postForm.title, content: postForm.content },
    id: post.id,
  });

  const handleChange = (e) => {
    setPostForm({
      ...postForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updatePost();
  };

  useEffect(() => {
    if (success) {
      refetch();
      handleToogle();
    }
  }, [success]);

  const handleToogle = () => {
    setOpen(!open);
  };

  return (
    <>
      <AlertDialog open={open} onOpenChange={handleToogle}>
        <AlertDialogTrigger asChild>
          <PencilIcon style={{ marginLeft: "33px" }} width="30" height="30" />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <Title>Edit</Title>
          <PostForm
            style={{ border: "none", padding: "0px" }}
            postForm={postForm}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
          <Flex css={{ justifyContent: "flex-end" }}>
            <AlertDialogCancel asChild>
              <Button style={{ margin: "0px 8px" }}>Cancel</Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button onClick={handleSubmit} style={{ margin: "0px 8px" }}>
                Save
              </Button>
            </AlertDialogAction>
          </Flex>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
