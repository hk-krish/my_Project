import { Col, FormGroup, Input, Label } from "reactstrap";
import { FilledCheckboxTitle, PrimarySolidCheckbox, SecondarySolidCheckbox, SuccessSolidCheckbox } from "../../../../../../Constants";

const FilledCheckbox = () => {
  return (
    <Col xl="4" sm="6">
      <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
        <h6 className="sub-title">{FilledCheckboxTitle} </h6>
        <FormGroup className="checkbox checkbox-solid-success" check>
          <Input id="solid4" type="checkbox" defaultChecked />
          <Label htmlFor="solid4" check>{SuccessSolidCheckbox}</Label>
        </FormGroup>
        <FormGroup className="checkbox checkbox-solid-primary" check>
          <Input id="solid5" type="checkbox" />
          <Label htmlFor="solid5" check>{PrimarySolidCheckbox}</Label>
        </FormGroup>
        <FormGroup className="checkbox checkbox-solid-secondary" check>
          <Input id="solid6" type="checkbox" />
          <Label htmlFor="solid6" check>{SecondarySolidCheckbox}</Label>
        </FormGroup>
      </div>
    </Col>
  );
};
export default FilledCheckbox;
