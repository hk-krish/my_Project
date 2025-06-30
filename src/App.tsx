import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Fragment } from "react/jsx-runtime";
import Routers from "./Routers/RouterProvider";

const App = () => {
  return (
    <Fragment>
      <RouterProvider router={Routers} />
      <ToastContainer />
    </Fragment>
  );
};

export default App;
