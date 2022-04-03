import { Button, Container } from "../components/Styles";
import { Post } from "../components/Post";
import { RequiredAuth } from "../components/RequiredAuth";
import { Header, Title } from "../components/Styles";
import { NewPost } from "../components/NewPost";
import { useQuery } from "../hooks/useQuery";
import AlertDialog from "../components/AlertDialog";
import { useAuth } from "../context/AuthContext/AuthProvider";
import { Pagination } from "../components/Pagination";
import { useEffect, useState } from "react";
import { ScrollToTop } from "../components/ScrollToTop";
import { SpinnerIcon } from "../components/icons/SpinnerIcon";

const apiUrl = import.meta.env.VITE_API_URL;

export const Home = () => {
  const [offset, setOffset] = useState(0);
  const {
    data: posts,
    loading,
    refetch,
  } = useQuery(apiUrl, {
    offset,
  });

  useEffect(() => {
    refetch();
  }, [offset]);

  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.reload();
  };
  return (
    <RequiredAuth>
      <Header>
        <Title color="white">CodeLeap Network</Title>
        <Button onClick={handleLogout} style={{ alignSelf: "center" }}>
          Logout
        </Button>
      </Header>
      <Container style={{ marginBottom: "4rem" }}>
        <NewPost refetch={refetch} />
        {loading ? (
          <SpinnerIcon />
        ) : (
          posts?.results.map((post) => <Post key={post.id} post={post} />)
        )}
        {posts && (
          <Pagination
            setOffset={setOffset}
            totalItems={posts.count}
            itemsPerPage={10}
          />
        )}
        <ScrollToTop />
      </Container>
    </RequiredAuth>
  );
};
