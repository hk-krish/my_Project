import { ErrorMessage, Field } from "formik";
import { Fragment, useState } from "react";
import DatePicker from "react-datepicker";
import { Col, Label, Row } from "reactstrap";
import { Big, EndingDate, EnterSomeDetails, Medium, ProjectSize, ProjectSizePlaceholder, Small, StartingDate } from "../../../../Constants";

const DateSection = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  return (
    <Fragment>
      <Row>
        <Col sm="4">
          <div className="mb-3">
            <Label>{ProjectSize}</Label>
            <Field as="select" name="size" placeholder={ProjectSizePlaceholder} className="form-select">
              <option>{Small}</option>
              <option>{Medium}</option>
              <option>{Big}</option>
            </Field>
          </div>
        </Col>
        <Col sm="4">
          <div className="d-flex flex-column align-items-stretch mb-3">
            <Label>{StartingDate}</Label>
            <DatePicker className="datepicker-here form-control" selected={startDate} onChange={(date: Date | null) => setStartDate(date)} />
          </div>
        </Col>
        <Col sm="4">
          <div className="d-flex flex-column align-items-stretch mb-3">
            <Label>{EndingDate}</Label>
            <DatePicker className="datepicker-here form-control" selected={endDate} onChange={(date: Date | null) => setEndDate(date)} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="mb-3">
            <Label>{EnterSomeDetails}</Label>
            <Field name="description" as="textarea" className="form-control" rows={3} />
            <ErrorMessage name="description" component="span" className="text-danger" />
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default DateSection;