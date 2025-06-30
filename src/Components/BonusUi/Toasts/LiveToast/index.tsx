import { Card, CardBody, Col } from "reactstrap";
import BottomLeftToast from "./BottomLeftToast";
import BottomRightToast from "./BottomRightToast";
import TopLeftToast from "./TopLeftToast";
import TopRightToast from "./TopRightToast";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import { LiveToastTitle } from "../../../../Constants";
import { LiveToastSubTitle } from "../../../../Data/BonusUi/Toasts";

const LiveToast = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={LiveToastTitle} span={LiveToastSubTitle} />
        <CardBody className="position-relative common-flex">
          <TopRightToast />
          <BottomRightToast />
          <TopLeftToast />
          <BottomLeftToast />
        </CardBody>
      </Card>
    </Col>
  );
};
export default LiveToast;
