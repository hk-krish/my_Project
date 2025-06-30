import { AppIdeas } from "../../../../Constants";
import { Badge } from "reactstrap";

const AppIdeasTimeline = () => {
  return (
    <div className="cd-timeline-block">
      <div className="cd-timeline-img cd-picture bg-primary">
        <i className="icon-pencil-alt" />
      </div>
      <div className="cd-timeline-content">
        <div className="timeline-wrapper">
          <Badge color="warning">{AppIdeas}</Badge>
        </div>
        <h5 className="m-0">{"Established new the app-ideas repository."}</h5>
        <p className="mb-0">{"developers who are just beginning their learning process. those who often concentrate on developing programmes with a user interface."}</p>
        <div className="time-content pt-2 d-flex">
          <i className="icon-github me-2"></i>
          <h6>{"View it on Github"} </h6>
        </div>
        <span className="cd-date">February 02 2025</span>
      </div>
    </div>
  );
};
export default AppIdeasTimeline;
