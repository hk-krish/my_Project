import { Card, CardBody, Col, FormGroup, Input, Label, Row } from "reactstrap";
import { DefaultCheckboxTitle, Indeterminate, IndeterminateCheckbox } from "../../../../../Constants";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import { DefaultCheckBoxSubTitle, DefaultCheckboxData } from "../../../../../Data/Forms&Table/Forms/FormControls";

const DefaultCheckbox = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={DefaultCheckboxTitle} span={DefaultCheckBoxSubTitle} />
        <CardBody>
          <Row className="g-3">
            {DefaultCheckboxData.map((data) => (
              <Col sm="6" xl="4" key={data.id}>
                <div className="card-wrapper border rounded-3 checkbox-checked">
                  <h6 className="sub-title">{data.title}</h6>
                  {data.child.map((item) => (
                    <FormGroup key={item.id} className={item.groupClass ? item.groupClass : ""} check>
                      <Input id={item.id} type="checkbox" value="" defaultChecked={item.check ? true : false} disabled={item.disabled ? true : false} />
                      <Label htmlFor={item.id} check>{item.labelText}</Label>
                    </FormGroup>
                  ))}
                </div>
              </Col>
            ))}
            <Col sm="6" xl="12">
              <div className="card-wrapper border rounded-3 checkbox-checked">
                <h6 className="sub-title">{Indeterminate}</h6>
                <FormGroup check>
                  <Input id="flexCheckIndeterminate" type="checkbox" value="" />
                  <Label htmlFor="flexCheckIndeterminate" check>{IndeterminateCheckbox}</Label>
                </FormGroup>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default DefaultCheckbox;
