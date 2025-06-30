import { Container, Row } from "reactstrap";
import BasicTimeline from "./BasicTimeline";
import HoverTimeline from "./HoverTimeline";
import VariationTimeline from "./VariationTimeline";
import HorizontalTimeline from "./HorizontalTimeline";
import TimelineMain from "./TimelineMain";
import { BonusUi, TimelineTitle } from "../../../Constants";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";

const TimelineContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={TimelineTitle} parent={BonusUi} />
      <Container fluid>
        <Row>
          <BasicTimeline />
          <HoverTimeline />
          <VariationTimeline />
          <HorizontalTimeline />
          <TimelineMain />
        </Row>
      </Container>
    </Fragment>
  );
};
export default TimelineContainer;
