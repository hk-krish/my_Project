import { useState } from "react";
import { Button, Card, CardBody, Col, Collapse, Row } from "reactstrap";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { HorizontalAccordionTitle, ToggleWidthCollapse } from "../../../Constants";
import { HorizontalAccordionSubTitle } from "../../../Data/UiKits/Accordion";

const HorizontalAccordion = () => {
  const [open, setOpen] = useState(false);

  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={HorizontalAccordionTitle} span={HorizontalAccordionSubTitle} />
        <CardBody>
          <div className="common-flex">
            <Button color="secondary" onClick={() => setOpen(!open)}>{ToggleWidthCollapse}</Button>
          </div>
          <Row>
            <Col sm="5">
              <Collapse isOpen={open} className={`mt-3`} horizontal>
                <Card>
                  <CardBody className="bg-light-secondary accordion-h-space mb-0 text-dark">{"The collapse plugin also supports horizontal collapsing.Add the.collapse - horizontal modifier class to transition the width instead of height and set a width on the immediate child element.Feel free to write your own custom Sass, use inline styles, or use our width utilities."}</CardBody>
                </Card>
              </Collapse>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default HorizontalAccordion;
