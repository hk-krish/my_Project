import { useState } from "react";
import { Button, Card, CardBody, Col, Collapse } from "reactstrap";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { ButtonWithEvent, CollapseAccordionTitle, LinkWithHref } from "../../../Constants";
import { CollapseAccordionSubTitle } from "../../../Data/UiKits/Accordion";

const CollapseAccordion = () => {
  const [open, setOpen] = useState(false);
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={CollapseAccordionTitle} span={CollapseAccordionSubTitle} />
        <CardBody className="collapse-accordion">
          <p className="common-flex">
            <Button color="dark" onClick={() => setOpen(!open)}>{LinkWithHref}</Button>
            <Button color="dark" onClick={() => setOpen(!open)}>{ButtonWithEvent}</Button>
          </p>
          <Collapse isOpen={open} className={`btn-dark mt-3`}>
            <Card>
              <CardBody className="mb-0 dark-accordion txt-light bg-dark rounded-3">{"Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger."}</CardBody>
            </Card>
          </Collapse>
        </CardBody>
      </Card>
    </Col>
  );
};
export default CollapseAccordion;
