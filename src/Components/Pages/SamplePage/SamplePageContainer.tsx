import { Fragment } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { Pages, SampleCardTitle, SamplePageTitle } from "../../../Constants";
import { SamplePageSubTitle } from "../../../Data/Pages/Pages";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const SamplePageContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={SamplePageTitle} parent={Pages} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader title={SampleCardTitle} span={SamplePageSubTitle} tag />
              <CardBody>
                <p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default SamplePageContainer;
