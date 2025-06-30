import { Fragment } from "react/jsx-runtime";
import { Container, Row } from "reactstrap";
import { ButtonGroupTitle, ButtonsTitle } from "../../../Constants";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";
import GroupButtonClass from "./GroupButtonClass";
import NestingButton from "./NestingButton";
import RadioCheckboxButton from "./RadioCheckboxButton";
import VerticalButtonGroup from "./VerticalButtonGroup";

const ButtonGroupContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={ButtonGroupTitle} parent={ButtonsTitle} />
      <Container fluid>
        <Row>
          <GroupButtonClass />
          <RadioCheckboxButton />
          <NestingButton />
          <VerticalButtonGroup />
        </Row>
      </Container>
    </Fragment>
  );
};
export default ButtonGroupContainer;
