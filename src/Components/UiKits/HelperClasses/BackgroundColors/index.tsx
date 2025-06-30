import { Card, CardBody, Col, Row } from "reactstrap";
import DarkBackground from "./DarkBackground";
import ExtendedBackground from "./ExtendedBackground";
import LightBackground from "./LightBackground";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import { BackgroundColorsTitle } from "../../../../Constants";
import { BackgroundColorSubTitle } from "../../../../Data/UiKits/HelperClasses";

const BackgroundColors = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={BackgroundColorsTitle} span={BackgroundColorSubTitle} />
        <CardBody>
          <Row className="g-3">
            <DarkBackground />
            <LightBackground />
            <ExtendedBackground />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default BackgroundColors