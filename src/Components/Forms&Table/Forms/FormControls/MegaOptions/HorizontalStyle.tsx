import { Fragment } from "react";
import { Badge, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { HorizontalStyleTitle } from "../../../../../Constants";
import { HorizontalStyleFormData, HorizontalStyleSubTitle } from "../../../../../Data/Forms&Table/Forms/FormControls";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import CommonCardFooter from "../../Common/CommonCardFooter";

const HorizontalStyle = () => {
  return (
    <Col sm="12" xxl="6" className="box-col-12">
      <Card>
        <CommonCardHeader title={HorizontalStyleTitle} span={HorizontalStyleSubTitle} />
        <CardBody>
          <Form className="mega-horizontal">
            <Row>
              {HorizontalStyleFormData.map((data) => (
                <Fragment key={data.id}>
                  <Col sm="3"><p className="mega-title">{data.megaTitle}</p></Col>
                  {data.child.map((item) => (
                    <Col sm="9" key={item.id} className={item.colClass}>
                      <Card className={item.cardClass}>
                        <div className="d-flex p-20">
                          <FormGroup className={`radio radio-${item.color} m-0 w-100`} check>
                            <Input id={`radioh${item.id}`} type="radio" name={item.name} value="option1" defaultChecked={item.check ? true : false} />
                            <Label className="mb-0 w-100" htmlFor={`radioh${item.id}`} check>
                              <span className={`flex-grow-1 ${item.mediaBodyClass ? item.mediaBodyClass : ""}`}>
                                <span className="mt-0 mega-title-badge">{item.badgeTitle}
                                  <Badge color={item.color} className="pull-right digits">{item.digits}</Badge>
                                </span>
                                <span className={item.spanClass}>{item.star && item.star.map((star) => <i key={star.id} className={`icofont icofont-star ${star.class ? star.class : ""}`}></i>)}{item.spanText}</span>
                              </span>
                            </Label>
                          </FormGroup>
                        </div>
                      </Card>
                    </Col>
                  ))}
                </Fragment>
              ))}
            </Row>
          </Form>
        </CardBody>
        <CommonCardFooter footerClass="text-end" color1="primary" color2="light" />
      </Card>
    </Col>
  );
};
export default HorizontalStyle;
