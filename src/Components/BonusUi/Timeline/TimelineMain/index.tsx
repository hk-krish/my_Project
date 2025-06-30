import { Card, CardBody, Col } from "reactstrap";
import AppIdeasTimeline from "./AppIdeasTimeline";
import AutoTestingTimeline from "./AutoTestingTimeline";
import BlogTimeline from "./BlogTimeline";
import CarouselTimeline from "./CarouselTimeline";
import MeetUpTimeline from "./MeetUpTimeline";
import ResolutionTimeline from "./ResolutionTimeline";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import { TimelineTitle } from "../../../../Constants";
import { TimelineMainSubTitle } from "../../../../Data/BonusUi/Timeline";

const TimelineMain = () => {
  return (
    <Col sm="12" className="box-col-12">
      <Card>
        <CommonCardHeader title={TimelineTitle} span={TimelineMainSubTitle} />
        <CardBody className="rounded-timeline">
          <section className="cd-container" id="cd-timeline">
            <AppIdeasTimeline />
            <BlogTimeline />
            <CarouselTimeline />
            <AutoTestingTimeline />
            <MeetUpTimeline />
            <ResolutionTimeline />
          </section>
        </CardBody>
      </Card>
    </Col>
  );
};
export default TimelineMain;
