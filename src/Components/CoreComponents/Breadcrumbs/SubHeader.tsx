import { menuList } from "../../../Data/Layout/SidebarMenuList";
import SubHeaderList from "./SubHeaderList";

const SubHeader = () => {
  return (
    <div className="left-header main-sub-header p-0">
      <div className="left-menu-header">
        <ul className="header-left">
          {menuList?.filter((item) => item.title !== "Forms & Table").map((mainMenu, index) => (
            <li className={`onhover-dropdown${index === 4 ? " p-0" : ""}`} key={index}>
              <span className="f-w-700">{mainMenu.title} </span>
              <ul className="onhover-show-div left-dropdown">
                  <SubHeaderList menu={mainMenu.Items} level={0}/>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubHeader;