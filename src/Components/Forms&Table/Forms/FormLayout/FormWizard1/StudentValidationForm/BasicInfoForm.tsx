import React from "react";
import { StudentValidationFormProp } from "../../../../../../Types/FormsType";
import { Col, Input, Label, Row } from "reactstrap";
import { ConfirmPassword, Email, Name, Password } from "../../../../../../Constants";

const BasicInfoForm:React.FC<StudentValidationFormProp>=({ formData, updateFormData })=> {
  return (
    <Row className="g-3">
      <Col sm="6">
        <Label>{Name}</Label>
        <Input onChange={updateFormData} value={formData.name} name="name" type="text" placeholder="Enter your name" />
      </Col>
      <Col sm="6">
        <Label>{Email}<span className="txt-danger">*</span></Label>
        <Input name="email" onChange={updateFormData} value={formData.email} type="email" placeholder="johan@gmail.com" />
      </Col>
      <Col xs="12">
        <Col sm="12">
          <Label>{Password}<span className="txt-danger">*</span></Label>
        </Col>
        <Input name="password" onChange={updateFormData} value={formData.password} type="password" placeholder="Enter password" autoComplete="off"/>
      </Col>
      <Col xs="12">
        <Col sm="12">
          <Label>{ConfirmPassword}<span className="txt-danger">*</span></Label>
        </Col>
        <Input name="confirmPassWord" onChange={updateFormData} value={formData.confirmPassWord} type="password" placeholder="Enter confirm password" autoComplete="off"/>
      </Col>
    </Row>
  );
}
export default BasicInfoForm