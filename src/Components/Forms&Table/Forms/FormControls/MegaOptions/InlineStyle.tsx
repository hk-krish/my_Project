import { Badge, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { InlineStyleTitle } from "../../../../../Constants";
import { InlineStyleFormData, InlineStyleSubTitle } from "../../../../../Data/Forms&Table/Forms/FormControls";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import CommonCardFooter from "../../Common/CommonCardFooter";

const InlineStyle = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={InlineStyleTitle} span={InlineStyleSubTitle} />
        <CardBody className="megaoptions-border-space-sm">
          <Form className="mega-inline">
            <Row>
              {InlineStyleFormData.map((data) => (
                <Col sm="6" key={data.id}>
                  <Card>
                    <div className="d-flex p-20">
                      <FormGroup className={`radio radio-${data.color} m-0 w-100`} check>
                        <Input id={`radio=${data.id}`} type="radio" name="radio1" value="option1" />
                        <Label className="mb-0 w-100" htmlFor={`radio=${data.id}`} check>
                          <span className="flex-grow-1">
                            <span className="mt-0 mega-title-badge">
                              {data.badgeTitle}
                              <Badge color={data.color} className="pull-right digits">{data.digits}</Badge>
                            </span>
                            <span>{data.text}</span>
                          </span>
                        </Label>
                      </FormGroup>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Form>
        </CardBody>
        <CommonCardFooter footerClass="text-end" color1="warning" color2="transparent" btn2Class="list-light-warning text-dark" />
      </Card>
    </Col>
  );
};
export default InlineStyle;
