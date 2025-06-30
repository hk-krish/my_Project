import { useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";
import { Button, Card, CardBody, CardHeader, Col, Collapse } from "reactstrap";
import { Href, UpcomingCoursesTitle } from "../../../../../Constants";
import { UpcomingCoursesData } from "../../../../../Data/Miscellaneous/Learning";

const UpcomingCourses = () => {
  const [isDevelopment, setIsDevelopment] = useState(true);

  return (
    <Col xl="12">
      <Card>
        <CardHeader>
          <h5 className="mb-0">
            <Button color="transparent" className="btn-link d-flex align-items-center gap-2 justify-content-between" onClick={() => setIsDevelopment(!isDevelopment)}>
              {UpcomingCoursesTitle} {isDevelopment ? <ChevronDown /> : <ChevronUp />}
            </Button>
          </h5>
        </CardHeader>
        <Collapse isOpen={isDevelopment}>
          <CardBody className="upcoming-course">
            {UpcomingCoursesData.map((data) => (
              <div className="d-flex" key={data.id}>
                <div className="flex-grow-1">
                  <span className="f-w-500">{data.title}</span>
                  <span className="d-block">
                    {"Course By "} <a href={Href}> {data.anchorText}</a>
                  </span>
                  <span className="d-block">
                    {data.star.map((item) => (
                      <i key={item.id} className={`fa fa-${item.class} font-warning`}></i>
                    ))}
                  </span>
                </div>
                <div>
                  <h5 className="mb-0 font-primary">{data.value}</h5>
                  <span className="d-block">{data.month}</span>
                </div>
              </div>
            ))}
          </CardBody>
        </Collapse>
      </Card>
    </Col>
  );
};
export default UpcomingCourses;
