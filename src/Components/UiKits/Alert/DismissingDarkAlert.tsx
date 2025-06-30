import { useState } from "react";
import { Heart } from "react-feather";
import { Alert, Card, CardBody, Col } from "reactstrap";
import { DismissingDarkAlertTitle } from "../../../Constants";
import { DismissAlertSubTitle } from "../../../Data/UiKits/Alert";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const DismissingDarkAlert = () => {
  const [active, setActive] = useState(true);
  return (
    <Col sm="12" xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={DismissingDarkAlertTitle} span={DismissAlertSubTitle} />
        <CardBody>
          <Alert color="secondary" isOpen={active} toggle={() => setActive(false)}>
            <Heart />
            <p>{"Check your update! You should check in on some of those fields below."}</p>
          </Alert>
        </CardBody>
      </Card>
    </Col>
  );
};
export default DismissingDarkAlert;
