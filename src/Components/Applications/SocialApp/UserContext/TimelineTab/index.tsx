import { Col, Row } from "reactstrap";
import LeftBar from "../../Common/LeftBar";
import NewUserClass from "./NewUserClass";
import NewUserClass2 from "./NewUserClass2";
import RightBar from "../../Common/RightBar";

const TimelineTab = () => {
  return (
    <Row>
      <Col className="box-col-4 xl-40" md="5" xl="3" lg="12">
        <div className="default-according style-1 faq-accordion">
          <LeftBar />
        </div>
      </Col>
      <Col className="box-col-8e xl-60" md="7" xl="6" lg="12">
        <Row>
          <NewUserClass />
          <NewUserClass2 />
        </Row>
      </Col>
      <Col className="box-col-12 xl-100" xl="3">
        <div className="default-according style-1 faq-accordion job-accordion">
          <RightBar />
        </div>
      </Col>
    </Row>
  );
};

export default TimelineTab;
