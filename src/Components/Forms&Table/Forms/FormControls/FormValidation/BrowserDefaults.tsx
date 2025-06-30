import React from "react";
import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { AgreePolicy, BrowserDefaultsTitle, ChooseFile, ConfirmationText, DescriptionLabel, EmailAddress, FirstName, Password, State, Submit } from "../../../../../Constants";
import { BrowserDefaultsSubTitle, Options } from "../../../../../Data/Forms&Table/Forms/FormControls";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import CommonInput from "../../Common/CommonInput";
import CommonSelect from "../../Common/CommonSelect";
import RadioPayMethod from "../../Common/RadioPayMethod";
import CommonCheckbox from "../../Common/CommonCheckbox";

const BrowserDefaults = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => e.preventDefault();
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={BrowserDefaultsTitle} span={BrowserDefaultsSubTitle} />
        <CardBody className="custom-input">
          <Form onSubmit={handleSubmit}>
            <Row className="g-3">
              <CommonInput placeholder="First name" title={FirstName} required />
              <CommonInput placeholder="pesamof475@saeoil.com" title={EmailAddress} inputType="email" required />
              <CommonInput title={Password} inputType="password" required />
              <CommonSelect title={State} data={Options} />
              <CommonInput title={ChooseFile} inputType="file" required />
              <RadioPayMethod colClass="col-12" />
              <CommonInput title={DescriptionLabel} inputType="textarea" required />
              <Col xs="12" className="checkbox-checked">
                <CommonCheckbox title={AgreePolicy} inputType="checkbox" check required />
              </Col>
              <Col xs="12">
                <FormGroup check switch>
                  <Input type="checkbox" id="flexSwitchCheckDefault" required />
                  <Label htmlFor="flexSwitchCheckDefault" check>{ConfirmationText}</Label>
                </FormGroup>
              </Col>
              <Col xs="12">
                <Button color="primary">{Submit}</Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};
export default BrowserDefaults;
