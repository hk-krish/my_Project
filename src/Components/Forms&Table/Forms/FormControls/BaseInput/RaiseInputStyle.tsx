import { FormEvent } from "react";
import { Card, CardBody, Col, Form, Input, Label, Row } from "reactstrap";
import { ColorSelectTitle, Comments, EmailAddress, Password, PixelstrapThemeTitle, RaiseInputStyleTitle } from "../../../../../Constants";
import { ColorsListBaseInput, PixelStrapRaiSetList, RaiseInputStyleSubTitle } from "../../../../../Data/Forms&Table/Forms/FormControls";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import CommonCardFooter from "../../Common/CommonCardFooter";
import CommonInput from "../../Common/CommonInput";
import CommonSelectDropdown from "../../Common/CommonSelectDropdown";

const RaiseInputStyle = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => e.preventDefault();
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={RaiseInputStyleTitle} span={RaiseInputStyleSubTitle} />
        <Form className="theme-form dark-inputs" onSubmit={handleSubmit}>
          <CardBody>
            <Row><CommonInput formGroup title={EmailAddress} inputClass="input-air-primary" inputType="email" placeholder="name@example.com"/></Row>
            <Row><CommonInput formGroup title={Password} inputClass="input-air-primary" inputType="password" placeholder="Password"/></Row>
            <Row><CommonSelectDropdown inputClass="input-air-primary digits" title={PixelstrapThemeTitle} options={PixelStrapRaiSetList} /></Row>
            <Row><CommonSelectDropdown title={ColorSelectTitle} options={ColorsListBaseInput} inputClass="input-air-primary digits custom-scrollbar" multiple={true} optionClass="rounded-0" /></Row>
            <Row>
              <Col>
                <div>
                  <Label>{Comments}</Label> 
                  <Input className="input-air-primary" type="textarea" rows="3" />
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
export default RaiseInputStyle;
