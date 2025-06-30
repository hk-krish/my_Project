/* eslint-disable react-hooks/exhaustive-deps */
import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Href } from "../../../../Constants";
import ConfigDB from "../../../../Config/Theme";
import { MenuItem, MenuListProps } from "../../../../Types/Layout";
import { useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { setPinedMenu } from "../../../../ReduxToolkit/Reducers/Layout/LayoutReducers";
import SvgIcon from "../../../../Components/CoreComponents/SvgIcon";


const SidebarSubMenu: React.FC<MenuListProps> = ({ menu, setActiveMenu, activeMenu, level }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { t } = useTranslation();
  const { pinedMenu } = useAppSelector((state) => state.layout);
  const sideBarIcon = ConfigDB.settings.sidebar.iconType;
  const handlePined = (value: string) => {
    if (!pinedMenu.includes(value)) {
      dispatch(setPinedMenu([...pinedMenu, value]));
    } else {
      let filterMenu = pinedMenu.filter((item) => item !== value);
      dispatch(setPinedMenu(filterMenu));
    }
  };
  const ActiveNavLinkUrl = (path?: string) => {
    return location.pathname === path ? true : "";
  };
  const shouldSetActive = ({ item }: { item: MenuItem }): boolean => {
    var returnValue = false;
    if (item?.url === location.pathname) {
      returnValue = true;
    }
    if (!returnValue && item?.menu) {
      item?.menu.every((subItem: MenuItem) => {
        returnValue = shouldSetActive({ item: subItem });
        return !returnValue;
      });
    }
    return returnValue;
  };
  useEffect(() => {
    menu?.forEach((item) => {
      let gotValue = shouldSetActive({ item });
      if (gotValue) {
        let temp = [...activeMenu];
        temp[level] = item.title;
        setActiveMenu(temp);
      }
    });
  }, []);
  return (
    <Fragment>
      {menu?.map((item, i) => (
        <li key={i} className={`${level === 0 ? "sidebar-list" : ""} ${item.title && pinedMenu.includes(item.title) ? "pined" : ""} ${(item.menu ? item.menu.map((innerItem) => ActiveNavLinkUrl(innerItem.url)).includes(true) : ActiveNavLinkUrl(item.url)) || activeMenu[level] === item.title ? "active" : ""}`}>
          {level === 0 && <i className="fa fa-thumb-tack" onClick={() => item.title && handlePined(item.title)}></i>}
          <Link
            className={`${level === 0 ? "sidebar-link sidebar-title" : ""} ${(item.menu ? item.menu.map((innerItem) => ActiveNavLinkUrl(innerItem.url)).includes(true) : ActiveNavLinkUrl(item.url)) || activeMenu[level] === item.title ? "active" : ""}`}
            to={item.url ? item.url : Href}
            onClick={() => {
              const temp = activeMenu;
              temp[level] = item.title !== temp[level] ? item.title : "";
              setActiveMenu([...temp]);
            }}>
            {item.icon && <SvgIcon className={`${sideBarIcon}-icon`} iconId={`${sideBarIcon}-${item.icon}`} />}
            {level === 0 ? <span className="lan-3">{t(`${item.title}`)}</span> : t(`${item.title}`)}
            {item.menu && <div className="according-menu">{activeMenu[level] === item.title ? <i className="fa fa-angle-down" /> : <i className="fa fa-angle-right" />}</div>}
          </Link>
          {item.menu && (
            <ul className={level !== 0 ? "submenu-content open-sub-mega-menu" : "sidebar-submenu"}
              style={{display: `${(item.menu ? item.menu.map((innerItem) => ActiveNavLinkUrl(innerItem.url)).includes(true) : ActiveNavLinkUrl(item.url)) || activeMenu[level] === item.title ? "block" : "none"}`}}>
              <SidebarSubMenu menu={item.menu} activeMenu={activeMenu} setActiveMenu={setActiveMenu} level={level + 1} />
            </ul> 
          )}
        </li>
      ))}
    </Fragment>
  );
};
export default SidebarSubMenu;
