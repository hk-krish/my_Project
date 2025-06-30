import { useState } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { FlushAccordionTitle } from "../../../Constants";
import { FlushAccordionSubTitle, FlushData } from "../../../Data/UiKits/Accordion";

const FlushAccordion = () => {
  const [open, setOpen] = useState("flush1");
  const toggle = (id: string) => (open === id ? setOpen("") : setOpen(id));

  return (
    <Col sm="12" xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={FlushAccordionTitle} span={FlushAccordionSubTitle} />
        <CardBody className="common-accordion">
          <Accordion open={open} toggle={toggle} className="dark-accordion" flush={true}>
            {FlushData &&
              FlushData.map((data, index) => (
                <AccordionItem key={index}>
                  <AccordionHeader className="bg-light-success" targetId={data.id}>
                    <span className="txt-success">{data.head}</span>
                  </AccordionHeader>
                  <AccordionBody accordionId={data.id}>
                    <ul className="d-flex flex-column gap-1 accordions-content">
                      {data.child.map((item, index) => (
                        <li key={index}>{item.text}</li>
                      ))}
                    </ul>
                  </AccordionBody>
                </AccordionItem>
              ))}
          </Accordion>
        </CardBody>
      </Card>
    </Col>
  );
};
export default FlushAccordion;
