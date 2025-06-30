import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { Apps, CalenderHeading } from "../../../Constants";
import DragCalendar from "./DragCalendar";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";

const CalendarContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={CalenderHeading} parent={Apps} />
      <Container fluid className="calendar-basic">
        <Card>
          <CardBody>
            <Row>
              <Col sm="12">
                <Row>
                  <DragCalendar />
                </Row>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default CalendarContainer;
