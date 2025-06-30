import { Card, CardBody, Col } from "reactstrap";
import FullScreenOutline from "./FullScreenOutline";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import { FullscreenModalTitle } from "../../../../Constants";
import { FullscreenModalSubTitle } from "../../../../Data/UiKits/Modal";
import CommonBelowModal from "./CommonBelowModal";

const FullscreenModal=()=> {
  return (
    <Col xl="12">
      <Card>
        <CommonCardHeader title={FullscreenModalTitle} span={FullscreenModalSubTitle} />
        <CardBody className="badge-spacing">
          <FullScreenOutline />
          <CommonBelowModal title="Full Screen Below sm" modalClass="modal-fullscreen-sm-down" color="info-2x" />
          <CommonBelowModal title="Full screen below md" modalClass="modal-fullscreen-md-down" color="success-2x" />
          <CommonBelowModal title="Full screen below lg" modalClass="modal-fullscreen-lg-down" color="warning-2x" />
          <CommonBelowModal title="Full screen below xl" modalClass="modal-fullscreen-xl-down" color="primary-2x" />
          <CommonBelowModal title="Full screen below xxl" modalClass="modal-fullscreen-xxl-down" color="danger-2x" />
        </CardBody>
      </Card>
    </Col>
  );
}
export default FullscreenModal