import { Fragment } from "react/jsx-runtime";
import { Container, Row } from "reactstrap";
import { ModalTitle, UIKits } from "../../../Constants";
import BasicModal from "./BasicModal";
import CenteredModal from "./CenteredModal";
import CustomModals from "./CustomModals";
import FullscreenModal from "./FullscreenModal";
import SizeModal from "./SizeModal";
import StaticModal from "./StaticModal";
import ToggleModal from "./ToggleModal";
import Breadcrumbs from "../../CoreComponents/Breadcrumbs";

const ModalContainer = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle={ModalTitle} parent={UIKits} />
      <Container fluid>
        <Row>
          <BasicModal />
          <SizeModal />
          <FullscreenModal />
          <CenteredModal />
          <ToggleModal />
          <StaticModal />
          <CustomModals />
        </Row>
      </Container>
    </Fragment>
  );
};
export default ModalContainer;
