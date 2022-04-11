import React, { useEffect, useState } from "react";
import { deletePostMutation } from "../actions/postActions";
import { usePost } from "../context/PostContext/PostProvider";
import { useMutation } from "../hooks/useMutation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
  ButtonsWrapper,
} from "./AlertDialog";
import { TrashIcon } from "./icons/TashIcon";
import { Button, Title } from "./Styles";

export const DeleteItem = ({ postId }) => {
  const [open, setOpen] = useState(false);
  const { refetch } = usePost();
  const [deletePost, { success, loading }] = useMutation(deletePostMutation, {
    id: postId,
  });

  const handleDelete = async (e) => {
    e.preventDefault();
    deletePost(postId);
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
          <TrashIcon style={{ marginLeft: "33px" }} width="30" height="30" />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <Title>Are you sure you want to delete this item?</Title>

          <ButtonsWrapper css={{ justifyContent: "flex-end" }}>
            <AlertDialogCancel asChild>
              <Button
                theme={{ variant: "outline" }}
                style={{ margin: "0px 8px" }}
              >
                Cancel
              </Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button
                theme={{ variant: "outline" }}
                onClick={handleDelete}
                style={{ margin: "0px 8px" }}
              >
                Ok
              </Button>
            </AlertDialogAction>
          </ButtonsWrapper>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
