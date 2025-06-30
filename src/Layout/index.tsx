/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import TapTop from "./TapTop";
import ThemeCustomizer from "./ThemeCustomizer";
import { useAppDispatch, useAppSelector } from "../ReduxToolkit/Hooks";
import { addSidebarTypes, setSideBarToggle } from "../ReduxToolkit/Reducers/Layout/ThemeCustomizerReducers";

const Layout = () => {
  const { sidebarTypes, sideBarToggle } = useAppSelector((state) => state.themeCustomizer);
  const dispatch = useAppDispatch();

  // function for sidebar type change from vertical to horizontal
  const updateSidebarBasedOnWidth = () => {
    const windowWidth = window.innerWidth;
    if (sidebarTypes === "compact-wrapper") {
      if (windowWidth <= 1200) dispatch(setSideBarToggle(true));
      else dispatch(setSideBarToggle(false));
    } else if (sidebarTypes === "horizontal-wrapper") {
      if (windowWidth <= 992) {
        dispatch(setSideBarToggle(true));
        dispatch(addSidebarTypes("compact-wrapper"));
      } else {
        dispatch(setSideBarToggle(false));
        dispatch(addSidebarTypes("horizontal-wrapper"));
      }
    }
  };
  useEffect(() => {
    updateSidebarBasedOnWidth();
    window.addEventListener("resize", () => updateSidebarBasedOnWidth());
  }, [sidebarTypes]);
  
  return (
    <>
      <TapTop />
      <div className={`page-wrapper ${sideBarToggle ? "compact-wrapper" : sidebarTypes}`}>
        <Header />
        <div className="page-body-wrapper">
          <Sidebar />
          <div className="page-body">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
      <ThemeCustomizer />
    </>
  );
};

export default Layout;