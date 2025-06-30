import { Fragment, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import ReactDatePicker from "react-datepicker";
import { Col, Form, FormGroup, Input, InputGroup, Label, Row } from "reactstrap";
import { CompanyName, Location, Period, Position, YourExperienceTitle } from "../../../../../Constants";
import { Positions } from "../../../../../Data/Miscellaneous/JobSearch";

const YourExperience = () => {
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const handleDateChange = (date: Date, index: number) => {
    const updatedDates = [...selectedDates];
    updatedDates[index] = date;
    setSelectedDates(updatedDates);
  };
  return (
    <Fragment>
      <h3 className="mb-0">{YourExperienceTitle}</h3>
      <Form className="theme-form">
        <Row className="select-date">
          <Col xl="6" className="xl-100">
            <FormGroup>
              <Label>{Location}:<span className="font-danger">{"*"}</span></Label>
              <Input type="text" placeholder="Enter Location" />
            </FormGroup>
          </Col>
          <Col xl="6" className="xl-100 xl-mt-job">
            <Col><Label className="text-end pt-0">{Period}:<span className="font-danger">{"*"}</span></Label></Col>
            <Row>
              <Col sm="6">
                <InputGroup>
                  <ReactDatePicker className="form-control digits" placeholderText="Start Date" selected={selectedDates[0]} onChange={(date) => handleDateChange(date as Date, 0)} />
                </InputGroup>
              </Col>
              <Col sm="6" className="xs-mt-period">
                <InputGroup>
                  <ReactDatePicker className="form-control digits" placeholderText="End Date" selected={selectedDates[1]} onChange={(date) => handleDateChange(date as Date, 1)} />
                </InputGroup>
              </Col>
            </Row>
          </Col>
          <Col xl="6" className="xl-100">
            <FormGroup>
              <Col><Label className="pt-0">{Position}:<span className="font-danger">{"*"}</span></Label></Col>
              <Typeahead labelKey="name" options={Positions} placeholder="Enter Position" id="Position"/>
            </FormGroup>
          </Col>
          <Col xl="6" className="xl-100">
            <FormGroup>
              <Label>{CompanyName}:<span className="font-danger">{"*"}</span></Label>
              <Input type="text" placeholder="Enter Company Name" />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
};
export default YourExperience;
