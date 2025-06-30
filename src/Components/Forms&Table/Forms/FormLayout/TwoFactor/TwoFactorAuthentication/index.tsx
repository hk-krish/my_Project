import { useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import { FactorAuthentication, TwoFactorAuthenticationTitle } from "../../../../../../Constants";
import { dynamicImage, Image } from "../../../../../../Utils";
import FirstModal from "./FirstModal";

const TwoFactorAuthentication = () => {
  const [modalOne, setModalOne] = useState(false);
  const toggle = () => setModalOne(!modalOne);
  return (
    <Col sm="12">
      <Card>
        <CardBody className="authentication-body">
          <div className="authentication-wrapper">
            <h4>{TwoFactorAuthenticationTitle}</h4>
            <p>{"Click on the authentication button below and scan the QR code"}</p>
            <Image src={dynamicImage(`forms/qr-scan.png`)} alt="qr-scan" />
          </div>
          <Button color="primary" className="mt-5" onClick={toggle}>{FactorAuthentication}</Button>
          <FirstModal toggle={toggle} modalOne={modalOne} />
        </CardBody>
      </Card>
    </Col>
  );
};
export default TwoFactorAuthentication;
