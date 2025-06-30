import { Col, Row } from "reactstrap";
import { useAppSelector } from "../../ReduxToolkit/Hooks";

import LogoWrapper from "./Widgets/LogoWrapper";
import SearchBar from "./Widgets/SearchBar";
import SearchInput from "./Widgets/SearchInput";
import FullScreen from "./Widgets/FullScreen";
import Notification from "./Widgets/Notification";
import Bookmark from "./Widgets/Bookmark";
import Message from "./Widgets/Message";
import Cart from "./Widgets/Cart";
import Mode from "./Widgets/Mode";
import Language from "./Widgets/Language";
import Profile from "./Widgets/Profile";

const Header = () => {

  const { sideBarToggle } = useAppSelector((state) => state.themeCustomizer);

  return (
    <div className={`page-header ${sideBarToggle ? 'close_icon' : ''}`}>
      <Row className="header-wrapper m-0">
        <LogoWrapper />
        <SearchBar />
        <Col xs="auto" lg="7" md="6" className="nav-right box-col-6 pull-right right-header p-0 ms-auto">
          <ul className="nav-menus">
            <SearchInput />
            <FullScreen />
            <Notification/>
            <Bookmark/>
            <Message/>
            <Cart/>
            <Mode/>
            <Language/>
            <Profile/>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
