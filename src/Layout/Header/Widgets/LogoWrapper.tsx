import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import SvgIcon from "../../../Components/CoreComponents/SvgIcon";
import { routes } from "../../../Routers/routes";
import { dynamicImage, Image } from "../../../Utils";
import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { toggleSidebar } from "../../../ReduxToolkit/Reducers/Layout/ThemeCustomizerReducers";

const LogoWrapper = () => {
  const dispatch = useAppDispatch();

  return (
    <Col className="header-logo-wrapper col-auto p-0">
      <div className="logo-wrapper">
        <Link to={routes.Dashboard.Default}>
          <Image className="img-fluid for-light" src={dynamicImage(`logo/logo.png`)} alt="" />
          <Image className="img-fluid for-dark" src={dynamicImage(`logo/logo_dark.png`)} alt="" />
        </Link>
      </div>
      <div className="toggle-sidebar" onClick={() => dispatch(toggleSidebar())}>
        <SvgIcon className="sidebar-toggle" iconId="stroke-animation" />
      </div>
    </Col>
  );
};
export default LogoWrapper;
