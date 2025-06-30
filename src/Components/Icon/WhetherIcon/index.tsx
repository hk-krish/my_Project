import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { Icons, WhetherIconTitle, WhetherIconsWithAnimations } from "../../../Constants";
import { WeatherIconData } from "../../../Data/Icons/WhetherIcon";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";

const WhetherIconContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={WhetherIconTitle} parent={Icons} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title={WhetherIconsWithAnimations} />
              <CardBody>
                <Row className="icon-lists whether-icon">
                  {WeatherIconData.map((icon, i) => (
                    <Col lg="2" xs="3" key={i}>
                      {icon.icon}
                    </Col>
                  ))}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default WhetherIconContainer;
