import { Badge } from "reactstrap";
import { BlogBadge } from "../../../../Constants";

const BlogTimeline = () => {
  return (
    <div className="cd-timeline-block">
      <div className="cd-timeline-img bg-danger">
        <i className="icon-youtube" />
      </div>
      <div className="cd-timeline-content">
        <div className="timeline-wrapper">
          <Badge color="danger">{BlogBadge}</Badge>
        </div>
        <h5 className="m-0">{"Implemented the program for weekly code challenges."}</h5>
        <p className="mb-0">
          {"Challenges"} <em className="txt-danger">{"help you build problem-solving skills, better understand the programming."} </em>
          {"If you want to improve your skills in programming."}
        </p>
        <div className="ratio ratio-21x9 m-t-20">
          <iframe src="https://www.youtube.com/embed/sqRk0Ly66Ps" title="blog_time" allowFullScreen></iframe>
        </div>
        <span className="cd-date">March 12 2025</span>
      </div>
    </div>
  );
};
export default BlogTimeline;
