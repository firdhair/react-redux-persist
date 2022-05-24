import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const { username, password } = useSelector((state) => state);
  console.log("username: ", username, ", password: ", password);
  const isLoggedIn = username && password;

  if (isLoggedIn) {
    return <Outlet />;
  }
  return <Navigate to={'/login'} />;
}
