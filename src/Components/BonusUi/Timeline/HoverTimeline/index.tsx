import { Card, CardBody, Col } from "reactstrap";
import HoverAnnualFunction from "./HoverAnnualFunction";
import HoverFresherInterview from "./HoverFresherInterview";
import HoverMeetup from "./HoverMeetup";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import { HoverTimelineTitle } from "../../../../Constants";
import { HoverTimelineSubTitle } from "../../../../Data/BonusUi/Timeline";

const HoverTimeline = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={HoverTimelineTitle} span={HoverTimelineSubTitle} />
        <CardBody>
          <ul className="square-timeline">
            <HoverAnnualFunction />
            <HoverFresherInterview />
            <HoverMeetup />
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};
export default HoverTimeline;
