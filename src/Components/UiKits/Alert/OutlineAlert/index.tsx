import { Card, CardBody, Col } from "reactstrap";
import { OutlineAlertTitle } from "../../../../Constants";
import { OutlineAlertSubTitle } from "../../../../Data/UiKits/Alert";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import DarkOutline from "./DarkOutline";
import LightOutline from "./LightOutline";

const OutlineAlert = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={OutlineAlertTitle} span={OutlineAlertSubTitle} />
        <CardBody className="outline-alerts">
          <LightOutline />
          <DarkOutline />
        </CardBody>
      </Card>
    </Col>
  );
};
export default OutlineAlert;
