import { Button, Container } from "../components/Styles";
import { Post } from "../components/Post";
import { RequiredAuth } from "../components/RequiredAuth";
import { Header, Title } from "../components/Styles";
import { NewPost } from "../components/NewPost";
import { useQuery } from "../hooks/useQuery";
import AlertDialog from "../components/AlertDialog";
import { useAuth } from "../context/AuthContext/AuthProvider";

const apiUrl = import.meta.env.VITE_API_URL;

export const Home = () => {
  const { data: posts, loading } = useQuery(apiUrl);
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
      <Container>
        <AlertDialog title="Are you sure you want to delete this item?" />
        <NewPost />
        {loading ? (
          <div>Loading...</div>
        ) : (
          posts?.results.map((post) => <Post key={post.id} post={post} />)
        )}
      </Container>
    </RequiredAuth>
  );
};
