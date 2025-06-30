import { useState } from "react";
import { Alert, Button, Card, CardBody, Col } from "reactstrap";
import { LiveAlertText, LiveAlertTitle, ShowLiveAlert } from "../../../Constants";
import { LiveAlertSubTitle } from "../../../Data/UiKits/Alert";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const LiveAlert = () => {
  const [data, setData] = useState<number[]>([]);
  const removeValue = (item: number) => {
    setData(
      data.filter((value, index) => {
        return value !== item;
      })
    );
  };

  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={LiveAlertTitle} span={LiveAlertSubTitle} />
        <CardBody className="live-dark">
          {data.map((item: number, index: number) => (
            <Alert color="light-dark" key={index} toggle={() => removeValue(item)}>
              <div>{LiveAlertText}</div>
            </Alert>
          ))}
          <Button color="dark" onClick={() => setData((prev) => [...prev, prev.length + 1])}>
            {ShowLiveAlert}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LiveAlert;
