import { useState } from "react";
import { Bell } from "react-feather";
import { Alert, Card, CardBody, Col } from "reactstrap";
import { DismissingLightAlertTitle } from "../../../Constants";
import { DismissAlertSubTitle } from "../../../Data/UiKits/Alert";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const DismissingLightAlert = () => {
  const [active, setActive] = useState(true);
  return (
    <Col sm="12" xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={DismissingLightAlertTitle} span={DismissAlertSubTitle} />
        <CardBody>
          <Alert color="warning" isOpen={active} toggle={() => setActive(false)}>
            <Bell />
            <p>{"Hidden content You should check in on some of those fields below."}</p>
          </Alert>
        </CardBody>
      </Card>
    </Col>
  );
};
export default DismissingLightAlert;
