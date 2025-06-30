import { Alert, Card, CardBody, Col } from "reactstrap";
import { AdditionalAlertTitle } from "../../../Constants";
import { AdditionalAlertData, AdditionalAlertSubTitle } from "../../../Data/UiKits/Alert";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const AdditionalAlert = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={AdditionalAlertTitle} span={AdditionalAlertSubTitle} />
        <CardBody className="dark-alert">
          {AdditionalAlertData &&
            AdditionalAlertData.map((item, index) => (
              <Alert color="transparent" className={`bg-light-${item.class}`} key={index}>
                <h3 className={`alert-heading pb-2 txt-${item.class}`}>{item.head}</h3>
                <p>{item.text}</p>
                <hr />
                <p className="mb-0">{item.subtext}</p>
              </Alert>
            ))}
        </CardBody>
      </Card>
    </Col>
  );
};
export default AdditionalAlert;
