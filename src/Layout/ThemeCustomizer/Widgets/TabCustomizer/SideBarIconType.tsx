import { useDispatch } from "react-redux";
import { Badge } from "reactstrap";

import { SidebarIconTitle } from "../../../../Constants";
import { useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { addSidebarIconType } from "../../../../ReduxToolkit/Reducers/Layout/ThemeCustomizerReducers";
import { sideBarIconTypes } from "../../../../Data/Layout/ThemeCustomizer";

const SideBarIconType = () => {

  const { sideBarIconType } = useAppSelector((state) => state.themeCustomizer);
  const dispatch = useDispatch();
  const handleSideBarIconType = (type: string) => dispatch(addSidebarIconType(type));
  
  return (
    <>
      <h6>{SidebarIconTitle}</h6>
      <ul className="sidebar-setting layout-grid">
        {sideBarIconTypes.map((item, index) => (
          <li className={`${sideBarIconType === item.type ? "active" : ""}`} onClick={() => handleSideBarIconType(item.type)} key={index}>
            <div className="header bg-light">
              <ul><li /><li /><li /></ul>
            </div>
            <div className="body bg-light">
              <Badge color="primary">{item.label}</Badge>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SideBarIconType;