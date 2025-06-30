import { Fragment } from "react/jsx-runtime";
import { Container, Row } from "reactstrap";
import { FormWidgetsTitle, SwitchTitle } from "../../../../../Constants";
import Breadcrumbs from "../../../../CoreComponents/Breadcrumbs";
import CustomSwitch from "./CustomSwitch";
import DisabledOutlineSwitch from './DisabledOutlineSwitch';
import IconUncheckedBorderSwitch from './IconUncheckedBorderSwitch';
import SwitchSizingIcons from './SwitchSizingIcons';
import VariationOfSwitches from './VariationOfSwitches';

const SwitchContainer = () => {
  return (
    <Fragment>
    <Breadcrumbs mainTitle={SwitchTitle} parent={FormWidgetsTitle}/>
      <Container fluid>
        <Row>
          <CustomSwitch />
          <IconUncheckedBorderSwitch />
          <DisabledOutlineSwitch />
          <VariationOfSwitches />
          <SwitchSizingIcons />
        </Row>
      </Container>
    </Fragment>
  );
};
export default SwitchContainer;
