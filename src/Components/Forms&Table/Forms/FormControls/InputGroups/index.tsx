import { Container, Row } from "reactstrap";
import ButtonAddons from "./ButtonAddons";
import { FormControlsTitle, InputGroupTitle } from "../../../../../Constants";
import CustomForms from './CustomForms'
import CustomFileInput from './CustomFileInput'
import ButtonsWithDropdowns from './ButtonsWithDropdowns'
import SegmentedButtons from './SegmentedButtons'
import CheckboxesAndRadios from './CheckboxesAndRadios'
import Sizing from './Sizing'
import MultipleInputs from './MultipleInputs'
import BasicInputGroups from './BasicInputGroups'
import VariationAddons from './VariationAddons'
import { Fragment } from "react/jsx-runtime";
import Breadcrumbs from "../../../../CoreComponents/Breadcrumbs";

const InputGroupsContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={InputGroupTitle} parent={FormControlsTitle} />
      <Container fluid>
        <Row>
          <ButtonAddons />
          <CustomForms/>
          <CustomFileInput/>
          <ButtonsWithDropdowns/>
          <SegmentedButtons/>
          <CheckboxesAndRadios/>
          <Sizing/>
          <MultipleInputs/>
          <BasicInputGroups/>
          <VariationAddons/>
        </Row>
      </Container>
    </Fragment>
  );
};
export default InputGroupsContainer;
