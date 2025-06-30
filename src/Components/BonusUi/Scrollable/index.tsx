import { Fragment } from "react/jsx-runtime";
import { Container, Row } from "reactstrap";
import { BonusUi, ScrollableTitle } from "../../../Constants";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";
import BadgesScrollbar from "./BadgesScrollbar";
import BothSideScrollbar from "./BothSideScrollbar";
import CustomScrollbar from "./CustomScrollbar";
import HorizontalScrollbar from "./HorizontalScrollbar";
import ProfileScrollable from "./ProfileScrollable";
import ScrollableContent from "./ScrollableContent";
import SmallSizeScroll from "./SmallSizeScroll";

const ScrollableContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={ScrollableTitle} parent={BonusUi} />
      <Container fluid className="list-page">
        <Row>
          <CustomScrollbar />
          <SmallSizeScroll />
          <BadgesScrollbar />
          <ProfileScrollable />
          <ScrollableContent />
          <HorizontalScrollbar />
          <BothSideScrollbar />
        </Row>
      </Container>
    </Fragment>
  );
};

export default ScrollableContainer;
