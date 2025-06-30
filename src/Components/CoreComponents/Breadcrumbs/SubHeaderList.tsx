import React, { Fragment } from "react";
import { SubHeaderListType } from "../../../Types/CommonComponents";
import { Link } from "react-router-dom";
import { Href } from "../../../Constants";

const SubHeaderList: React.FC<SubHeaderListType> = ({ menu, level }) => {
  return (
    <div>
      {menu?.map((subItem, subIndex) => (
        <li className={subItem.menu && "flyout-right"} key={subIndex}>
          <Link to={subItem.url ? subItem.url : Href}>{subItem.title}</Link>
          {subItem.menu && (
            <Fragment>
              <i className="fa fa-angle-right" />
              <ul>
                <SubHeaderList menu={subItem.menu} level={level + 1} />
              </ul>
            </Fragment>
          )}
        </li>
      ))}
    </div>
  );
};

export default SubHeaderList;
