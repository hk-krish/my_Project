import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { OfferStyleBorderTitle } from "../../../../../Constants";
import { OfferStyleBorderFormData, OfferStyleBorderSubTitle } from "../../../../../Data/Forms&Table/Forms/FormControls";
import { dynamicImage, Image } from "../../../../../Utils";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import CommonCardFooter from "../../Common/CommonCardFooter";

const OfferStyleBorder = () => {
  return (
    <Col sm="12" xxl="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={OfferStyleBorderTitle} span={OfferStyleBorderSubTitle} />
        <CardBody className="megaoptions-border-space-sm">
          <Form className="mega-inline offer-style">
            <Row className="flex-column">
              {OfferStyleBorderFormData.map((data) => (
                <Col xs="12" key={data.id}>
                  <Card>
                    <div className="d-flex p-20">
                      <FormGroup className={`checkbox checkbox-${data.color}`} check>
                        <Input id={`checkbox-${data.id}`} type="checkbox" defaultChecked={data.check ? true : false} />
                        <Label className="my-0" htmlFor={`checkbox-${data.id}`} check>
                          <span className="flex-grow-1">
                            <span className="d-flex list-behavior-1">
                              <span className="flex-shrink-0">
                                <Image className="tab-img img-fluid" src={dynamicImage(`email-template/${data.image}`)} alt="image" />
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
        <CommonCardFooter footerClass="text-end" color1="success" color2="transparent" btn2Class="list-light-success text-dark" />
      </Card>
    </Col>
  );
};
export default OfferStyleBorder;
