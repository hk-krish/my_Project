import { Fragment, useCallback, useState } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import IconMarkUp from "../Common/IconMarkUp";
import FeatherIconsBody from "./FeatherIconsBody";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { FeatherIconsTitle, Icons } from "../../../Constants";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";

const FeatherIconsContainer = () => {
  const [iconTag, setIconTag] = useState({ iconTag: "" });
  const [icon, setIcon] = useState({ feathericon: "" });
  const [iconFClass, setIconFClass] = useState({ iconFClass: "" });

  const getIconTag = useCallback((tag: string) => {
    setIconTag({
      iconTag: '<i data-feather="' + tag + '"></i>',
    });
    setIcon({
      feathericon: tag,
    });
    setIconFClass({
      iconFClass: tag,
    });
  }, []);
  return (
    <Fragment>
      <Breadcrumbs mainTitle={FeatherIconsTitle} parent={Icons} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title={FeatherIconsTitle} />
              <CardBody>
                <FeatherIconsBody getIconTag={getIconTag} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <IconMarkUp iconTag={iconTag} icon={icon} iconFClass={iconFClass} />
    </Fragment>
  );
};
export default FeatherIconsContainer;
