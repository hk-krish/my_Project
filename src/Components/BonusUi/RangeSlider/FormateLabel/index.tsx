import { Card, CardBody, Col } from "reactstrap";
import FormateLabelForm from "./FormateLabelForm";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import { BasicSliderData } from "../../../../Data/BonusUi/RangSlider";
import { FormattedLabels } from "../../../../Constants";

const FormateLabel = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={FormattedLabels} span={BasicSliderData} />
        <CardBody>
          <FormateLabelForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default FormateLabel;
