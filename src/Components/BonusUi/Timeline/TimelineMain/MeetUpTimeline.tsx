import { Badge } from "reactstrap";
import { MeetUp } from "../../../../Constants";

const MeetUpTimeline = () => {
  return (
    <div className="cd-timeline-block">
      <div className="cd-timeline-img cd-location bg-secondary">
        <i className="icon-pin-alt" />
      </div>
      <div className="cd-timeline-content">
        <div className="timeline-wrapper">
          <Badge color="success">{MeetUp}</Badge>
        </div>
        <h5 className="m-0">{"Web-designer's meet-up "}</h5>
        <p className="mb-0">{"Find nearby web designers to network with! A Web Design Meetup is a place where you can discuss tools. "}</p>
        <div className="time-content pt-2 d-flex">
          <i className="icon-android me-2"></i>
          <h6>{" Please! Meet-up"}</h6>
        </div>
        <span className="cd-date">November 04 2025</span>
      </div>
    </div>
  );
};
export default MeetUpTimeline;
