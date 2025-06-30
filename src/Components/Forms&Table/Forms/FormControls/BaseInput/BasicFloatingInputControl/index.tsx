import { FormEvent } from "react";
import { Card, CardBody, Col, Form, Row } from "reactstrap";
import { BasicFloatingInputControlTitle } from "../../../../../../Constants";
import { BasicFloatingInputControlSubTitle } from "../../../../../../Data/Forms&Table/Forms/FormControls";
import CommonCardHeader from "../../../../../CoreComponents/CommonCardHeader";
import CommonCardFooter from "../../../Common/CommonCardFooter";
import BasicFloatingInputBody from "./BasicFloatingInputBody";

const BasicFloatingInputControl = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => e.preventDefault();

  return (
    <Col xl="6">
      <Card className="custom-basic-input">
        <CommonCardHeader title={BasicFloatingInputControlTitle} span={BasicFloatingInputControlSubTitle} />
        <Form className="theme-form" onSubmit={handleSubmit}>
          <CardBody className="custom-input">
            <Row>
              <BasicFloatingInputBody />
            </Row>
          </CardBody>
          <CommonCardFooter color1='primary' color2='light' footerClass="text-end"/>
        </Form>
      </Card>
    </Col>
  );
};
export default BasicFloatingInputControl;
