import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { AuthProvider } from "./context/AuthContext/AuthProvider";
import { NotFound } from "./pages/NotFound";
import { PostProvider } from "./context/PostContext/PostProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <PostProvider>
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PostProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
