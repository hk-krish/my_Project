import { Card, CardBody, Col, Row } from "reactstrap";
import NestingLevel1 from "./NestingLevel1";
import NestingLevel2 from "./NestingLevel2";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import { NestingTitle } from "../../../../Constants";
import { NestingSubTitle } from "../../../../Data/UiKits/Grid";

const Nesting = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={NestingTitle} span={NestingSubTitle} />
        <CardBody className="grid-showcase">
          <Row className="g-3">
            <Col xs="3"><span>{"Level 1: .col-3"}</span></Col>
            <NestingLevel1 />
            <NestingLevel2 />
            <Col xs="4"><span>{"Level 2: .col-4"}</span></Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default Nesting;
