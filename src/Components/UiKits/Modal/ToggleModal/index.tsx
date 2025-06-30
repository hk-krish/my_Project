import { Card, CardBody, Col } from "reactstrap";
import ToggleModalBody from "./ToggleModalBody";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import { ToggleModalTitle } from "../../../../Constants";
import { ToggleModalSubTitle } from "../../../../Data/UiKits/Modal";

const ToggleModal = () => {
  return (
    <Col xl="4">
      <Card>
        <CommonCardHeader title={ToggleModalTitle} span={ToggleModalSubTitle} />
        <CardBody>
          <ToggleModalBody />
        </CardBody>
      </Card>
    </Col>
  );
};
export default ToggleModal