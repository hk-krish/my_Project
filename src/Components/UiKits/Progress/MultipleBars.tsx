import { Card, CardBody, Col, Progress, Row } from "reactstrap";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { MultipleBarsTitle } from "../../../Constants";
import { MultipleBarData, MultipleBarsSubTitle } from "../../../Data/UiKits/Progress";

const MultipleBars = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={MultipleBarsTitle} span={MultipleBarsSubTitle} />
        <CardBody className="progress-showcase">
          <Row>
            <Col>
              {MultipleBarData &&
                MultipleBarData.map((item, index) => (
                  <Progress key={index} multi>
                    {item.data && item.data.map((item, index) => <Progress key={index} value={item.value} color={item.class} bar />)}
                  </Progress>
                ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default MultipleBars