import { Card, CardBody, Col } from "reactstrap";
import DisabledForm from "./DisabledForm";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import { BasicSliderData } from "../../../../Data/BonusUi/RangSlider";
import { DisabledSliderTitle } from "../../../../Constants";

const Disabled = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={DisabledSliderTitle} span={BasicSliderData} />
        <CardBody>
          <DisabledForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Disabled;
