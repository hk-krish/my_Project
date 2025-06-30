// Manages redirections

import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../ReduxToolkit/Hooks";
import { routes } from "./routes";

const RouteRedirect = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  return !isAuthenticated ? <Navigate to={routes.Login} replace /> : <Outlet />;
};

export default RouteRedirect;
