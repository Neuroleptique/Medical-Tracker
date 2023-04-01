import { Navigate } from "react-router-dom";


const user = JSON.parse(localStorage.getItem('user'))

export const ProtectedRoute = ({ children }) => {

  if (!user) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};