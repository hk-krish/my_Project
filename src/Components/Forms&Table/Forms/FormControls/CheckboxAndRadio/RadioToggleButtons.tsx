import { Card, CardBody, Col, Input, Label } from "reactstrap";
import { Checked, Disabled, Radio, RadioToggleButtonsTitle } from "../../../../../Constants";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import { RadioToggleButtonsSubTitle } from "../../../../../Data/Forms&Table/Forms/FormControls";

const RadioToggleButtons = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={RadioToggleButtonsTitle} span={RadioToggleButtonsSubTitle} />
        <CardBody className="common-flex main-radio-toggle">
          <Input className="btn-check" id="option1" type="radio" name="options" defaultChecked />
          <Label className="btn btn-secondary" htmlFor="option1">{Checked}</Label>
          <Input className="btn-check" id="option2" type="radio" name="options" />
          <Label className="btn btn-secondary" htmlFor="option2">{Radio}</Label>
          <Input className="btn-check" id="option3" type="radio" name="options" disabled />
          <Label className="btn btn-secondary" htmlFor="option3">{Disabled}</Label>
          <Input className="btn-check" id="option4" type="radio" name="options" />
          <Label className="btn btn-secondary" htmlFor="option4">{Radio}</Label>
        </CardBody>
      </Card>
    </Col>
  );
};
export default RadioToggleButtons;
