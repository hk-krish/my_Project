import { Card, CardBody, Col } from "reactstrap";
import ExtraLarge from "./ExtraLarge";
import FullScreen from "./FullScreen";
import LargeModal from "./LargeModal";
import SmallModal from "./SmallModal";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import { SizeModalTitle } from "../../../../Constants";
import { SizeModalSubTitle } from "../../../../Data/UiKits/Modal";

const SizeModal = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={SizeModalTitle} span={SizeModalSubTitle} />
        <CardBody className="badge-spacing">
          <FullScreen />
          <ExtraLarge />
          <LargeModal />
          <SmallModal />
        </CardBody>
      </Card>
    </Col>
  );
};
export default SizeModal;
