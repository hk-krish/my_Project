import { Fragment } from "react";
import { Container, Row } from "reactstrap";
import { BonusUi, Carousel } from "../../../Constants";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";
import AutoPlayVariant from "./AutoPlayVariant";
import MouseWheelVariant from "./MouseWheelVariant";
import SlidesOnly from "./SlidesOnly";
import WithControls from "./WithControls";
import WithIndicators from "./WithIndicators";
import WithCaptions from "./WithCaptions";
import CrossFade from "./CrossFade";
import IndividualInterval from "./IndividualInterval";
import DisableTouchSwiping from "./DisableTouchSwiping";
import DarkVariant from "./DarkVariant";

const CarouselContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={Carousel} parent={BonusUi} />
      <Container fluid>
        <Row>
          <SlidesOnly />
          <WithControls />
          <AutoPlayVariant />
          <MouseWheelVariant />
          <WithIndicators />
          <WithCaptions />
          <CrossFade />
          <IndividualInterval />
          <DisableTouchSwiping />
          <DarkVariant />
        </Row>
      </Container>
    </Fragment>
  );
};

export default CarouselContainer;
