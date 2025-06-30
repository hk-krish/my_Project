import { Card, CardBody, Col, Row } from "reactstrap";
import BorderColor from "./BorderColor";
import BorderWidth from "./BorderWidth";
import CustomBorder from "./CustomBorder";
import TextColors from "./TextColors";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import { BorderStylesTitle } from "../../../../Constants";
import { BorderStyleSubTitle } from "../../../../Data/UiKits/HelperClasses";

const BorderStyles = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={BorderStylesTitle} span={BorderStyleSubTitle} />
        <CardBody>
          <Row className="g-3">
            <CustomBorder />
            <BorderColor />
            <BorderWidth />
            <TextColors />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default BorderStyles;
