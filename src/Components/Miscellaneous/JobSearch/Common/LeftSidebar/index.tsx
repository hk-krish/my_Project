import { useState } from "react";
import { Button, Col } from "reactstrap";
import { JobFilter } from "../../../../../Constants";
import { CommonAccordionCardData } from "../../../../../Data/Miscellaneous/JobSearch";
import CommonAccordionCard from "./CommonAccordionCard";

const LeftSidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Col xl="3" className="xl-40 box-col-12">
      <div className="md-sidebar">
        <Button color="primary" className="email-aside-toggle md-sidebar-toggle" onClick={() => setOpen(!open)}>{JobFilter}</Button>
        <div className={`md-sidebar-aside job-sidebar custom-scrollbar ${open ? "open" : ""}`}>
          <div className="default-according style-1 faq-accordion job-accordion">
            {CommonAccordionCardData.map((items) => (
              <div className="accordion" key={items.id}>
                <CommonAccordionCard items={items} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Col>
  );
};
export default LeftSidebar;
