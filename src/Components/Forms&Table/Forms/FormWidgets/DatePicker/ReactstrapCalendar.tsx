import { Card, CardBody, Col, Input, Label, Row } from "reactstrap";
import { ReactstrapCalendarTitle } from "../../../../../Constants";
import CommonCardHeader from "../../../../CoreComponents/CommonCardHeader";
import { ReactstrapCalendarData } from "../../../../../Data/Forms&Table/Forms/FormWidgets";

const ReactstrapCalendar = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={ReactstrapCalendarTitle} />
        <CardBody className="card-wrapper timepicker-wrapper">
          {ReactstrapCalendarData.map((data) => (
            <Row key={data.id}>
              <Col md="3"><Label className="col-form-label">{data.labelText}</Label></Col>
              <Col md="9"><Input className="digits" type={data.type} defaultValue={data.value} /></Col>
            </Row>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};
export default ReactstrapCalendar;
