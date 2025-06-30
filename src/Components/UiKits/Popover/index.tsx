import { Fragment } from "react/jsx-runtime";
import { Container, Row } from "reactstrap";
import { Popover, UIKits } from "../../../Constants";
import BasicPopover from "./BasicPopover";
import PopoverDirection from "./PopoverDirection";
import PopoverOffset from "./PopoverOffset";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";

const PopoverContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={Popover} parent={UIKits} />
      <Container fluid>
        <Row className="popover-main">
          <BasicPopover />
          <PopoverDirection />
          <PopoverOffset />
        </Row>
      </Container>
    </Fragment>
  );
};
export default PopoverContainer;
