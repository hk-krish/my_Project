import { Card, CardBody, Col, FormGroup, Input, Label, Row } from "reactstrap";
import { DefaultRadioTitle } from "../../../../../Constants";
import { DefaultRadioData, DefaultRadioSubTitle } from "../../../../../Data/Forms&Table/Forms/FormControls";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";

const DefaultRadio = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={DefaultRadioTitle} span={DefaultRadioSubTitle} />
        <CardBody>
          <Row className="g-3">
            {DefaultRadioData.map((data) => (
              <Col sm="6" xl="4" key={data.id}>
                <div className="card-wrapper border rounded-3 checkbox-checked">
                  <h6 className="sub-title">{data.title}</h6>
                  {data.child.map((item) => (
                    <FormGroup key={item.id} className={item.groupClass ? item.groupClass : ""} check>
                      <Input id={item.id} type="radio" value="" name={item.name} defaultChecked={item.check ? true : false} disabled={item.disabled ? true : false} />
                      <Label htmlFor={item.id} check>{item.labelText}</Label>
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
export default DefaultRadio;
