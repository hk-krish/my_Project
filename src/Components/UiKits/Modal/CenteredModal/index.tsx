import { useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import { CenteredModalTitle, VerticallyCentered } from "../../../../Constants";
import { CenteredModalSubTitle } from "../../../../Data/UiKits/Modal";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import CenteredModalBody from "./CenteredModalBody";

const CenteredModal = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Col xl="4">
      <Card>
        <CommonCardHeader title={CenteredModalTitle} span={CenteredModalSubTitle} />
        <CardBody>
          <Button color="success" onClick={toggle}>{VerticallyCentered}</Button>
          <CenteredModalBody modal={modal} toggle={toggle} />
        </CardBody>
      </Card>
    </Col>
  );
};
export default CenteredModal;
