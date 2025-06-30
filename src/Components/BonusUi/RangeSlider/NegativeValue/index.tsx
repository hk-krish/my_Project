import { Card, CardBody, Col } from "reactstrap";
import NegativeValueForm from "./NegativeValueForm";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import { BasicSliderData } from "../../../../Data/BonusUi/RangSlider";
import { NagativeRangeTitle } from "../../../../Constants";

const NegativeValue = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={NagativeRangeTitle} span={BasicSliderData} />
        <CardBody>
          <NegativeValueForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default NegativeValue;
