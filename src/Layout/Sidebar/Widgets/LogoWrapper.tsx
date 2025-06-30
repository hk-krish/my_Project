import { Link } from "react-router-dom";
import { dynamicImage, Image } from "../../../Utils";
import { routes } from "../../../Routers/routes";
import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { toggleSidebar } from "../../../ReduxToolkit/Reducers/Layout/ThemeCustomizerReducers";
import SvgIcon from "../../../Components/CoreComponents/SvgIcon";

const LogoWrapper = () => {
  const dispatch = useAppDispatch();
  
  return (
    <>
      <div className="logo-wrapper">
        <Link to={routes.Dashboard.Default}>
          <Image className="img-fluid for-light" src={dynamicImage(`logo/logo.png`)} alt="" />
          <Image className="img-fluid for-dark" src={dynamicImage(`logo/logo_dark.png`)} alt="" />
        </Link>
        <div className="toggle-sidebar" onClick={() => dispatch(toggleSidebar())}>
          <SvgIcon className="sidebar-toggle" iconId="toggle-icon" />
        </div>
      </div>
      <div className="logo-icon-wrapper">
        <Link to={routes.Dashboard.Default}>
          <Image className="img-fluid" src={dynamicImage(`logo/logo-icon.png`)} alt="" />
        </Link>
      </div>
    </>
  );
};

export default LogoWrapper;
