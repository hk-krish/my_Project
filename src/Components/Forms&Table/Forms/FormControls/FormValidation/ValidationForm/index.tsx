import { Card, CardBody, Col } from "reactstrap";
import FormCard from "./FormCard";
import CommonCardHeader from "../../../../../CoreComponents/CommonCardHeader";
import { ValidationFormTitle } from "../../../../../../Constants";
import { ValidationFormSubTitle } from "../../../../../../Data/Forms&Table/Forms/FormControls";

const ValidationForm = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={ValidationFormTitle} span={ValidationFormSubTitle} />
        <CardBody>
          <FormCard />
        </CardBody>
      </Card>
    </Col>
  );
};
export default ValidationForm;
