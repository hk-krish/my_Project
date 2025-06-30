import { Card, CardBody, Col, Row } from "reactstrap";
import { CustomModalsTitle } from "../../../../Constants";
import { CustomModalSubTitle } from "../../../../Data/UiKits/Modal";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import CustomModal1 from "./CustomModal1";
import CustomModal2 from "./CustomModal2";
import CustomModal3 from "./CustomModal3";

const CustomModals = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={CustomModalsTitle} span={CustomModalSubTitle} />
        <CardBody>
          <Row className="g-3">
            <CustomModal1 />
            <CustomModal2 />
            <CustomModal3 />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default CustomModals;
