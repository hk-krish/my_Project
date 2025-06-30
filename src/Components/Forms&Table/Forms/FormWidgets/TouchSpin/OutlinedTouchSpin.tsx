import { Card, CardBody, Col } from "reactstrap";
import { OutlinedTouchSpinTitle } from "../../../../../Constants";
import CommonTouchSpin from "./Common/CommonTouchSpin";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import { DefaultTouchSpinData, TouchSpinSubTitle } from "../../../../../Data/Forms&Table/Forms/FormWidgets";

const OutlinedTouchSpin = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={OutlinedTouchSpinTitle} span={TouchSpinSubTitle} />
        <CardBody className="common-flex">
          {DefaultTouchSpinData.map((data, index) => (
            <CommonTouchSpin key={index} color={data} outline={true} btnClass={`spin-border-${data}`} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};
export default OutlinedTouchSpin;
