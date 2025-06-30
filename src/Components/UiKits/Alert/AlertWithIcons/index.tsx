import { Card, CardBody, Col } from "reactstrap";
import HeartAlert from "./HeartAlert";
import TimeAlert from "./TimeAlert";
import CommonCardHeader from "../../../CoreComponents/CommonCardHeader";
import { AlertWithIconsTitle } from "../../../../Constants";
import { AlertWithIconSubTitle } from "../../../../Data/UiKits/Alert";

const AlertWithIcons=()=> {
  return (
    <Col sm="12" xl="6">
      <Card className="custom-alerts">
        <CommonCardHeader title={AlertWithIconsTitle} span={AlertWithIconSubTitle} />
        <CardBody className="dark-txt">
          <TimeAlert /> 
          <HeartAlert />
        </CardBody>
      </Card>
    </Col>
  );
}
export default AlertWithIcons