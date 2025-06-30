import { Fragment, useState } from "react";
import { ChevronDown, ChevronUp, MapPin, Search } from "react-feather";
import { Button, Card, CardBody, CardHeader, Collapse, Input, Label } from "reactstrap";
import { CommonAccordionCardProps } from "../../../../../Types/MiscellaneousType";

const CommonAccordionCard: React.FC<CommonAccordionCardProps> = ({ items }) => {
  const [open, setOpen] = useState(true);

  return (
    <Card>
      <CardHeader>
        <h2 className="mb-0">
          <Button color="transparent" block className="btn-link d-flex align-items-center gap-2 justify-content-between" onClick={() => setOpen(!open)}>
            {items.heading} {open ? <ChevronDown /> : <ChevronUp />}
          </Button>
        </h2>
      </CardHeader>
      <Collapse isOpen={open}>
        <CardBody className={`animate-chk ${items.id === 1 ? "filter-cards-view" : ""}`}>
          {items.id === 1 && (
            <Fragment>
              <div className="job-filter mb-2">
                <div className="faq-form">
                  <Input type="text" placeholder="Search.." />
                  <Search className="search-icon" />
                </div>
              </div>
              <div className="job-filter">
                <div className="faq-form">
                  <Input type="text" placeholder="location.." />
                  <MapPin className="search-icon" />
                </div>
              </div>
            </Fragment>
          )}
          <div className={items.id === 2 ? "location-checkbox" : "checkbox-animated"}>
            {items.data.map((element, i) => (
              <Label key={i} className="d-block" htmlFor={element.id}>
                <Input className="checkbox_animated" id={element.id} type="checkbox" /> {element.title}
                {element.subTitle && <span className="d-block">{element.subTitle}</span>}
              </Label>
            ))}
          </div>
            {items.id === 1 && (<Button className="text-center" color="primary" block={items.id !== 1 ? true : false}>{items.buttonTitle}</Button>)}
        </CardBody>
          {items.id !== 1 && (<Button className="text-center" color="primary" block={items.id !== 1 ? true : false}>{items.buttonTitle}</Button>)}
      </Collapse>
    </Card>
  );
};
export default CommonAccordionCard;
