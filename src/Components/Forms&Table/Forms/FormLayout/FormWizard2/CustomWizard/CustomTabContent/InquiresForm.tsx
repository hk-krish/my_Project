import React, { ChangeEvent, useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { toast } from "react-toastify";
import { ContactNumber, Continue, DescribeIssue, Email, Previous } from "../../../../../../../Constants";
import { ActiveCallbackProp } from "../../../../../../../Types/FormsType";
import { ItemsNameList } from "../../../../../../../Data/Forms&Table/Forms/FormLayout";

const InquiresForm: React.FC<ActiveCallbackProp> = ({ activeCallBack ,differentId}) => {
  const [formData, setFormData] = useState({ notifications: "", email: "", contactNumber: "", describeIssue: "" });
  const { notifications, email, contactNumber, describeIssue } = formData;

  const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    let value = name === "rememberNextTime" ? event.target.checked : event.target.value;
    setFormData({ ...formData, [name]: value });
  };
  const handleNextButton = () => {
    if (notifications !== "" && email !== "" && contactNumber !== "" && describeIssue !== "") activeCallBack(4);
    else return toast.error("please fill out all the fields before moving on to the next step");
  };
  return (
    <Form onSubmit={(event) => event.preventDefault()} className="needs-validation" noValidate>
      <Row className="g-3">
        <Col xs="12" className="inquiries-form">
          <Row>
            <Col md="6">
              <p className="f-w-500">{"Select the option how you want to receive important notifications."}</p>
              <div className="choose-option">
                {ItemsNameList.map((data, index) => (
                  <FormGroup check key={index} className="radio radio-primary">
                    <Input className="me-2" id={differentId ? data: `${data+index}`} type="radio" name="notifications" onChange={updateFormData} checked={notifications === data} value={data} />
                    <Label htmlFor={differentId ? data: `${data+index}`} check>{data}</Label>
                  </FormGroup>
                ))}
              </div>
            </Col>
            <Col md="6">
              <Row className="g-3">
                <Col xs="12">
                  <Label>{Email}<span className="txt-danger">*</span></Label>
                  <Input type="text" placeholder="org@support.com" value={email} name="email" onChange={updateFormData} />
                </Col>
                <Col xs="12">
                  <Label>{ContactNumber}</Label>
                  <Input type="number" placeholder="Enter number" value={contactNumber} name="contactNumber" onChange={updateFormData} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs="12">
          <Label className="f-w-500">{DescribeIssue}</Label>
          <Input type="textarea" rows={3} value={describeIssue} name="describeIssue" onChange={updateFormData} />
        </Col>
        <Col xs="12" className="text-end">
          <Button color="primary" className="me-2" onClick={() => activeCallBack(2)}>{Previous}</Button>
          <Button color="primary" onClick={handleNextButton}>{Continue}</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default InquiresForm;
