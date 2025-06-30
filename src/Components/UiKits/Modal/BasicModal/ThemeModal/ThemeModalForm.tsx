import React from "react";
import { Button, Col, Form, FormFeedback, FormGroup, Input, Label, ModalBody, Row } from "reactstrap";
import { EmailAddress, FirstName, LastName, LooksGood, SignUp } from "../../../../../Constants";

const ThemeModalForm=()=> {
  return (
    <ModalBody>
      <Form className="needs-validation" onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
        <Row className="g-3">
          <Col md="6">
            <Label htmlFor="validationCustom01">{FirstName}</Label>
            <Input id="validationCustom01" type="text" placeholder="Enter your first-name" required={true} />
            <FormFeedback valid>{LooksGood}</FormFeedback>
          </Col>
          <Col md="6">
            <Label htmlFor="validationCustom02">{LastName}</Label>
            <Input id="validationCustom02" type="text" placeholder="Enter your last-name" required={true} />
            <FormFeedback valid>{LooksGood}</FormFeedback>
          </Col>
          <Col md="12">
            <div className="mb-3">
              <Label htmlFor="exampleFormControlInput1">{EmailAddress}</Label>
              <Input id="exampleFormControlInput1" type="email" placeholder="zonotheme@gmail.com" />
            </div>
          </Col>
          <Col md="12">
            <FormGroup check>
              <Input id="flexCheckDefault" type="checkbox" />
              <Label htmlFor="flexCheckDefault" check>{"You accept our Terms and Privacy Policy by clicking Submit below."}</Label>
            </FormGroup>
            <Button color="primary">{SignUp}</Button>
          </Col>
        </Row>
      </Form>
    </ModalBody>
  );
}
export default ThemeModalForm