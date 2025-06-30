import { Col, FormGroup, Input } from "reactstrap";
import { InlineSwitchesTitle } from "../../../../../../Constants";

const InlineSwitches = () => {
  return (
    <Col md="12" xl="4">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <h6 className="sub-title">{InlineSwitchesTitle}</h6>
        <div className="form-check-size">
          <FormGroup check inline switch>
            <Input className="check-size" type="checkbox" defaultChecked />
          </FormGroup>
          <FormGroup check switch inline>
            <Input className="check-size" type="checkbox" />
          </FormGroup>
          <FormGroup check switch inline>
            <Input className="check-size" type="checkbox" disabled />
          </FormGroup>
        </div>
      </div>
    </Col>
  );
};
export default InlineSwitches;
