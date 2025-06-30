import { Card, CardBody, Col, Row } from "reactstrap";
import BorderedCheckbox from "./BorderedCheckbox";
import FilledCheckbox from "./FilledCheckbox";
import IconCheckbox from "./IconCheckbox";
import CommonCardHeader from "../../../../../CoreComponents/CommonCardHeader";
import { CustomCheckboxTitle } from "../../../../../../Constants";
import { CustomCheckBoxSubTitle } from "../../../../../../Data/Forms&Table/Forms/FormControls";

const CustomCheckbox = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={CustomCheckboxTitle} span={CustomCheckBoxSubTitle} />
        <CardBody>
          <Row className="g-3">
            <BorderedCheckbox />
            <IconCheckbox />
            <FilledCheckbox />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default CustomCheckbox;
