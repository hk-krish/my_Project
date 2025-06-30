import { Typeahead } from "react-bootstrap-typeahead";
import { Fragment } from "react/jsx-runtime";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { BirthDate, Email, FullName, Password, PersonalDetailsTitle, PhoneNumber, RepeatPassword } from "../../../../../Constants";
import { Days, Months, Years } from "../../../../../Data/Miscellaneous/JobSearch";

const PersonalDetails = () => {
  return (
    <Fragment>
      <h3 className="mb-0">{PersonalDetailsTitle}</h3>
      <Form className="theme-form">
        <Row>
          <Col>
            <FormGroup>
              <Label>{FullName}:<span className="font-danger">{"*"}</span></Label>
              <Input type="text" placeholder="Enter your full name" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{Email}:<span className="font-danger">{"*"}</span></Label>
              <Input type="email" placeholder="Enter email" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{Password}:<span className="font-danger">{"*"}</span></Label>
              <Input type="password" placeholder="Enter password" autoComplete="off" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{RepeatPassword}:<span className="font-danger">{"*"}</span></Label>
              <Input type="password" placeholder="Repeat password" autoComplete="off" />
            </FormGroup>
          </Col>
        </Row>
        <Row className="select-date">
          <Label className="pt-0">{BirthDate}</Label>
          <Col sm="4">
            <FormGroup>
              <Col><Typeahead id="basic-typeahead" labelKey="name" placeholder="Month" options={Months} /></Col>
            </FormGroup>
          </Col>
          <Col sm="4">
            <FormGroup>
              <Col><Typeahead id="basic-typeahead" labelKey="name" placeholder="Day" options={Days} /></Col>
            </FormGroup>
          </Col>
          <Col sm="4">
            <FormGroup>
              <Col><Typeahead id="basic-typeahead" labelKey="name" placeholder="Year" options={Years} /></Col>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{PhoneNumber}:</Label>
              <Input type="number" placeholder="Enter Phone no." />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
};
export default PersonalDetails;
