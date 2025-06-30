import { Col, InputGroup, Label, Row } from "reactstrap";
import ReactDatePicker from "react-datepicker";
import { useState } from "react";
import { PublishDateTime } from "../../../../../../Constants";

const SelectFive = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  return (
    <Col sm="6">
      <Row>
        <Col xs="12">
          <Label for="validationServer01">{PublishDateTime}</Label>
          <InputGroup className="flatpicker-calender product-date">
            <ReactDatePicker className="form-control flatpickr-input" selected={startDate} onChange={(date: Date | null) => setStartDate(date)} />
          </InputGroup>
        </Col>
      </Row>
    </Col>
  );
};

export default SelectFive;
