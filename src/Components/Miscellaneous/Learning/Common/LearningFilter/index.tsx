import { useState } from "react";
import { Button, Col, Row } from "reactstrap";
import { LearningFilterTitle } from "../../../../../Constants";
import Categories from "./Categories";
import FindCourseCard from "./FindCourseCard";
import UpcomingCourses from "./UpcomingCourses";

const LearningFilter = () => {
  const [open, setOpen] = useState(false);

  return (
    <Col xl="3" className="xl-40 box-col-12 learning-filter">
      <div className="md-sidebar">
        <Button onClick={() => setOpen(!open)} color="primary" className="email-aside-toggle md-sidebar-toggle">{LearningFilterTitle}</Button>
        <div className={`md-sidebar-aside job-sidebar ${open ? "open" : ""}`}>
          <div className="default-according style-1 faq-accordion job-accordion" id="accordionoc">
            <Row>
              <FindCourseCard />
              <Categories />
              <UpcomingCourses />
            </Row>
          </div>
        </div>
      </div>
    </Col>
  );
};
export default LearningFilter;
