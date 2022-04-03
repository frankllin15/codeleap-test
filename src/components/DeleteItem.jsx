import { useEffect, useState } from "react";
import { createPost, deletePostMutation } from "../actions/postActions";
import { useAuth } from "../context/AuthContext/AuthProvider";
import { useMutation } from "../hooks/useMutation";
import AlertDialog, { AlertDialogCancel } from "./AlertDialog";
import { TrashIcon } from "./icons/TashIcon";
import { PostForm } from "./PostForm";
import { Button, Title } from "./Styles";

export const DeleteItem = ({ postId }) => {
  const { user } = useAuth();
  const [postForm, setPostForm] = useState({ title: "", content: "" });

  const [deletePost, { success, loading }] = useMutation(deletePostMutation, {
    variables: {
      id: postId,
    },
  });

  const handleDelete = async (e) => {
    e.preventDefault();
    deletePost(postId);
  };

  useEffect(() => {
    if (success) window.location.reload(false);
  }, [success]);

  return (
    <AlertDialog
      title={"Are you sure you want to delete this item?"}
      buttons={{
        action: {
          variant: "outline",
          onClick: handleDelete,
        },
        cancel: {
          variant: "outline",
        },
      }}
      alertTrigger={
        <TrashIcon style={{ marginLeft: "33px" }} width="30" height="30" />
      }
    />
  );
};
