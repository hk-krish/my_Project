import { Card, CardBody, Col, Row } from "reactstrap";
import { OffSetClass, OffSetStep, OffSetTitle } from "../../../Constants";
import { OffsetBodyData, OffsetSubTitle } from "../../../Data/UiKits/Grid";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import GridCardFooter from "./Common/GridCardFooter";

const OffSet = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={OffSetTitle} span={OffsetSubTitle} />
        <CardBody className="grid-showcase">
          <Row className="g-2">
            {OffsetBodyData &&
              OffsetBodyData.map((item, index) => (
                <Col xs={item.xs} sm={item.sm} className={item.class} key={index}>
                  <span>{item.text}</span>
                </Col>
              ))}
          </Row>
        </CardBody>
        <GridCardFooter code={OffSetClass} value={OffSetStep} />
      </Card>
    </Col>
  );
};
export default OffSet;
