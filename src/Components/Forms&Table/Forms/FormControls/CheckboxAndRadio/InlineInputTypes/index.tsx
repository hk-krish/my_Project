import { Card, CardBody, Col, Row } from "reactstrap";
import InlineCheckboxRadio from "./InlineCheckboxRadio";
import InlineSwitches from "./InlineSwitches";
import CommonCardHeader from "../../../../../CoreComponents/CommonCardHeader";
import { InlineInputTypesTitle } from "../../../../../../Constants";
import { InlineInputTypesSubTitle } from "../../../../../../Data/Forms&Table/Forms/FormControls";

const InlineInputTypes = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={InlineInputTypesTitle} span={InlineInputTypesSubTitle} />
        <CardBody>
          <Row className="g-3">
            <InlineCheckboxRadio />
            <InlineSwitches />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default InlineInputTypes;
