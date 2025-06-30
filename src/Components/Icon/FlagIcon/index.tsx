import { Fragment, useCallback, useState } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { FlagIconsTitle, Icons } from "../../../Constants";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import IconMarkUp from "../Common/IconMarkUp";
import FlagIconBody from "./FlagIconBody";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";

const FlagIconsContainer = () => {
  const [iconTag, setIconTag] = useState({ iconTag: "" });
  const [icon, setIcon] = useState({ icon: "" });
  const [iconFClass, setIconFClass] = useState({ iconFClass: "" });

  const getIconTag = useCallback((tag: { abbreviation: string }) => {
    setIconTag({
      iconTag: '<i className="flag-icon flag-icon-' + tag.abbreviation + '"></i>',
    });
    setIcon({
      icon: "flag-icon flag-icon-" + tag.abbreviation + " fa-3x",
    });
    setIconFClass({
      iconFClass: "flag-icon flag-icon-" + tag.abbreviation,
    });
  }, []);
  return (
    <Fragment>
      <Breadcrumbs mainTitle={FlagIconsTitle} parent={Icons} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title={FlagIconsTitle} />
              <CardBody>
                <FlagIconBody getIconTag={getIconTag} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <IconMarkUp iconTag={iconTag} icon={icon} iconFClass={iconFClass} />
    </Fragment>
  );
};
export default FlagIconsContainer;
