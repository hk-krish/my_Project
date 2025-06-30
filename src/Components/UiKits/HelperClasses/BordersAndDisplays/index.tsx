import { Card, CardBody, Col, Row } from "reactstrap";
import AdditiveBorder from "./AdditiveBorder";
import AdditiveRadius from "./AdditiveRadius";
import SubtractiveBorder from "./SubtractiveBorder";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import { BordersAndDisplaysTitle } from "../../../../Constants";
import { BordersAndDisplaySubTitle } from "../../../../Data/UiKits/HelperClasses";

const BordersAndDisplays = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={BordersAndDisplaysTitle} span={BordersAndDisplaySubTitle} />
        <CardBody>
          <Row className="g-3">
            <AdditiveBorder />
            <SubtractiveBorder />
            <AdditiveRadius />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default BordersAndDisplays;
