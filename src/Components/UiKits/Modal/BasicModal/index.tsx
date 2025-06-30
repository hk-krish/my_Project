import { Card, CardBody, Col } from "reactstrap";
import { ModalTitle } from "../../../../Constants";
import { BasicModalSubTitle } from "../../../../Data/UiKits/Modal";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import ScrollingModal from "./ScrollingModal";
import SimpleModal from "./SimpleModal";
import TooltipModal from "./TooltipModal";
import ThemeModal from "./ThemeModal";

const BasicModal = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={ModalTitle} span={BasicModalSubTitle} />
        <CardBody className="badge-spacing">
          <SimpleModal />
          <ScrollingModal />
          <TooltipModal />
          <ThemeModal />
        </CardBody>
      </Card>
    </Col>
  );
};
export default BasicModal;
