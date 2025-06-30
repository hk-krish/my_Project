import { Card, CardBody, Col } from "reactstrap";
import MinMaxValueForm from "./MinMaxValueForm";
import { BasicSliderData } from "../../../../Data/BonusUi/RangSlider";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import { MinMaxValues } from "../../../../Constants";

const MinMaxValue = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={MinMaxValues} span={BasicSliderData} />
        <CardBody>
          <MinMaxValueForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default MinMaxValue;
