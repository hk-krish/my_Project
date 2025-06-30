import { Container, Row } from "reactstrap";
import DefaultStyle from "./DefaultStyle";
import HorizontalStyle from "./HorizontalStyle";
import InlineStyle from "./InlineStyle";
import OfferStyleBorder from "./OfferStyleBorder";
import SolidBorderStyle from "./SolidBorderStyle";
import VariationCheckbox from "./VariationCheckbox";
import VariationRadio from "./VariationRadio";
import { FormControlsTitle, MegaOptionsTitle } from "../../../../../Constants";
import VerticalStyle from "./VerticalStyle";
import WithoutBordersStyle from "./WithoutBordersStyle";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../../../CoreComponents/Breadcrumbs";

const MegaOptionsContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={MegaOptionsTitle} parent={FormControlsTitle} />
      <Container fluid>
        <Row>
          <VariationRadio />
          <VariationCheckbox />
          <DefaultStyle />
          <WithoutBordersStyle />
          <SolidBorderStyle />
          <OfferStyleBorder />
          <InlineStyle />
          <VerticalStyle />
          <HorizontalStyle />
        </Row>
      </Container>
    </Fragment>
  );
};
export default MegaOptionsContainer;
