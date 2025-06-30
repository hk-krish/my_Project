import { Fragment, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import ReactDatePicker from "react-datepicker";
import { Col, Form, FormGroup, Input, InputGroup, Label, Row } from "reactstrap";
import { CollegeName, DegreeLevel, Period, Specialization, YourEducationTitle } from "../../../../../Constants";
import { DegreeLevelData } from "../../../../../Data/Miscellaneous/JobSearch";

const YourEducation = () => {
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const handleDateChange = (date: Date, index: number) => {
    const updatedDates = [...selectedDates];
    updatedDates[index] = date;
    setSelectedDates(updatedDates);
  };
  return (
    <Fragment>
      <h3 className="mb-0">{YourEducationTitle}</h3>
      <Form className="theme-form">
        <Row className="select-date">
          <Col xl="6" className="xl-100">
            <FormGroup>
              <Label>
                {CollegeName}:<span className="font-danger">{"*"}</span>
              </Label>
              <Input type="text" placeholder="Enter college name" />
            </FormGroup>
          </Col>
          <Col xl="6" className="xl-100 xl-mt-job">
            <Col>
              <Label className="text-end pt-0">
                {Period}:<span className="font-danger">{"*"}</span>
              </Label>
            </Col>
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
              <Col>
                <Label className="pt-0">
                  {DegreeLevel}:<span className="font-danger">{"*"}</span>
                </Label>
              </Col>
              <Typeahead labelKey="name" options={DegreeLevelData} placeholder="Degree" id="Degree Level" />
            </FormGroup>
          </Col>
          <Col xl="6" className="xl-100">
            <FormGroup>
              <Label>
                {Specialization}:<span className="font-danger">{"*"}</span>
              </Label>
              <Input type="text" placeholder="Enter specialization" />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
};
export default YourEducation;
