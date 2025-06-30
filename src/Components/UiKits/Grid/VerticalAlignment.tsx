import { Card, CardBody, Col, Row } from "reactstrap";
import { VerticalAlignmentTitle, VerticalClass, VerticalPosition } from "../../../Constants";
import { VerticalAlignSubTitle, VerticalAlignmentData } from "../../../Data/UiKits/Grid";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import GridCardFooter from "./Common/GridCardFooter";

const VerticalAlignment = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={VerticalAlignmentTitle} span={VerticalAlignSubTitle} />
        <CardBody className="grid-showcase mb-0">
          <Row>
            {VerticalAlignmentData.map((data, index) => (
              <Col lg="4" key={index}>
                <Row className={`grid-vertical align-items-${data} m-1 g-2 bg-light`}>
                  <Col xs="6">
                    <span className="bg-white">{"one column"}</span>
                  </Col>
                  <Col xs="6">
                    <span className="bg-white">{"two column"}</span>
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </CardBody>
        <GridCardFooter code={VerticalClass} value={VerticalPosition} />
      </Card>
    </Col>
  );
};
export default VerticalAlignment;
