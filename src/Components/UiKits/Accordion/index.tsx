import { Container, Row } from "reactstrap";
import SimpleAccordion from "./SimpleAccordion";
import { Accordion, UIKits } from "../../../Constants";
import FlushAccordion from "./FlushAccordion";
import MultipleCollapse from "./MultipleCollapse";
import IconAccordion from "./IconAccordion";
import OutlineAccordion from "./OutlineAccordion";
import HorizontalAccordion from "./HorizontalAccordion";
import CollapseAccordion from "./CollapseAccordion";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";

const AccordionContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={Accordion} parent={UIKits} />
      <Container fluid>
        <Row>
          <SimpleAccordion />
          <FlushAccordion />
          <MultipleCollapse />
          <IconAccordion />
          <OutlineAccordion />
          <HorizontalAccordion />
          <CollapseAccordion />
        </Row>
      </Container>
    </Fragment>
  );
};
export default AccordionContainer;
