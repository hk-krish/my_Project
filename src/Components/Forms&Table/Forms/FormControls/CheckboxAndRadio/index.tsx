import { Fragment } from "react/jsx-runtime";
import { Container, Row } from "reactstrap";
import { CheckboxAndRadioTitle, FormControlsTitle } from "../../../../../Constants";
import AnimatedButtons from "./AnimatedButtons";
import BasicRadioAndCheckbox from "./BasicRadioAndCheckbox";
import CustomCheckbox from "./CustomCheckbox";
import CustomRadio from "./CustomRadio";
import DefaultCheckbox from "./DefaultCheckbox";
import DefaultRadio from "./DefaultRadio";
import DefaultSwitches from "./DefaultSwitches";
import ImagesWithCheckbox from "./ImagesWithCheckbox";
import ImagesWithRadio from "./ImagesWithRadio";
import InlineInputTypes from "./InlineInputTypes";
import OutlinedCheckboxStyles from "./OutlinedCheckboxStyles";
import RadioToggleButtons from "./RadioToggleButtons";
import Breadcrumbs from "../../../../CoreComponents/Breadcrumbs";

const CheckboxAndRadioContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={CheckboxAndRadioTitle} parent={FormControlsTitle} />
      <Container fluid>
        <Row>
          <DefaultCheckbox />
          <CustomCheckbox />
          <DefaultRadio />
          <ImagesWithCheckbox />
          <ImagesWithRadio />
          <CustomRadio />
          <DefaultSwitches />
          <InlineInputTypes />
          <AnimatedButtons />
          <BasicRadioAndCheckbox />
          <RadioToggleButtons />
          <OutlinedCheckboxStyles />
        </Row>
      </Container>
    </Fragment>
  );
};
export default CheckboxAndRadioContainer;
