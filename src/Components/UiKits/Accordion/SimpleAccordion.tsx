import { Card, CardBody, Col } from "reactstrap";
import { useState } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
import { SimpleAccordionTitle } from "../../../Constants";
import { AccordionList, SimpleAccordionSubTitle } from "../../../Data/UiKits/Accordion";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { ChevronDown, ChevronUp } from "react-feather";

const SimpleAccordion = () => {
  const [open, setOpen] = useState<string>("1");
  const toggle = (id: string) => (open === id ? setOpen("") : setOpen(id));
  return (
    <Col sm="12" xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={SimpleAccordionTitle} span={SimpleAccordionSubTitle} />
        <CardBody>
          <Accordion open={open} toggle={toggle} className="dark-accordion">
            {AccordionList.map((item, index) => (
              <AccordionItem key={index}>
                <AccordionHeader targetId={item.id} className="bg-light-primary">
                  <span className="txt-primary">
                    {item.accordionHeading}
                    {open === item.id ? <ChevronUp className="svg-color" /> : <ChevronDown className="svg-color" />}
                  </span>
                </AccordionHeader>
                <AccordionBody accordionId={item.id}>{item.bodyText}</AccordionBody>
              </AccordionItem>
            ))}
          </Accordion>
        </CardBody>
      </Card>
    </Col>
  );
};
export default SimpleAccordion;
