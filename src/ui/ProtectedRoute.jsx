import { Navigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";

function ProtectedRoute({ children }) {
  const { isLoading, isAuthenticated } = useUser();

  if (!isAuthenticated && !isLoading) {
    return <Navigate to="/login" replace />;
  }

  return isAuthenticated && children;
}
export default ProtectedRoute;
