import { Fragment, useCallback, useState } from "react";
import { Container, Row } from "reactstrap";
import { FontAwesomeIconTitle, Icons } from "../../../Constants";
import { FontAwesomeData } from "../../../Data/Icons/FontAwesomeIcon";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";
import IconMarkUp from "../Common/IconMarkUp";
import FontAwesomeBody from "./FontAwesomeBody";

const FontAwesomeIconContainer = () => {
  const [iconTag, setIconTag] = useState({ iconTag: "" });
  const [icon, setIcon] = useState({ icon: "" });
  const [iconFClass, setIconFClass] = useState({ iconFClass: "" });
  const callback = useCallback((tag: string) => {
    setIconTag({
      iconTag: '<i className="fa fa-' + tag + '"></i>',
    });
    setIcon({
      icon: "fa fa-" + tag + " fa-2x",
    });
    setIconFClass({
      iconFClass: "fa fa-" + tag,
    });
  }, []);
  return (
    <Fragment>
      <Breadcrumbs mainTitle={FontAwesomeIconTitle} parent={Icons} />
      <Container fluid>
        <Row>
          {FontAwesomeData.map((data, i) => (
            <FontAwesomeBody key={i} iconType={data.data} title={data.title} parentCallback={callback} />
          ))}
        </Row>
      </Container>
      <IconMarkUp iconTag={iconTag} icon={icon} iconFClass={iconFClass} />
    </Fragment>
  );
};

export default FontAwesomeIconContainer;