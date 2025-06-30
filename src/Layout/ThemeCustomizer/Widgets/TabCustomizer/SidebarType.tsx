import { useDispatch } from "react-redux";

import { SidebarTypeTitle } from "../../../../Constants";
import { useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { addSidebarTypes } from "../../../../ReduxToolkit/Reducers/Layout/ThemeCustomizerReducers";
import { sidebarType } from "../../../../Data/Layout/ThemeCustomizer";

const SidebarType = () => {
  const { sidebarTypes } = useAppSelector((state) => state.themeCustomizer);
  const dispatch = useDispatch();

  return (
    <>
      <h6>{SidebarTypeTitle}</h6>
      <ul className="sidebar-type layout-grid">
        {sidebarType.map((item, index) => (
          <li data-attr={item.dataAttr} className={sidebarTypes === item.type ? "active" : ""} onClick={() => dispatch(addSidebarTypes(item.type))} key={index}>
            <div className="header bg-light">
              <ul><li /><li /><li /></ul>
            </div>
            <div className="body">
              <ul>
                <li className={`bg-dark sidebar ${item.type === "compact-wrapper" ? "compact" : ""}`} />
                <li className="bg-light body" />
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SidebarType;