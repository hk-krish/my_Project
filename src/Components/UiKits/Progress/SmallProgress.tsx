import { Card, CardBody, Col, Progress, Row } from "reactstrap";
import { SmallProgressTitle } from "../../../Constants";
import { SmallProgressData, SmallProgressSubTitle } from "../../../Data/UiKits/Progress";
import CommonCardHeader from "../../CoreComponents/CommonCardHeader";

const SmallProgress = () => {
  return (
    <Card className="height-equal">
      <CommonCardHeader title={SmallProgressTitle} span={SmallProgressSubTitle} />
      <CardBody className="progress-showcase progress-b-space">
        <Row>
          <Col>
            {SmallProgressData &&
              SmallProgressData.map((item, index) => (
                <div className="small-progress-bar-bg">
                  <Progress color="primary" animated striped bar value={item.value} className="small-progressbar rounded-pill sm-progress-bar mt-4" key={index}>
                    <span className="txt-primary progress-label">{item.text}</span>
                    <span className="animate-circle"></span>
                  </Progress>
                </div>
              ))}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
export default SmallProgress;
