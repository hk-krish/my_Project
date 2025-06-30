import { useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Card, CardBody, Col } from "reactstrap";
import { OutlineAccordionTitle } from "../../../Constants";
import { AccordionList, OutlineAccordionSubTitle } from "../../../Data/UiKits/Accordion";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const OutlineAccordion = () => {
  const [open, setOpen] = useState("");
  const toggle = (id: string) => (open === id ? setOpen("") : setOpen(id));

  return (
    <Col xl="6" sm="12">
      <Card>
        <CommonCardHeader title={OutlineAccordionTitle} span={OutlineAccordionSubTitle} />
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
export default OutlineAccordion;
