import { Card, CardBody, Col, Row } from "reactstrap";
import VariationActivities from "./VariationActivities";
import VariationCheckboxUpgrade from "./VariationCheckboxUpgrade";
import CommonCardHeader from "../../../../../CoreComponents/CommonCardHeader";
import { VariationCheckboxTitle } from "../../../../../../Constants";
import { VariationCheckBoxSubTitle } from "../../../../../../Data/Forms&Table/Forms/FormControls";

const VariationCheckbox = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={VariationCheckboxTitle} span={VariationCheckBoxSubTitle} />
        <CardBody>
          <Row className="g-3">
            <VariationActivities />
            <VariationCheckboxUpgrade />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default VariationCheckbox;
