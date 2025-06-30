import { Card, CardBody, Col, Row } from "reactstrap";
import VariationAddonsFormContent from "./VariationAddonsFormContent";
import CommonCardFooter from "../../../Common/CommonCardFooter";
import CommonCardHeader from "../../../../../CoreComponents/CommonCardHeader";
import { VariationAddonsTitle } from "../../../../../../Constants";
import { VariationOfAddonsSubTitle } from "../../../../../../Data/Forms&Table/Forms/FormControls";

const VariationAddons = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={VariationAddonsTitle} span={VariationOfAddonsSubTitle} />
        <CardBody className="card-wrapper input-radius">
          <Row>
            <Col>
              <VariationAddonsFormContent />
            </Col>
          </Row>
        </CardBody>
        <CommonCardFooter color1="primary" color2="light" />
      </Card>
    </Col>
  );
};
export default VariationAddons;
