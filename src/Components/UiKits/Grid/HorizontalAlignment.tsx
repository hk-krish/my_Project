import { Card, CardBody, Col, Row } from "reactstrap";
import { HorizontalAlignmentTitle, HorizontalClass, HorizontalPosition } from "../../../Constants";
import { HorizontalAlignSubTitle, VerticalAlignmentData } from "../../../Data/UiKits/Grid";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import GridCardFooter from "./Common/GridCardFooter";

const HorizontalAlignment = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={HorizontalAlignmentTitle} span={HorizontalAlignSubTitle} />
        <CardBody className="grid-showcase grid-align">
          {VerticalAlignmentData.map((data, index) => (
            <Row className={`justify-content-${data}`} key={index}>
              <Col xs="5">
                <span className="bg-white">{"One column"}</span>
              </Col>
              <Col xs="5">
                <span className="bg-white">{"Two column"}</span>
              </Col>
            </Row>
          ))}
        </CardBody>
        <GridCardFooter code={HorizontalClass} value={HorizontalPosition} />
      </Card>
    </Col>
  );
};
export default HorizontalAlignment;
