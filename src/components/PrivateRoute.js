import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../Firebase";

function PrivateRoute() {
  if (auth.currentUser) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}

export default PrivateRoute;
