import { useEffect, useState } from "react";
import { createPost, updatePostMutation } from "../actions/postActions";
import { useAuth } from "../context/AuthContext/AuthProvider";
import { useMutation } from "../hooks/useMutation";
import AlertDialog, { AlertDialogCancel } from "./AlertDialog";
import { PencilIcon } from "./icons/PencilIcon";
import { PostForm } from "./PostForm";
import { Button, Title } from "./Styles";

export const EditItemModal = ({ post }) => {
  const { user } = useAuth();
  const [postForm, setPostForm] = useState({ ...post });

  const [updatePost, { success, loading }] = useMutation(updatePostMutation, {
    variables: {
      post: { title: postForm.title, content: postForm.content },
      id: post.id,
    },
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
      window.location.reload(false);
    }
  }, [success]);

  return (
    <AlertDialog
      alertTrigger={
        <PencilIcon style={{ marginLeft: "33px" }} width="30" height="30" />
      }
      buttons={{
        action: {
          onClick: handleSubmit,
          loading,
        },
      }}
    >
      <Title>Edit</Title>
      <PostForm
        style={{ border: "none", padding: "0px" }}
        postForm={postForm}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </AlertDialog>
  );
};
