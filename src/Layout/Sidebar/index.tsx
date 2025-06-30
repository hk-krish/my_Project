import { ArrowLeft, ArrowRight } from "react-feather";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import { Back, Pinned } from "../../Constants";
import { routes } from "../../Routers/routes";
import { dynamicImage, Image } from "../../Utils";
import LogoWrapper from "./Widgets/LogoWrapper";
import { useAppDispatch, useAppSelector } from "../../ReduxToolkit/Hooks";
import ConfigDB from "../../Config/Theme";
import { scrollToLeft, scrollToRight } from "../../ReduxToolkit/Reducers/Layout/ThemeCustomizerReducers";
import MenuList from "./Widgets/MenuList";

const Sidebar = () => {

  const { pinedMenu } = useAppSelector((state) => state.layout);
  const { margin, sideBarToggle } = useAppSelector((state) => state.themeCustomizer);
  const sidebarIconType = useAppSelector((state) => state.themeCustomizer.sideBarIconType);
  const sideBarIcon = sidebarIconType || ConfigDB.settings.sidebar.iconType;
  const dispatch = useAppDispatch();

  return (
    <div className={`sidebar-wrapper ${sideBarToggle ? "close_icon" : ""}`} data-layout={`${sideBarIcon}-svg`}>
      <div>
        <LogoWrapper />
        <nav className="sidebar-main">
          <div className={`left-arrow ${margin >= 0 ? "disabled" : ""}`} onClick={() => dispatch(scrollToLeft())} id="left-arrow">
            <ArrowLeft />
          </div>
          <div id="sidebar-menu" style={{ position: "inherit", marginLeft: margin + "px" }}>
            <ul className="sidebar-links custom-scrollbar" id="simple-bar">
              <SimpleBar style={{ width: "68px", height: "350px" }}>
                <li className="back-btn">
                  <Link to={routes.Dashboard.Default}>
                    <Image className="img-fluid" src={dynamicImage(`logo/logo-icon.png`)} alt="" />
                  </Link>
                  <div className="mobile-back text-end">
                    <span>{Back}</span>
                    <i className="fa fa-angle-right ps-2"/>
                  </div>
                </li>
                <li className={`pin-title sidebar-main-title ${pinedMenu.length > 0 ? "show" : ""}`}>
                  <div>
                    <h6>{Pinned}</h6>
                  </div>
                </li>
                <MenuList />
              </SimpleBar>
            </ul>
          </div>
          <div className={`right-arrow ${margin <= -3300 ? "disabled" : ""}`} onClick={() => dispatch(scrollToRight())} id="right-arrow">
            <ArrowRight />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;