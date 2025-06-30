import React from "react";
import { Col, Form, FormGroup, Input, InputGroup, InputGroupText, Label, Row } from "reactstrap";
import { AboveInformationCorrect, CardNumber, Cvv, Expiration, Href, SelectPaymentMethod, Submit, UploadDocumentation } from "../../../../../../Constants";
import { PaymentModeName } from "../../../../../../Data/Forms&Table/Forms/FormLayout";
import { VerticalWizardFormProps } from "../../../../../../Types/FormsType";

const CartInfoForm: React.FC<VerticalWizardFormProps> = ({ formData, updateFormData }) => {
  return (
    <Form className="needs-validation custom-input" noValidate>
      <Row className="g-3">
        <Col xxl="6">
          <div className="card-wrapper border rounded-3 checkbox-checked">
            <h6 className="sub-title">{SelectPaymentMethod}</h6>
            <div className="radio-form">
              {PaymentModeName.map((data, index) => (
                <FormGroup check key={index}>
                  <Input id={`flexRadioDefault${index}`} type="radio" name="paymentMethod" defaultChecked={index === 2 ? true : false} />
                  <Label htmlFor={`flexRadioDefault${index}`} check>{data}</Label>
                </FormGroup>
              ))}
            </div>
          </div>
        </Col>
        <Col xxl="6">
          <Row>
            <Col xs="12">
              <InputGroup className="mb-3">
                <Input type="text" placeholder="Recipient's username" name="recipientUserName" value={formData.recipientUserName} onChange={updateFormData} />
                <a className="btn btn-outline-secondary" href={Href}>{Submit}</a>
              </InputGroup>
            </Col>
            <Col xs="12">
              <InputGroup>
                <InputGroupText>{"@"}</InputGroupText>
                <Input type="text" placeholder="Username" name="userName" value={formData.userName} onChange={updateFormData} />
              </InputGroup>
            </Col>
          </Row>
        </Col>
        <Col md="4" sm="6">
          <Label>{CardNumber}</Label>
          <Input type="number" placeholder="xxxx xxxx xxxx xxxx" name="cardNumber" value={formData.cardNumber} onChange={updateFormData} />
        </Col>
        <Col md="4" sm="6">
          <Label>{Expiration}</Label>
          <Input type="number" placeholder="xx/xx" name="expirationDate" value={formData.expirationDate} onChange={updateFormData} />
        </Col>
        <Col md="4" sm="6">
          <Label>{Cvv}</Label>
          <Input type="text" name="cvvNumber" value={formData.cvvNumber} onChange={updateFormData} />
        </Col>
        <Col md="12" sm="6">
          <Label htmlFor="formFile2">{UploadDocumentation}</Label>
          <Input id="formFile2" type="file" name="documentationName" onChange={updateFormData} />
        </Col>
        <Col xs="12">
          <FormGroup check className="mb-0">
            <Input id="invalidCheck-b" type="checkbox" required />
            <Label htmlFor="invalidCheck-b" check>{AboveInformationCorrect}</Label>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};
export default CartInfoForm;
