import { useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Card, CardBody, Col } from "reactstrap";
import { IconAccordionTitle } from "../../../Constants";
import { IconAccordionSubTitle, IconDemoData } from "../../../Data/UiKits/Accordion";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const IconAccordion = () => {
  const [open, setOpen] = useState("");
  const toggle = (id: string) => (id !== open ? setOpen(id) : setOpen(""));
  return (
    <Col xl="6" sm="12">
      <Card>
        <CommonCardHeader title={IconAccordionTitle} span={IconAccordionSubTitle} />
        <CardBody className="accordion-border icons-accordion">
          <Accordion className="dark-accordion" open={open} toggle={toggle}>
            {IconDemoData &&
              IconDemoData.map((item, index) => (
                <AccordionItem key={index}>
                  <AccordionHeader className="gap-2 bg-light-secondary txt-secondary" targetId={item.id}>
                    <span className="txt-secondary">
                      {item.icon} {item.head}
                      {open === item.id ? <ChevronUp className="svg-color" /> : <ChevronDown className="svg-color" />}
                    </span>
                  </AccordionHeader>
                  <AccordionBody accordionId={item.id}>{item.text}</AccordionBody>
                </AccordionItem>
              ))} 
          </Accordion>
        </CardBody>
      </Card>
    </Col>
  );
};
export default IconAccordion;
