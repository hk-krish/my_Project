import { Card, CardBody, Col } from "reactstrap";
import { TooltipFormValidationTitle } from "../../../../../../Constants";
import { TooltipFormValidationSubTitle } from "../../../../../../Data/Forms&Table/Forms/FormControls";
import CommonCardHeader from "../../../../../CoreComponents/CommonCardHeader";
import TooltipFormValidationForm from "./TooltipFormValidationForm";

const TooltipFormValidation = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={TooltipFormValidationTitle} span={TooltipFormValidationSubTitle} />
        <CardBody>
          <TooltipFormValidationForm />
        </CardBody>
      </Card>
    </Col>
  );
};
export default TooltipFormValidation;
