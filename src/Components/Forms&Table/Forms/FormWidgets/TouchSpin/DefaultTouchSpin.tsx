import { Card, CardBody, Col } from "reactstrap";
import { DefaultTouchSpinTitle } from "../../../../../Constants";
import CommonTouchSpin from "./Common/CommonTouchSpin";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import { DefaultTouchSpinData, TouchSpinSubTitle } from "../../../../../Data/Forms&Table/Forms/FormWidgets";

const DefaultTouchSpin=()=> {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={DefaultTouchSpinTitle} span={TouchSpinSubTitle} />
        <CardBody className="common-flex">
          {DefaultTouchSpinData.map((data, index) => (
            <CommonTouchSpin key={index} color={data} btnClass={`touchspin-${data}`} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
}
export default DefaultTouchSpin