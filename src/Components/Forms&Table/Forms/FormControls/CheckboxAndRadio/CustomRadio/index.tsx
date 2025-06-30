import { Card, CardBody, Col, Row } from "reactstrap";
import BorderedRadio from "./BorderedRadio";
import FilledRadio from "./FilledRadio";
import IconsRadio from "./IconsRadio";
import CommonCardHeader from "../../../../../CoreComponents/CommonCardHeader";
import { CustomRadiosTitle } from "../../../../../../Constants";
import { CustomRadioBoxSubTitle } from "../../../../../../Data/Forms&Table/Forms/FormControls";

const CustomRadio = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={CustomRadiosTitle} span={CustomRadioBoxSubTitle} />
        <CardBody>
          <Row className="g-3">
            <BorderedRadio />
            <IconsRadio />
            <FilledRadio />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default CustomRadio;
