import { Col, Row } from "reactstrap";
import { PeopleKnow, ViewProfile } from "../../../../../Constants";
import LeftBar from "../../Common/LeftBar";
import RightBar from "../../Common/RightBar";
import ActivityLog from "./ActivityLog";
import EducationAndEmployment from "./EducationAndEmployment";
import HobbiesAndInterests from "./HobbiesAndInterests";
import PeopleYouMayKnow from "./PeopleYouMayKnow";

const AboutTab = () => {
  return (
    <Row>
      <Col xl="3" lg="12" md="5" className="xl-40 box-col-4e">
        <div className="default-according style-1 faq-accordion job-accordion">
          <LeftBar />
        </div>
      </Col>
      <Col xl="6" className="xl-60 box-col-8" lg="12" md="7">
        <Row>
          <PeopleYouMayKnow heading={PeopleKnow} />
          <HobbiesAndInterests />
          <EducationAndEmployment />
          <PeopleYouMayKnow heading={ViewProfile} />
          <ActivityLog />
        </Row>
      </Col>
      <Col xl="3" className="xl-100 box-col-12">
        <div className="default-according style-1 faq-accordion job-accordion">
          <Row>
            <RightBar />
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default AboutTab;
