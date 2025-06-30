import { Card, CardBody, Col } from "reactstrap";
import  DefaultRangeSliderForm  from "./DefaultRangeSliderForm";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import { BasicSliderData } from "../../../../Data/BonusUi/RangSlider";
import { DefaultRangeTitle } from "../../../../Constants";

const DefaultRangeSlider = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={DefaultRangeTitle} span={BasicSliderData} />
        <CardBody>
          <DefaultRangeSliderForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultRangeSlider;
