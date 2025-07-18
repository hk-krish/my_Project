import { Card, CardBody, Col, FormGroup, Input, Label, Row } from "reactstrap";
import { DefaultSwitchesTitle } from "../../../../../Constants";
import { DefaultSwitchesData, DefaultSwitchesSubTitle } from "../../../../../Data/Forms&Table/Forms/FormControls";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";

const DefaultSwitches = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={DefaultSwitchesTitle} span={DefaultSwitchesSubTitle} />
        <CardBody>
          <Row className="g-3">
            {DefaultSwitchesData.map((data) => (
              <Col md="6" xl="4" key={data.id}>
                <div className={`card-wrapper border rounded-3 ${data.id !== 3 ? "rtl-input" : ""} checkbox-checked`}>
                  <h6 className="sub-title">{data.title}</h6>
                  {data.child.map((item) => (
                    <FormGroup key={item.id} className={item.groupClass ? item.groupClass : ""} check switch>
                      <Input id={`switch-${item.id}`} type="checkbox" defaultChecked={item.check ? true : false} disabled={item.disabled ? true : false} />
                      <Label htmlFor={`switch-${item.id}`} check>{item.labelText}</Label>
                    </FormGroup>
                  ))}
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default DefaultSwitches;
