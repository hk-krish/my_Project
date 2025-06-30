import { Card, CardBody, Col, Input, Label } from "reactstrap";
import { Checked, CheckedSuccessRadio, DarkRadio, OutlinedCheckboxStylesTitle, SingleToggle } from "../../../../../Constants";
import { OutLinedCheckBoxStylesSubTitle } from "../../../../../Data/Forms&Table/Forms/FormControls";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";

const OutlinedCheckboxStyles = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={OutlinedCheckboxStylesTitle} span={OutLinedCheckBoxStylesSubTitle} />
        <CardBody className="common-flex main-checkbox-toggle">
          <Input className="btn-check" id="btn-check-outlined" type="checkbox" />
          <Label className="btn btn-outline-info" htmlFor="btn-check-outlined">{SingleToggle}</Label>
          <Input className="btn-check" id="btn-check-2-outlined" type="checkbox" defaultChecked />
          <Label className="btn btn-outline-danger" htmlFor="btn-check-2-outlined">{Checked}</Label>
          <Input className="btn-check" id="success-outlined" type="radio" name="options-outlined" defaultChecked />
          <Label className="btn btn-outline-success" htmlFor="success-outlined">{CheckedSuccessRadio}</Label>
          <Input className="btn-check" id="danger-outlined" type="radio" name="options-outlined" />
          <Label className="btn btn-outline-dark" htmlFor="danger-outlined">{DarkRadio}</Label>
        </CardBody>
      </Card>
    </Col>
  );
};
export default OutlinedCheckboxStyles;
