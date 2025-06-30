import { Card, CardBody, Col, Form, InputGroup, Label, Row } from "reactstrap";
import { CustomizingConjunctionTitle, DatePickerCardTitle, DefaultDate, DisabledDates, HumanFriendly, MinMaxValue, MultipleDatesTitle, PreloadingDates, Range } from "../../../../../../Constants";
import CommonCardHeader from "../../../../../CoreComponents/CommonCardHeader";
import CustomizingConjunction from "./CustomizingConjunction";
import DatePickerComponent from "./DatePickerComponent";
import DateRange from "./DateRange";
import DisabledDatePicker from "./DisabledDatePicker";
import HumanFriendlyDatePicker from "./HumanFriendlyDatePicker";
import MinMaxValueDatePicker from "./MinMaxValueDatePicker";
import MultiplesDates from "./MultiplesDates";

const DatePicker = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={DatePickerCardTitle} />
        <CardBody className="main-flatpickr">
          <div className="card-wrapper border rounded-3">
            <Form className="timepicker-wrapper">
              <Row>
                <Col xxl="3" className="box-col-12 text-start"><Label>{DefaultDate}</Label></Col>
                <Col xxl="9" className="box-col-12">
                  <InputGroup className="flatpicker-calender"><DatePickerComponent /></InputGroup>
                </Col>
              </Row>
              <Row>
                <Col xxl="3" className="box-col-12 text-start"><Label>{HumanFriendly}</Label></Col>
                <Col xxl="9" className="box-col-12">
                  <InputGroup className="flatpicker-calender"><HumanFriendlyDatePicker /></InputGroup>
                </Col>
              </Row><Row>
                <Col xxl="3" className="box-col-12 text-start"><Label>{MinMaxValue}</Label></Col>
                <Col xxl="9" className="box-col-12">
                  <InputGroup className="flatpicker-calender"><MinMaxValueDatePicker /></InputGroup>
                </Col>
              </Row>
              <Row>
                <Col xxl="3" className="box-col-12 text-start"><Label>{DisabledDates}</Label></Col>
                <Col xxl="9" className="box-col-12">
                  <InputGroup className="flatpicker-calender"><DisabledDatePicker /></InputGroup>
                </Col>
              </Row>
              <Row>
                <Col xxl="3" className="box-col-12 text-start"><Label>{MultipleDatesTitle}</Label></Col>
                <Col xxl="9" className="box-col-12">
                  <InputGroup className="flatpicker-calender"><MultiplesDates /></InputGroup>
                </Col>
              </Row>
              <Row>
                <Col xxl="3" className="box-col-12 text-start"><Label>{CustomizingConjunctionTitle}</Label></Col>
                <Col xxl="9" className="box-col-12">
                  <InputGroup className="flatpicker-calender"><CustomizingConjunction /></InputGroup>
                </Col>
              </Row>
              <Row>
                <Col xxl="3" className="box-col-12 text-start"><Label>{Range}</Label></Col>
                <Col xxl="9" className="box-col-12">
                  <InputGroup className="flatpicker-calender"><DateRange /></InputGroup>
                </Col>
              </Row>
              <Row>
                <Col xxl="3" className="box-col-12 text-start"><Label>{PreloadingDates}</Label></Col>
                <Col xxl="9" className="box-col-12">
                  <InputGroup className="flatpicker-calender"><DatePickerComponent /></InputGroup>
                </Col>
              </Row>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default DatePicker;
