import { FormEvent } from "react";
import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { CareerSelectTitle, Comments, DefaultFileText, DefaultInput, EdgesInputStyleTitle, EmailAddress, Female, Male, Password } from "../../../../../Constants";
import { CareerEdgesList, EdgesInputStyleSubTitle } from "../../../../../Data/Forms&Table/Forms/FormControls";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import CommonCardFooter from "../../Common/CommonCardFooter";
import CommonCheckbox from "../../Common/CommonCheckbox";
import CommonSelectDropdown from "../../Common/CommonSelectDropdown";
import CommonInput from "../../Common/CommonInput";

const EdgesInputStyle = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => e.preventDefault();
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={EdgesInputStyleTitle} span={EdgesInputStyleSubTitle} />
        <Form className="theme-form dark-inputs" onSubmit={handleSubmit}>
          <CardBody>
            <Row><CommonInput formGroup title={EmailAddress} inputClass="btn-pill" inputType="email" placeholder="name@example.com"/></Row>
            <Row><CommonInput formGroup title={Password} inputClass="btn-pill" inputType="password" placeholder="Password"/></Row>
            <Row><CommonSelectDropdown title={CareerSelectTitle} inputClass="btn-pill digits" options={CareerEdgesList} /></Row>
            <Row><CommonInput formGroup title={DefaultFileText} inputClass="btn-pill px-4" inputType="file"/></Row>
            <Row><CommonInput formGroup title={DefaultInput} inputClass="btn-pill" inputType="text" placeholder="Default input" /></Row>
            <Row>
              <Col>
                <FormGroup className="d-flex gap-3 checkbox-checked">
                  <FormGroup check><CommonCheckbox title={Male} check inputType="radio" name="flexRadioDefault" /></FormGroup>
                  <FormGroup check><CommonCheckbox title={Female} check inputType="radio" name="flexRadioDefault" /></FormGroup>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <div>
                  <Label>{Comments}</Label>
                  <Input className="btn-pill" type="textarea" rows="3" />
                </div>
              </Col>
            </Row>
          </CardBody>
          <CommonCardFooter color1='primary' color2='light' footerClass="text-end"/>
        </Form>
      </Card>
    </Col>
  );
};
export default EdgesInputStyle;
