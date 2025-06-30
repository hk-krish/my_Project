import { Fragment } from "react/jsx-runtime";
import { Container, Row } from "reactstrap";
import { TooltipTitle, UIKits } from "../../../Constants";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";
import BasicTooltip from "./BasicTooltip";
import ColoredTooltip from "./ColoredTooltip";
import FilledTooltip from "./FilledTooltip";
import HtmlTooltip from "./HtmlTooltip";
import TooltipDirection from "./TooltipDirection";

const TooltipContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={TooltipTitle} parent={UIKits} />
      <Container fluid>
        <Row>
          <BasicTooltip />
          <ColoredTooltip />
          <TooltipDirection />
          <HtmlTooltip />
          <FilledTooltip />
        </Row>
      </Container>
    </Fragment>
  );
};
export default TooltipContainer;
