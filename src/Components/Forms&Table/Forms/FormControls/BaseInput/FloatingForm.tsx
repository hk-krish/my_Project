import { FormEvent } from "react";
import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { CheckMeOut, EmailAddress, FloatingFormTitle, Password, SignIn } from "../../../../../Constants";
import { FloatingFormSubTitle } from "../../../../../Data/Forms&Table/Forms/FormControls";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import CommonCheckbox from "../../Common/CommonCheckbox";

const FloatingForm = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => event.preventDefault();
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={FloatingFormTitle} span={FloatingFormSubTitle} />
        <CardBody>
          <div className="card-wrapper border rounded-3">
            <Form onSubmit={handleSubmit} className="floating-wrapper">
              <Row className="g-3">
                <Col xs="12">
                  <FormGroup floating>
                    <Input type="email" />
                    <Label>{EmailAddress}</Label>
                  </FormGroup>
                </Col>
                <Col xs="12">
                  <FormGroup floating>
                    <Input type="password" autoComplete="off"/>
                    <Label>{Password}</Label>
                  </FormGroup>
                </Col>
                <Col xs="12">
                  <FormGroup check className="checkbox-checked">
                    <CommonCheckbox title={CheckMeOut} inputType="checkbox" check />
                  </FormGroup>
                </Col>
                <Col xs="12">
                  <Button color="primary">{SignIn}</Button>
                </Col>
              </Row>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default FloatingForm;
