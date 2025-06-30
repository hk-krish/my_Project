import { Card, CardBody, Col } from "reactstrap";
import PrefixForm from "./PrefixForm";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import { BasicSliderData } from "../../../../Data/BonusUi/RangSlider";
import { PostfixFormatedLabelTitle } from "../../../../Constants";

const Prefix = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={PostfixFormatedLabelTitle} span={BasicSliderData} />
        <CardBody className="mt-3 mb-3">
          <PrefixForm />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Prefix;
