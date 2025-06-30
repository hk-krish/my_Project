import { useState } from "react";
import { HelpCircle } from "react-feather";
import { Alert, Card, CardBody, Col } from "reactstrap";
import { LeftBorderAlertTitle } from "../../../Constants";
import { LeftBorderAlertSubTitle } from "../../../Data/UiKits/Alert";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const LeftBorderAlert = () => {
  const [alertsVisibility, setAlertsVisibility] = useState(true);

  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={LeftBorderAlertTitle} span={LeftBorderAlertSubTitle} />
        <CardBody className="live-dark">
          {alertsVisibility && (
            <Alert color="light-dark" className="light text-dark border-left-dark border-left-wrapper" toggle={() => setAlertsVisibility(!alertsVisibility)}>
              <HelpCircle />
              <p>{"You can check in on some of those fields below."}</p>
            </Alert>
          )}
        </CardBody>
      </Card>
    </Col>
  );
};

export default LeftBorderAlert;
