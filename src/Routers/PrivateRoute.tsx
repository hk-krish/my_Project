// Handles authentication-based access

import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../ReduxToolkit/Hooks";
import { routes } from "./routes";

const PrivateRoute = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  return isAuthenticated ? <Navigate to={routes.Dashboard.Default} replace /> : <Outlet />;
};

export default PrivateRoute;
