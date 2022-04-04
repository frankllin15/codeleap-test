import { Button, Container } from "../components/Styles";
import { Post } from "../components/Post";
import { RequiredAuth } from "../components/RequiredAuth";
import { Header, Title } from "../components/Styles";
import { NewPost } from "../components/NewPost";
import { useAuth } from "../context/AuthContext/AuthProvider";
import { Pagination } from "../components/Pagination";
import { ScrollToTop } from "../components/ScrollToTop";
import { SpinnerIcon } from "../components/icons/SpinnerIcon";
import { usePost } from "../context/PostContext/PostProvider";

export const Home = () => {
  const { posts, offset, setOffset, refetch, loading } = usePost();

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
        <NewPost />
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
