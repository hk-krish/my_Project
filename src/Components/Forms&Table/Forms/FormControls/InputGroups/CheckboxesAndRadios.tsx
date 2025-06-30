import { Card, CardBody, Col, Input, InputGroup, InputGroupText } from "reactstrap";
import { CheckboxesAndRadiosTitle } from "../../../../../Constants";
import { CheckBoxesAndRadiosSubTitle } from "../../../../../Data/Forms&Table/Forms/FormControls";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";

const CheckboxesAndRadios = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={CheckboxesAndRadiosTitle} span={CheckBoxesAndRadiosSubTitle} />
        <CardBody className="checkbox-checked card-wrapper input-group-wrapper">
          <InputGroup>
            <InputGroupText>
              <Input className="mt-0" type="checkbox" />
            </InputGroupText>
            <Input type="text" />
          </InputGroup>
          <InputGroup>
            <InputGroupText>
              <Input className="mt-0" type="radio" defaultChecked />
            </InputGroupText>
            <Input type="text" />
          </InputGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
export default CheckboxesAndRadios;
