import React, { useEffect } from "react";
import styled from "styled-components";
import { Header, Title } from "./Styles";

import moment from "moment";
import { useAuth } from "../context/AuthContext/AuthProvider";

import { DeleteItem } from "./DeleteItem";
import { EditItemModal } from "./EditItemModal";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  border: solid 1px #999999;
  margin-bottom: 45px;
  min-height: 300px;
`;

const Article = styled.article`
  width: 100%;
  padding: 0 30px 12px 30px;
  pre {
    font-size: 1.13rem;
    white-space: pre-wrap;
    font-family: "Roboto Mono", sans-serif;
  }
`;

const ArticleInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 18px;
  address {
    color: #777777;
    font-weight: 700;
    font-size: 1.13rem;
  }
  time {
    color: #777777;
    font-size: 1.13rem;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    :hover {
      cursor: pointer;
    }
  }

  @media (max-width: 480px) {
    svg {
      transform: scale(0.8);
    }
  }
`;

export const Post = ({ post }) => {
  const { user } = useAuth();

  return (
    <PostContainer>
      <Header style={{ height: "70px", marginBottom: "23px" }}>
        <Title color="white">{post.title}</Title>

        {user?.name === post.username && (
          <IconsWrapper>
            <DeleteItem postId={post.id} />
            <EditItemModal post={post} />
          </IconsWrapper>
        )}
      </Header>
      <Article>
        <ArticleInfo>
          <address>@{post.username}</address>
          {post.created_datetime && (
            <time>{moment(post.created_datetime).fromNow()}</time>
          )}
        </ArticleInfo>
        <pre>{post.content}</pre>
      </Article>
    </PostContainer>
  );
};
