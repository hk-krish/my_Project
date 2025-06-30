import { Button, Card, CardBody, Col, Progress } from "reactstrap";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";
import { ProgressWithNumberTitle } from "../../../Constants";
import { ProgressNumberSubTitle } from "../../../Data/UiKits/Progress";

const ProgressWithNumber = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={ProgressWithNumberTitle} span={ProgressNumberSubTitle} />
        <CardBody>
          <div className="position-relative m-4 custom-progress-bar-steps">
            <Progress className="progress-wrapper" value={50} color="primary"/>
            <Button color="primary" size="sm" className="position-absolute top-0 start-0 translate-middle rounded-circle">{"1"}</Button>
            <Button color="primary" size="sm" className="position-absolute top-0 start-50 translate-middle rounded-circle">{"2"}</Button>
            <Button color="transparent" size="sm" className="progress-btn position-absolute top-0 start-100 translate-middle rounded-circle">{"3"}</Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ProgressWithNumber;
