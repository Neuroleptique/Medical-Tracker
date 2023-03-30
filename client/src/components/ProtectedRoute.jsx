import { Navigate, Outlet } from "react-router-dom"

const user = JSON.parse(localStorage.getItem("user"))

const ProtectedRoute = () => {
  if (user) {
    // user is not authenticated
    // if user is authenticated, the Outlet component grants access to any component under the Protected Route. In this case, the Dashboard Page
    return <Outlet />
  } else {
    return <Navigate to={"/"} />
  }
}

export default ProtectedRoute
