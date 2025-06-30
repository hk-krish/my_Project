import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { SolidBorderStyleTitle } from "../../../../../Constants";
import { SolidBordersStyleSubTitle, SolidBorderStyleFormData } from "../../../../../Data/Forms&Table/Forms/FormControls";
import { dynamicImage, Image } from "../../../../../Utils";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import CommonCardFooter from "../../Common/CommonCardFooter";

const SolidBorderStyle = () => {
  return (
    <Col sm="12" xxl="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={SolidBorderStyleTitle} span={SolidBordersStyleSubTitle} />
        <CardBody className="megaoptions-border-space-sm">
          <Form className="mega-inline border-style">
            <Row className="flex-column">
              {SolidBorderStyleFormData.map((data) => (
                <Col xs="12" key={data.id}>
                  <Card>
                    <div className="d-flex p-20">
                      <FormGroup className="radio radio-primary ms-0" check>
                        <Input id={`radio-${data.id}`} type="radio" name="radio1" value="option1" />
                        <Label className="my-0" htmlFor={`radio-${data.id}`} check>
                          <span className="flex-grow-1">
                            <span className="d-flex list-behavior-1">
                              <span className="flex-shrink-0">
                                <Image className="tab-img img-fluid" src={dynamicImage(`blog/${data.image}`)} alt="home" />
                              </span>
                              <span className="flex-grow-1">
                                <span className="mb-0">{data.spanText}</span>
                              </span>
                            </span>
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
        <CommonCardFooter footerClass="text-end" color1="primary" color2="light" />
      </Card>
    </Col>
  );
};
export default SolidBorderStyle;
