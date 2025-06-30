import { Card, CardBody, Col, Row } from "reactstrap";
import GridCardFooter from "./Common/GridCardFooter";
import { OrderClass, OrderPosition, OrderTitle } from "../../../Constants";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { GridOrderBodyData, OrderSubTitle } from "../../../Data/UiKits/Grid";

const Order = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={OrderTitle} span={OrderSubTitle} />
        <CardBody className="grid-showcase">
          <Row className="g-2">
            {GridOrderBodyData &&
              GridOrderBodyData.map((item, index) => (
                <Col xs={item.xs} sm={item.sm} className={`order-${item.order}`} key={index}>
                  <span>{item.text}</span>
                </Col>
              ))}
          </Row>
        </CardBody>
        <GridCardFooter code={OrderClass} value={OrderPosition} />
      </Card>
    </Col>
  );
};
export default Order;
