import { useState } from "react";
import DatePicker from "react-datepicker";
import { Col, Input, Label } from "reactstrap";
import { useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import { Mail, Notification, RemindOn } from "../../../../../Constants";
import { timeList } from "../../../../../Data/Applications/Task";

const TaskRadioRow = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const { validation } = useAppSelector((state) => state.task);

  return (
    <Col md="12" className="mb-3 mt-0">
      <div className="d-flex date-details">
        <div className="d-inline-block">
          <Label className="d-block mb-0" htmlFor="chk-ani">
            <Input className="checkbox_animated" id="chk-ani" type="checkbox" />
            {RemindOn}
          </Label>
        </div>
        <div className="d-inline-block">
          <DatePicker className={`form-control flatpickr-input ${validation ? "is-valid" : ""}`} selected={startDate} onChange={(date: Date | null) => setStartDate(date)} />
        </div>
        <div className="d-inline-block">
          <Input type="select" className={`form-control ${validation ? "is-valid" : ""}`}>
            {timeList.map((item, index) => (<option key={index}>{item}</option>))}
          </Input>
        </div>
        <div className="d-inline-block">
          <Label className="d-block mb-0" htmlFor="chk-ani1">
            <Input className="checkbox_animated" id="chk-ani1" type="checkbox" />
            {Notification}
          </Label>
        </div>
        <div className="d-inline-block">
          <Label className="d-block mb-0" htmlFor="chk-ani2">
            <Input className="checkbox_animated" id="chk-ani2" type="checkbox" />
            {Mail}
          </Label>
        </div>
      </div>
    </Col>
  );
};
export default TaskRadioRow;