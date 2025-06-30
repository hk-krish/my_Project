import { FormEvent } from "react";
import { Button, Card, CardBody, Col, Form, FormGroup, Row } from "reactstrap";
import { BasicFormTitle, CheckMeOut, EmailAddress, Password, SignIn } from "../../../../../Constants";
import { BasicFormSubTitle } from "../../../../../Data/Forms&Table/Forms/FormControls";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import CommonCheckbox from "../../Common/CommonCheckbox";
import CommonInput from "../../Common/CommonInput";

const BasicForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => e.preventDefault();
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={BasicFormTitle} span={BasicFormSubTitle} />
        <CardBody>
          <div className="card-wrapper border rounded-3">
            <Form onSubmit={handleSubmit}>
              <Row className="g-3">
                <CommonInput title={EmailAddress} placeholder="Enter Your Email" inputType="email" colClass="col-md-12" />
                <CommonInput title={Password} placeholder="Enter Your Password" inputType="password" colClass="col-md-12" />
                <Col xs="12">
                  <FormGroup className="checkbox-checked" check>
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
export default BasicForm;
