import { Card, CardBody, Col, Input, Label } from "reactstrap";
import { DisabledOutlineSwitchTitle } from "../../../../../Constants";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import { DefaultTouchSpinData, DisabledOutlineSwitchSubTitle } from "../../../../../Data/Forms&Table/Forms/FormWidgets";

const DisabledOutlineSwitch = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={DisabledOutlineSwitchTitle} span={DisabledOutlineSwitchSubTitle} />
        <CardBody className="common-flex">
          {DefaultTouchSpinData.map((data, index) => (
            <div className="d-flex" key={index}>
              <div className="text-end icon-state switch-outline">
                <Label className="switch mb-0">
                  <Input type="checkbox" />
                  <span className={`switch-state bg-${data}`}></span>
                </Label>
              </div>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};
export default DisabledOutlineSwitch