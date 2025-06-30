import { Card, CardBody, Col, Input } from "reactstrap";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import { FormControlSizingTitle } from "../../../../../Constants";
import { FormControlSizingSubTitle } from "../../../../../Data/Forms&Table/Forms/FormControls";

const FormControlSizing = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={FormControlSizingTitle} span={FormControlSizingSubTitle} />
        <CardBody>
          <Input bsSize="sm" type="text" placeholder=".form-control-sm" />
        </CardBody>
      </Card>
    </Col>
  );
};
export default FormControlSizing