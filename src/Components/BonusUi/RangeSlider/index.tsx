import { Container, Row } from "reactstrap";
import DefaultRangeSlider from "./DefaultRangeSlider";
import MinMaxValue from "./MinMaxValue";
import NegativeValue from "./NegativeValue";
import Disabled from "./Disabled";
import Prefix from "./Prefix";
import FormateLabel from "./FormateLabel";
import { BonusUi, RangeTitle } from "../../../Constants";
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";

const RangeSliderContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={RangeTitle} parent={BonusUi} />
      <Container fluid>
        <Row>
          <DefaultRangeSlider />
          <MinMaxValue />
          <NegativeValue />
          <Disabled />
          <Prefix />
          <FormateLabel />
        </Row>
      </Container>
    </Fragment>
  );
};

export default RangeSliderContainer;
