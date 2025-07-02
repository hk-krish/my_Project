import { createBrowserRouter } from "react-router-dom";
import Auth from "../Auth";
import Error404 from "../Components/Pages/Others/ErrorPage/Error404";
import Layout from "../Layout";
import { AuthRoutes, AppRoutes } from "./AppRoutes";
import PrivateRoute from "./PrivateRoute";
import RouteRedirect from "./RouteRedirect";
import { routes } from "./routes";

const basename = process.env.REACT_APP_BASE_URL || "/";

const RouterProvider = createBrowserRouter(
  [
    {
      element: <PrivateRoute />,
      children: [
        { path: routes.Home, element: <Auth />, index: true },
        { path: routes.Login, element: <Auth /> },
      ],
    },
    {
      element: <RouteRedirect />,
      children: [
        {
          element: <Layout />,
          children: AppRoutes,
        },
        {
          children: AuthRoutes,
        },
      ],
    },
    { path: "*", element: <Error404 /> },
  ],
  // {
  //   basename,
  // }
);

export default RouterProvider;
