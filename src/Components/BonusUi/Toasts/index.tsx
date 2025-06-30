import { Fragment } from "react/jsx-runtime";
import { Container, Row } from "reactstrap";
import { BonusUi, ToastsTitle } from "../../../Constants";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";
import ColorsScheme from "./ColorsScheme";
import DefaultToast from "./DefaultToast";
import LiveToast from "./LiveToast";
import StackingToasts from "./StackingToasts";
import ToastPlacement from "./ToastPlacement";
import TranslucentToasts from "./TranslucentToasts";
import UniqueToast from "./UniqueToast";

const ToastsContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={ToastsTitle} parent={BonusUi} />
      <Container fluid>
        <Row>
          <LiveToast />
          <ColorsScheme />
          <StackingToasts />
          <TranslucentToasts />
          <DefaultToast />
          <UniqueToast />
          <ToastPlacement />
        </Row>
      </Container>
    </Fragment>
  );
};
export default ToastsContainer;
