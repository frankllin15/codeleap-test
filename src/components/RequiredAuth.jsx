import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext/AuthProvider";

export const RequiredAuth = ({ children }) => {
  const { user } = useAuth();

  return user?.name != null ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" replace />
  );
};
