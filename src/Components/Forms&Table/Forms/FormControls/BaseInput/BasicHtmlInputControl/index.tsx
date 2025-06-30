import { FormEvent } from "react";
import { Card, CardBody, Col, Form } from "reactstrap";
import { BasicHtmlInputControlTitle } from "../../../../../../Constants";
import { BasicHTMLInputControlSubTitle } from "../../../../../../Data/Forms&Table/Forms/FormControls";
import CommonCardHeader from "../../../../../CoreComponents/CommonCardHeader";
import CommonCardFooter from "../../../Common/CommonCardFooter";
import BasicHtmlInputBody from "./BasicHtmlInputBody";

const BasicHtmlInputControl = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => e.preventDefault();
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={BasicHtmlInputControlTitle} span={BasicHTMLInputControlSubTitle} />
        <Form className="theme-form" onSubmit={handleSubmit}>
          <CardBody className="custom-input">
            <BasicHtmlInputBody />
          </CardBody>
          <CommonCardFooter color1='primary' color2='light' footerClass="text-end"/>
        </Form>
      </Card>
    </Col>
  );
};
export default BasicHtmlInputControl;
