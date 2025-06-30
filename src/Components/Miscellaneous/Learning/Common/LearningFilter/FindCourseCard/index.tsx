import { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "react-feather";
import { Button, Card, CardBody, CardHeader, Col, Collapse, Input } from "reactstrap";
import { Filter, FindCourse } from "../../../../../../Constants";
import CheckboxLists from "./CheckboxLists";

const FindCourseCard = () => {
  const [isFilter, setIsFilter] = useState(true);
  return (
    <Col xl="12">
      <Card>
        <CardHeader>
          <h5 className="mb-0">
            <Button color="transparent" className="btn-link d-flex align-items-center gap-2 justify-content-between" onClick={() => setIsFilter(!isFilter)}>
              {FindCourse} {isFilter ? <ChevronDown /> : <ChevronUp />}
            </Button>
          </h5>
        </CardHeader>
        <Collapse isOpen={isFilter}>
          <CardBody className="filter-cards-view animate-chk">
            <div className="job-filter">
              <div className="faq-form">
                <Input type="text" placeholder="Search.." />
                <Search className="search-icon" />
              </div>
            </div>
            <CheckboxLists />
            <Button color="primary" className="text-center">{Filter}</Button>
          </CardBody>
        </Collapse>
      </Card>
    </Col>
  );
};
export default FindCourseCard;
