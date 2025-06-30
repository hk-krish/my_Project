import { Card, CardBody, Col, FormGroup, Input, Row } from "reactstrap";
import { CustomSwitchTitle } from "../../../../../Constants";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import { CustomSwitchData, CustomSwitchSubTitle } from "../../../../../Data/Forms&Table/Forms/FormWidgets";

const CustomSwitch = () => {
  return (
    <Col md="12">
      <Card>
        <CommonCardHeader title={CustomSwitchTitle} span={CustomSwitchSubTitle} />
        <CardBody>
          <Row className="g-3">
            {CustomSwitchData.map((data) => (
              <Col md="4" key={data.id} className={data.id !== 3 ? "col-sm-6" : ""}>
                <div className={`card-wrapper border rounded-3 ${data.cardClass}`}>
                  <div className={`form-check-size ${data.formSize}`}>
                    {data.child.map((item) => (
                      <FormGroup key={item.id} check switch inline>
                        <Input className={`switch-${item.color} check-size`} type="checkbox" disabled={item.disabled ? true : false} defaultChecked />
                      </FormGroup>
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default CustomSwitch;
