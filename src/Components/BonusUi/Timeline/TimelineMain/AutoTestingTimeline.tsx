import { Badge } from "reactstrap";
import { AudioTesting } from "../../../../Constants";

const AutoTestingTimeline = () => {
  return (
    <div className="cd-timeline-block">
      <div className="cd-timeline-img cd-location bg-info">
        <i className="icon-pulse" />
      </div>
      <div className="cd-timeline-content">
        <div className="timeline-wrapper">
          <Badge color="primary">{AudioTesting}</Badge>
        </div>
        <h5 className="m-0">{"Musical trends and predictability"}</h5>
        <p className="mb-0">{"So, the next time you listen to music, you might or might not consider how it's actively altering your mood."}</p>
        <audio controls>
          <source src={`${process.env.PUBLIC_URL}/assets/audio/horse.ogg`} type="audio/ogg" />
        </audio>
        <span className="cd-date">June 12 2024</span>
      </div>
    </div>
  );
};
export default AutoTestingTimeline;
