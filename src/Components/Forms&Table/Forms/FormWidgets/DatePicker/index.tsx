import { Container, Row } from "reactstrap";
import { DatePickerTitle, FormWidgetsTitle } from "../../../../../Constants";
import DatePicker from "./DatePicker";
import DefaultCalendar from "./DefaultCalendar";
import ReactstrapCalendar from "./ReactstrapCalendar";
import TimePicker from "./TimePicker";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../../../CoreComponents/Breadcrumbs";

const DatePickerContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={DatePickerTitle} parent={FormWidgetsTitle} />
      <Container fluid>
        <Row>
          <DefaultCalendar />
          <ReactstrapCalendar />
          <DatePicker />
          <TimePicker />
        </Row>
      </Container>
    </Fragment>
  );
};

export default DatePickerContainer;
