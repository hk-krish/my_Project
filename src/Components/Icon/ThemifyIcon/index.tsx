import { Fragment, useCallback, useState } from "react";
import { Container, Row } from "reactstrap";
import { Icons, ThemifyIconTitle } from "../../../Constants";
import { ThemifyIconData } from "../../../Data/Icons/ThemifyIcon";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";
import IconMarkUp from "../Common/IconMarkUp";
import ThemifyIconBody from "./ThemifyIconBody";

const ThemifyIconContainer = () => {
  const [iconTag, setIconTag] = useState({ iconTag: "" });
  const [icon, setIcon] = useState({ icon: "" });
  const [iconFClass, setIconFClass] = useState({ iconFClass: "" });
  const callback = useCallback((tag: string) => {
    setIconTag({
      iconTag: '<i className="' + tag + '"></i>',
    });
    setIcon({
      icon: "" + tag + " fa-2x",
    });
    setIconFClass({
      iconFClass: tag,
    });
  }, []);
  return (
    <Fragment>
      <Breadcrumbs mainTitle={ThemifyIconTitle} parent={Icons} />
      <Container fluid>
        <Row>
          {ThemifyIconData.map((data, i) => (
            <ThemifyIconBody key={i} iconType={data.data} title={data.title} parentCallback={callback} />
          ))}
        </Row>
      </Container>
      <IconMarkUp iconTag={iconTag} icon={icon} iconFClass={iconFClass} />
    </Fragment>
  );
};
export default ThemifyIconContainer;
