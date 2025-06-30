import { useState, Fragment } from "react";
import { useTranslation } from "react-i18next";

import { menuList } from "../../../../Data/Layout/SidebarMenuList";
import { MenuItem } from "../../../../Types/Layout";
import { useAppSelector } from "../../../../ReduxToolkit/Hooks";
import SubMenu from "./SubMenu";

const MenuList = () => {

  const { pinedMenu } = useAppSelector((state) => state.layout);
  const [activeMenu, setActiveMenu] = useState<MenuItem[]>([]);
  const { t } = useTranslation();
  const shouldHideMenu = (mainMenu: MenuItem) => mainMenu?.Items?.map((data) => data.title).every((titles) => pinedMenu.includes(titles));
 
  return (
    <>
      {menuList &&
        menuList.map((mainMenu, index) => (
          <Fragment key={index}>
            <li className={`sidebar-main-title ${shouldHideMenu(mainMenu) ? "d-none" : ""}`}>
              <div>
                <h6 className="lan-1">{t(`${mainMenu.title}`)}</h6>
              </div>
            </li>
            <SubMenu menu={mainMenu.Items} activeMenu={activeMenu} setActiveMenu={setActiveMenu} level={0} />
          </Fragment>
        ))}
    </>
  );
};

export default MenuList;
