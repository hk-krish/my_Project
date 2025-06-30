import { Fragment } from "react/jsx-runtime";
import { Container, Row } from "reactstrap";
import { FormWidgetsTitle, TouchSpinTitle } from "../../../../../Constants";
import ButtonsWithPrefixPostfix from "./ButtonsWithPrefixPostfix";
import DefaultTouchSpin from "./DefaultTouchSpin";
import IconsWithPrefixAndPostfix from "./IconsWithPrefixAndPostfix";
import OutlinedTouchSpin from "./OutlinedTouchSpin";
import RoundedTouchSpin from "./RoundedTouchSpin";
import Breadcrumbs from "../../../../CoreComponents/Breadcrumbs";

const TouchSpinContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={TouchSpinTitle} parent={FormWidgetsTitle} />
      <Container fluid>
        <div className="bootstrap-touchspin">
          <Row>
            <DefaultTouchSpin />
            <OutlinedTouchSpin />
            <IconsWithPrefixAndPostfix />
            <ButtonsWithPrefixPostfix />
            <RoundedTouchSpin />
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default TouchSpinContainer;
