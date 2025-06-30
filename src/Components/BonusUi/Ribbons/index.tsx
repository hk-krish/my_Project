import React, { Fragment } from "react";
import { Container } from "reactstrap";
import LeftSideRibbons from "./LeftSideRibbons";
import RightSideRibbon from "./RightSideRibbon";
import { BonusUi, RibbonsTitle } from "../../../Constants";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";

const RibbonsContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={RibbonsTitle} parent={BonusUi} />
      <Container fluid>
        <LeftSideRibbons />
        <RightSideRibbon />
      </Container>
    </Fragment>
  );
};
export default RibbonsContainer;
