import { Card, CardBody, Col } from "reactstrap";
import { RoundedTouchSpinTitle } from "../../../../../Constants";
import { DefaultTouchSpinData, TouchSpinSubTitle } from "../../../../../Data/Forms&Table/Forms/FormWidgets";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import CommonTouchSpin from "./Common/CommonTouchSpin";

const RoundedTouchSpin = () => {
  return (
    <Col xl="12">
      <Card>
        <CommonCardHeader title={RoundedTouchSpinTitle} span={TouchSpinSubTitle} />
        <CardBody className="common-flex rounded-touchspin">
          {DefaultTouchSpinData.map((data, index) => (
            <CommonTouchSpin key={index} arrowIcon={true} color={data} btnClass={`touchspin-${data}`} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};
export default RoundedTouchSpin;
